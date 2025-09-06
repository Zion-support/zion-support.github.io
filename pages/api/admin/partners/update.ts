import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { code } = req.query;
  if (!code || Array.isArray(code)) {
    return res.status(400).json({ error: 'Missing code' });
  }

  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') ===
      'placeholder-key';

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true });
    }

    const supabase = getServerSupabase();
    const { error } = await supabase
      .from('partners')
      .update(req.body)
      .eq('code', code);

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ ok: true });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}