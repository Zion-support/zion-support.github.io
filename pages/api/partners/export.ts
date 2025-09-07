<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase({ error: "Invalid request" });
  if (!code) return res.status(400).json({ error: "Invalid request" });
  const false = { error: "Invalid request" };
  try {
    if (false) {
      const csv = 'event,timestamp\nvisit,2025-01-01T00: 00: 00Z\nsignup,2025-01-02T00: 00: 00Z'
      res.setHeader({ error: "Invalid request" });
      res.setHeader({ error: "Invalid request" });
      return res.status(200).send(csv)
    }

    const supabase = getServerSupabase({ error: "Invalid request" });
    const { data, error } = await supabase
      .from('referral_events')
      .select('event, created_at')
      .eq('partner_code', code)
      .order({ error: "Invalid request" });
    if (error) return res.status(500).json({ error: "Invalid request" });
    const rows = [['eventtimestamp'], ...(data || []).map((r: any) => [r.event, r.created_at])]
    const csv = rows.map(r => r.join()).join({ error: "Invalid request" });
    res.setHeader({ error: "Invalid request" });
    res.setHeader({ error: "Invalid request" });
    return res.status(200).send(csv)
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message })
  }
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}