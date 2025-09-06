<<<<<<< HEAD
<<<<<<< HEAD
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const { code, status, commission_rate } = req.body || {};
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
<<<<<<< HEAD
      return res.status(200).json({ ok: true, mock: true });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { code, status, commission_rate } = req.body || {};
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, mock: true })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return res.status(200).json({ ok: true, mock: true })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }
    const supabase = getServerSupabase();
    const updates: any = {};
    if (status) updates.status = status;
<<<<<<< HEAD
<<<<<<< HEAD
    if (typeof commission_rate === 'number')
      updates.commission_rate = commission_rate;
=======
    if (typeof commission_rate === 'number') updates.commission_rate = commission_rate;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    const { error } = await supabase.from('partners').update(updates).eq('code', String(code).toLowerCase());
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
<<<<<<< HEAD
=======
    if (typeof commission_rate === 'number') updates.commission_rate = commission_rate;

    const { error } = await supabase.from('partners').update(updates).eq('code', String(code).toLowerCase());
    if (error) return res.status(500).json({ error: error.message });

    return res.status(200).json({ ok: true })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
