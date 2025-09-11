import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase as supabaseClient } from '@/utils/supabase/client';
import { TALENT_PROFILES as LOCAL } from '@/data/talent';
import type { TalentProfile } from '@/utils/types/talent';
import { v4 as uuid } from 'uuid';
import { translateText, detectLanguageSimple } from '@/utils/api/translate';
const hasSupabase =
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method === 'GET') {
    try {
      if (hasSupabase) {
        const { data, error } = await supabaseClient
          .from('talent_profiles')
          .select('*');
          .order('created_at', { ascending: false });
        if (error) throw error;
        return res && res.status(200).json({ items: data as TalentProfile[] });
      }
      return res && res.status(200).json({ items: LOCAL });
    } catch (e: any) {
      return res && res.status(500).json({ error: e && e.message });
    }  }
const hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const SUPPORTED_LANGS = (process.env.SUPPORTED_LANGS || 'en,es,de,fr,pt,ja,zh').split().map((x) => x.trim());
      return res && res.status(500).json({ error: e && e.message })
    };
  }
  if (req && req.method === 'POST') {
    try {
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
export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === 'GET') {
    try {
      if (hasSupabase) {
        const { data, error } = await supabaseClient.from('talent_profiles').select('*').order('created_at', { ascending: false }),
        if (error) throw error,
      if (hasSupabase) {;
        const { data, error } = await supabaseClient.from('talent_profiles').select('*').order('created_at', { ascending: false });
        if (error) throw error;
        return res.status(200).json({ items: data as TalentProfile[] })
      }
      return res.status(200).json({ items: LOCAL })
    } catch (e: any) {
      return res.status(500).json({ error: e.message })
    }
  }
availability: (payload.availability as any) || 'Open',
}
        reviews_count: 0,
        created_at: new Date ().toISOString (),
        summary: payload.summary || '',
        skills: payload.skills || [],
        name: payload.name || 'Unnamed',
        title: payload.title || 'Professional',
        location: payload.location || 'Remote',
        availability: (payload.availability as any) || 'Open',      } as TalentProfile;
;
      // Auto - translate;
      const original_lang =;
        payload.original_language ||;
        detectLanguageSimple (
          [item.title, item.summary, item.bio || ''].join ('\n'));
      const translations: TalentProfile['translations'] = {}
      ;
        translations.summary = translations.summary || {}
        translations.bio = translations.bio || {}
        // Check condition
if (
          translations.title[lang] = await translate_text () {
  $2
}
            item.title,
            lang,
            original_lang);
        // Check condition
if (
          translations.summary[lang] = await translate_text () {
  $2
}
            item.summary,
            lang,
            original_lang);
        // Check condition
if (
          translations.bio[lang] = await translate_text () {
  $2
}
            item.bio,
            lang,
            original_lang);
        // Check condition
if ( {) {
  $2
}
          translations.category = translations.category || {}
          translations.category[lang] = await translate_text (
            item.category,
            lang,
            original_lang);        }          translations.category[lang] = await translate_text (item.category, lang, original_lang);
        }
      }
      item.original_language = original_lang;
      item.translations = translations;
;
      // Check condition
if ( {) {
  $2
}
        const { error } = await supabase_client.from ('talent_profiles').insert ({
      if (hasSupabase) {
        const { error } = await supabaseClient.from('talent_profiles').insert({
          id: item.id,
          slug: item.slug,
          name: item.name,
          title: item.title,
          category: item.category,
          location: item.location,
          timezone: item.timezone,
          region: item.region,
          skills: item.skills,
          summary: item.summary,
          bio: item.bio,
          hourly_rate_usd: item.hourlyRateUsd ?? null,
request_quote: item.request_quote ?? null,
          availability: item.availability,
          profile_image_url: item.profileImageUrl ?? null,
          video_url: item.video_url ?? null,
          portfolio: item.portfolio ?? null,
          verified: item.verified ?? null,
          rating: item.rating ?? null,
          reviews_count: item.reviews_count ?? null,
          created_at: item.created_at,
          original_language: item.original_language,
          translations: item.translations as any,
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method === 'GET') {
    try {  if (req.method === 'POST') {
    try {
      const payload = req.body as Partial<TalentProfile>;
      const slug =
        (payload.name |'talent')
          .toLowerCase()
          .replace(/[^a-z0-9]+/g, '-')
          .replace(/(^-|-$)/g, '') +
        '-' +
        uuid().slice(0, 6);
        ...payload
        id: uuid()
        slug
        verified: false
        rating: 0
        reviewsCount: 0
        createdAt: new Date().toISOString()
        summary: payload.summary |''
        skills: payload.skills |[]
        name: payload.name |'Unnamed'
        title: payload.title |'Professional'
        location: payload.location |'Remote'
        availability: (payload.availability as any) |'Open'
      } as TalentProfile;
      // Auto-translate
      const originalLang =
        payload.originalLanguage |
        detectLanguageSimple(
          [item.title, item.summary, item.bio |''].join('\n')
        );
      const translations: TalentProfile['translations'] = {}
        translations.summary = translations.summary |{}
        translations.bio = translations.bio |{}
        if (item.title)
          translations.title[lang] = await translateText(
            item.title
            lang
            originalLang
          );
        if (item.summary)
          translations.summary[lang] = await translateText(
            item.summary
            lang
            originalLang
          );
        if (item.bio)
          translations.bio[lang] = await translateText(
            item.bio
            lang
            originalLang
          );
        if (item.category) {
          translations.category = translations.category |{}
          translations.category[lang] = await translateText(
            item.category
            lang
            originalLang
          );        }          translations.category[lang] = await translateText(item.category, lang, originalLang)
        }
      }
      item.originalLanguage = originalLang;
      item.translations = translations;
      if (hasSupabase) {
        const { error } = await supabaseClient.from('talent_profiles').insert({
          id: item.id
          slug: item.slug
          name: item.name
          title: item.title
          category: item.category
          location: item.location
          timezone: item.timezone
          region: item.region
          skills: item.skills
          summary: item.summary
          bio: item.bio
          hourly_rate_usd: item.hourlyRateUsd ?? null
          request_quote: item.requestQuote ?? null
          availability: item.availability
          profile_image_url: item.profileImageUrl ?? null
          video_url: item.videoUrl ?? null
          portfolio: item.portfolio ?? null
          verified: item.verified ?? null
          rating: item.rating ?? null
          reviews_count: item.reviewsCount ?? null
          created_at: item.createdAt
          original_language: item.originalLanguage
          translations: item.translations as any
        } as any);
        // Check condition
if (throw error) {
  $2
}
        return res.status (201).json ({ slug: item.slug });
      }
      // Fallback: return the slug as if saved;
      return res.status (201).json ({ slug: item.slug });
    } catch (e: any) {
      return res.status (500).json ({ error: e.message });
    }
  }
    .end('Method Not Allowed');  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
return res
    .setHeader('Allow', 'GET, POST')
    .status(405)
    .end('Method Not Allowed');  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}
}
    .end('Method Not Allowed');  return res.setHeader('AllowGET, POST').status(405).end('Method Not Allowed');
}
}
}