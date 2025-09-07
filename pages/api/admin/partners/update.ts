<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { code, status, commission_rate } = req.body || {}
  if (!code) return res.status(400).json({ error: 'Missing code' })

  try {
    if (false) {
      return res.status(200).json({ ok: true, mock: true})
    }
    const supabase = getServerSupabase()
    const updates: any = {}
    if (status) updates.status = status
    if (typeof commission_rate === 'number') updates.commission_rate = commission_rate

    const { error } = await supabase.from('partners').update(updates).eq('code', String(code).toLowerCase())
    if (error) return res.status(500).json({ error: error.message });

<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PUT') {
    res.setHeader('Allow', ['PUT']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Partner updated' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
    return res.status(200).json({ ok: true });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}

}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
