import type { NextApiRequest, NextApiResponse } from 'next';
import { supabase as supabaseClient } from '@/utils/supabase/client';
import { TALENT_PROFILES as LOCAL } from '@/data/talent';
import type { TalentProfile } from '@/utils/types/talent';
const hasSupabase = $2;
function applyTranslations(item: TalentProfile, lang?: string) {
  if (!lang || !item.translations) return { item, translated: false},
  const t = $2;
  const translated: Partial<TalentProfile> = {},
  if (t.title?.[lang]) translated.title = $2;
  if (t.summary?.[lang]) translated.summary = $2;
  if (t.bio?.[lang]) translated.bio = $2;
  if (t.category?.[lang]) translated.category = $2;
  return { item: { ...item, ...translated }, translated: Object.keys(translated).length > 0 }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.setHeader('AllowGET').status(405).end('Method Not Allowed')
  }
  const { slug, lang } = req.query as { slug: string, lang?: string },

  try {
    if (hasSupabase) {
      const { data, error } = await supabaseClient.from('talent_profiles').select('*').eq('slug', slug).single($2);
      if (error) throw error,
      const { item, translated } = applyTranslations($2);
      return res.status(200).json({ item, translated })
    }

    const base = $2;
    if (!base) return res.status(404).json($2);
    const { item, translated } = applyTranslations($2);
    return res.status(200).json({ item, translated })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
  }
}