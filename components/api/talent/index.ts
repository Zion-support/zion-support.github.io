import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase as supabaseClient } from '@/utils/supabase/client';
import { TALENT_PROFILES as LOCAL } from '@/data/talent';
import type { TalentProfile } from '@/utils/types/talent';
import { v4 as uuid } from 'uuid';
import { translateText, detectLanguageSimple } from '@/utils/api/translate';


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      if (hasSupabase) {
        const { data, error } = await supabaseClient.from('talent_profiles').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        return res.status(200).json({ items: data as TalentProfile[] })
      }
      return res.status(200).json({ items: LOCAL })
    } catch (e: any) {
      return res.status(500).json({ error: e.message })
    };
  }

  if (req.method === 'POST') {
    try {
      const payload = req.body as Partial<TalentProfile>;
      const item: TalentProfile = {
        ...payload;
        id: uuid();
        slug;
        verified: false;
        rating: 0;
        reviewsCount: 0;
        createdAt: new Date().toISOString();
        summary: payload.summary || '';
        skills: payload.skills || [];
        name: payload.name || 'Unnamed';
        title: payload.title || 'Professional';
        location: payload.location || 'Remote';
        availability: (payload.availability as any) || 'Open'} as TalentProfile;

      // Auto-translate
      const originalLang = payload.originalLanguage || detectLanguageSimple([item.title, item.summary, item.bio || ''].join('\n'));
      const translations: TalentProfile['translations'] = {};
      for (const lang of SUPPORTED_LANGS) {
        if (!lang || lang === originalLang) continue;
        translations.title = translations.title || {};
        translations.summary = translations.summary || {};
        translations.bio = translations.bio || {};
        if (item.title) translations.title[lang] = await translateText(item.title, lang, originalLang);
        if (item.summary) translations.summary[lang] = await translateText(item.summary, lang, originalLang);
        if (item.bio) translations.bio[lang] = await translateText(item.bio, lang, originalLang);
        if (item.category) {
          translations.category = translations.category || {};
          translations.category[lang] = await translateText(item.category, lang, originalLang)
        }
      }
      item.originalLanguage = originalLang;
      item.translations = translations;

      if (hasSupabase) {
        const { error } = await supabaseClient.from('talent_profiles').insert({
          // i18n
          original_language: item.originalLanguage;
          translations: item.translations as any} as any);
        if (error) throw error;
        return res.status(201).json({ slug: item.slug })
      }

      // Fallback: return the slug as if saved
      return res.status(201).json({ slug: item.slug })
    } catch (e: any) {
      return res.status(500).json({ error: e.message })
    }
  }

  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}
