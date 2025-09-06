import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const { code, amount } = req.body || {};
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
<<<<<<< HEAD
      return res.status(200).json({ ok: true, status: 'queued', mock: true });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { code, amount } = req.body || {};
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, status: 'queued', mock: true })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return res.status(200).json({ ok: true, status: 'queued', mock: true })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    const supabase = getServerSupabase();
    const { error } = await supabase.from('payout_requests').insert({
<<<<<<< HEAD
      partner_code: String(code).toLowerCase(),
      amount: Number(amount) || null,
      status: 'requested'
    });
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true, status: 'requested' })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
<<<<<<< HEAD
=======
      partner_code: String(code).toLowerCase(), amount: Number(amount) || null,
      status: 'requested'});
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true, status: 'requested' })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
