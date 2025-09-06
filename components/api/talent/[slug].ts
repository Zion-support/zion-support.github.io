import type { NextApiRequest, NextApiResponse } from 'next';
    const { item, translated } = applyTranslations(base, lang);
    return res && res.status(200).json({ item, translated });
  } catch (e: any) {
    return res && res.status(500).json({ error: e && e.message });
  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (hasSupabase) {
      const { data, error } = await supabaseClient && supabaseClient.from('talent_profiles').select('*').eq('slug', slug).single();
      if (error) throw error;
      const { item, translated } = applyTranslations(data as unknown as TalentProfile, lang);
      return res && res.status(200).json({ item, translated })
    }
    const { item, translated } = applyTranslations(base, lang);

    return res.status(200).json({ item, translated })
  } catch (e: any) {
    return res.status(500).json({ error: e.message })
}
}
