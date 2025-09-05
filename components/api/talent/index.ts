import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_TalentProfile} from '@/utils/types/talent';

const _hasSupabase = !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const _SUPPORTED_LANGS = (process.env.SUPPORTED_LANGS || 'en,es,de,fr,pt,ja,zh').split(',').map(_(x) => x.trim());

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === 'GET') {
    try {
      if (hasSupabase) {
        const { data, _error} = await supabaseClient.from('talent_profiles').select('*').order('created_at', {_ascending: false});
        if (error) throw error;
        return res.status(200).json({_items: data as TalentProfile[]});
      }
      return res.status(200).json({_items: LOCAL});
    } catch (e: unknown) {_return res.status(500).json({ error: e.message});
    }
  }

  if (req.method === 'POST') {_try {
      const _payload = req.body as Partial<TalentProfile>;
      const _slug = (payload.name || 'talent').toLowerCase().replace(/[^a-z0-9]+/g, _'-').replace(/(^-|-$)/g, _'') + '-' + uuid().slice(0, _6);
      const item: TalentProfile = {
        ...payload, _id: uuid(), _slug, _verified: false, _rating: 0, _reviewsCount: 0, _createdAt: new Date().toISOString(), _summary: payload.summary || '', _skills: payload.skills || [], _name: payload.name || 'Unnamed', _title: payload.title || 'Professional', _location: payload.location || 'Remote', _availability: (payload.availability as any) || 'Open'} as TalentProfile;

      // Auto-translate
      const _originalLang = payload.originalLanguage || detectLanguageSimple([item.title, item.summary, item.bio || ''].join('\n'));
      const translations: TalentProfile['translations'] = {};
      for (const lang of SUPPORTED_LANGS) {_if (!lang || lang === originalLang) continue;
        translations.title = translations.title || {};
        translations.summary = translations.summary || {};
        translations.bio = translations.bio || {};
        if (item.title) translations.title[lang] = await translateText(item.title, lang, originalLang);
        if (item.summary) translations.summary[lang] = await translateText(item.summary, lang, originalLang);
        if (item.bio) translations.bio[lang] = await translateText(item.bio, lang, originalLang);
        if (item.category) {_translations.category = translations.category || {};
          translations.category[lang] = await translateText(item.category, lang, originalLang);
        }
      }
      item.originalLanguage = originalLang;
      item.translations = translations;

      if (hasSupabase) {_const { error} = await supabaseClient.from('talent_profiles').insert({_id: item.id, _slug: item.slug, _name: item.name, _title: item.title, _category: item.category, _location: item.location, _timezone: item.timezone, _region: item.region, _skills: item.skills, _summary: item.summary, _bio: item.bio, _hourly_rate_usd: item.hourlyRateUsd ?? null, _request_quote: item.requestQuote ?? null, _availability: item.availability, _profile_image_url: item.profileImageUrl ?? null, _video_url: item.videoUrl ?? null, _portfolio: item.portfolio ?? null, _verified: item.verified ?? null, _rating: item.rating ?? null, _reviews_count: item.reviewsCount ?? null, _created_at: item.createdAt, _// i18n
          original_language: item.originalLanguage, _translations: item.translations as any} as any);
        if (error) throw error;
        return res.status(201).json({_slug: item.slug});
      }

      // Fallback: return the slug as if saved
      return res.status(201).json({_slug: item.slug});
    } catch (e: unknown) {_return res.status(500).json({ error: e.message});
    }
  }

  return res.setHeader('Allow', 'GET, POST').status(405).end('Method Not Allowed');
}