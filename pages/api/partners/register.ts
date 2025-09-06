import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
<<<<<<< HEAD

=======
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
function sanitizeCode(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');

<<<<<<< HEAD
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  const { name, niche, socials, payout_method, desired_code } = req.body || {};
  if (!name || !desired_code)
    return res.status(400).json({ error: 'Missing required fields' });
  const code = sanitizeCode(desired_code);
  if (!code) return res.status(400).json({ error: 'Invalid code' });

  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') ===
      'placeholder-key';

  try {
    if (usingPlaceholder) {
      return res
        .status(200)
        .json({ ok: true, code, status: 'pending', mock: true });    }
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  const { name, niche, socials, payout_method, desired_code } = req.body || {};
  if (!name || !desired_code) return res.status($1).json({$2});
  const code = sanitizeCode(desired_code);
  if (!code) return res.status($1).json({$2});
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, code, status: 'pending', mock: true })
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    const supabase = getServerSupabase();
    const { data: existing, error: existingErr } = await supabase
      .from('partners')
      .select('code')
      .eq('code', code)
      .maybeSingle();
<<<<<<< HEAD

    if (existingErr)
      return res.status(500).json({ error: existingErr.message });    if (existing) return res.status(409).json({ error: 'Code already taken' });

    const { error } = await supabase.from('partners').insert({
      code,
      name,
=======
    if (existingErr) return res.status($1).json({$2});
    if (existing) return res.status($1).json({$2});
    const { error } = await supabase.from('partners').insert({
      code,
    name,
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      niche: niche || null,
      socials: socials || null,
      payout_method: payout_method || null,
      status: 'pending',
<<<<<<< HEAD
      commission_rate: 0.15,
    });

    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true, code, status: 'pending' });
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
=======
      commission_rate: 0.15}),
    if (error) return res.status($1).json({$2});
    return res.status(200).json({ ok: true, code, status: 'pending' })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
