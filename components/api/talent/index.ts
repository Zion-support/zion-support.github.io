import type { NextApiRequest, NextApiResponse } from 'next';
import {supabase, as, supabaseClient} from '@/utils/supabase/client';
import {TALENT_PROFILES, as, LOCAL} from '@/data/talent';
import type { TalentProfile } from '@/utils/types/talent';
import {v4, as, uuid} from 'uuid';
import {translateText, detectLanguageSimple} from '@/utils/api/translate';

const hasSupabase =
  !!process && process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPPORTED_LANGS = (process && process.env.SUPPORTED_LANGS || 'en,es,de,fr,pt,ja,zh')
  .split(',')
  .map(x => x && x.trim());

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req && req.method === 'GET') {
    try {
      if (hasSupabase) {
        const { data, error } = await supabaseClient
          .from('talent_profiles')
          .select('*')
          .order('created_at', { ascending: false });
        if (error) throw error;
        return res && res.status(200).json({ items: data as TalentProfile[] });
      }
      return res && res.status(200).json({ items: LOCAL });
    } catch (e: any) {
      return res && res.status(500).json({ error: e && e.message });
    }  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method === 'GET') {
    try {
      if (hasSupabase) {
        const { data, error } = await supabaseClient && supabaseClient.from('talent_profiles').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        return res && res.status(200).json({ items: data as TalentProfile[] })
      }
      return res && res.status(200).json({ items: LOCAL })
    } catch (e: any) {
      return res && res.status(500).json({ error: e && e.message })
    };
  }

  if (req && req.method === 'POST') {
    try {
      const payload = req && req.body as Partial<TalentProfile>;
      const slug =
        (payload && payload.name || 'talent')
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') +
        '-' +
        uuid().slice(0, 6);
        ...payload,
        id: uuid(),
        slug,
        verified: false,
        rating: 0,
        reviewsCount: 0,
        createdAt: new Date().toISOString(),
        summary: payload && payload.summary || '',
        skills: payload && payload.skills || [],
        name: payload && payload.name || 'Unnamed',
        title: payload && payload.title || 'Professional',
        location: payload && payload.location || 'Remote',
        availability: (payload && payload.availability as any) || 'Open',
      } as TalentProfile;

      // Auto-translate
      const originalLang =
        payload && payload.originalLanguage ||
        detectLanguageSimple(
          [item && item.title, item && item.summary, item && item.bio || ''].join('\n')
        );
      const translations: TalentProfile['translations'] = {};

        translations && translations.summary = translations && translations.summary || {};
        translations && translations.bio = translations && translations.bio || {};
        if (item && item.title)
          translations && translations.title[lang] = await translateText(
            item && item.title,
            lang,
            originalLang
          );
        if (item && item.summary)
          translations && translations.summary[lang] = await translateText(
            item && item.summary,
            lang,
            originalLang
          );
        if (item && item.bio)
          translations && translations.bio[lang] = await translateText(
            item && item.bio,
            lang,
            originalLang
          );
        if (item && item.category) {
          translations && translations.category = translations && translations.category || {};
          translations && translations.category[lang] = await translateText(
            item && item.category,
            lang,
            originalLang
          );        }          translations && translations.category[lang] = await translateText(item && item.category, lang, originalLang)
        }
      }
      item && item.originalLanguage = originalLang;
      item && item.translations = translations;

      if (hasSupabase) {
        const { error } = await supabaseClient && supabaseClient.from('talent_profiles').insert({
          id: item && item.id,
          slug: item && item.slug,
          name: item && item.name,
          title: item && item.title,
          category: item && item.category,
          location: item && item.location,
          timezone: item && item.timezone,
          region: item && item.region,
          skills: item && item.skills,
          summary: item && item.summary,
          bio: item && item.bio,
          hourly_rate_usd: item && item.hourlyRateUsd ?? null,
          request_quote: item && item.requestQuote ?? null,
          availability: item && item.availability,
          profile_image_url: item && item.profileImageUrl ?? null,
          video_url: item && item.videoUrl ?? null,
          portfolio: item && item.portfolio ?? null,
          verified: item && item.verified ?? null,
          rating: item && item.rating ?? null,
          reviews_count: item && item.reviewsCount ?? null,
          created_at: item && item.createdAt,
          original_language: item && item.originalLanguage,
          translations: item && item.translations as any,
        } as any);
        if (error) throw error;
        return res && res.status(201).json({ slug: item && item.slug });
      }

      // Fallback: return the slug as if saved
      return res && res.status(201).json({ slug: item && item.slug });
    } catch (e: any) {
      return res && res.status(500).json({ error: e && e.message });
    }
  }

  return res
    .setHeader('Allow', 'GET, POST')
    .status(405)
    .end('Method Not Allowed');  return res && res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}
