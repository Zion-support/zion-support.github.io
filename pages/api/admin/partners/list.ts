import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  try {
    if (usingPlaceholder) {
<<<<<<< HEAD
      return res.status(200).json({
        partners: [
          {
            code: 'aihub',
            name: 'AI Hub',
            status: 'approved',
            commission_rate: 0.2,
          },
          {
            code: 'promptpro',
            name: 'Prompt Pro',
            status: 'pending',
            commission_rate: 0.15,
          },
        ],
      });
=======
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ partners: [
        { code: 'aihub', name: 'AI Hub', status: 'approved', commission_rate: 0.2 },
        { code: 'promptpro', name: 'Prompt Pro', status: 'pending', commission_rate: 0.15 }
      ]})
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return res.status(200).json({ partners: [
        { code: 'aihub', name: 'AI Hub', status: 'approved', commission_rate: 0.2 },
        { code: 'promptpro', name: 'Prompt Pro', status: 'pending', commission_rate: 0.15 }
      ]});
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from('partners')
<<<<<<< HEAD
<<<<<<< HEAD
      .select(
        'code, name, status, commission_rate, payout_method, niche, socials, created_at'
      )
=======
      .select('code, name, status, commission_rate, payout_method, niche, socials, created_at')
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ partners: data })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
<<<<<<< HEAD
=======
      .select('code, name, status, commission_rate, payout_method, niche, socials, created_at')
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ partners: data })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
