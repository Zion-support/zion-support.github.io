<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase($2);
  if (!code) return res.status(400).json($2);
  const usingPlaceholder = $2;
  try {
    if (usingPlaceholder) {
      const csv = 'event,timestamp\nvisit,2025-01-01T00: 00: 00Z\nsignup,2025-01-02T00: 00: 00Z',
      res.setHeader($2);
      res.setHeader($2);
      return res.status(200).send(csv)
    }

    const supabase = getServerSupabase($2);
    const { data, error } = await supabase
      .from('referral_events')
      .select('event, created_at')
      .eq('partner_code', code)
      .order($2);
    if (error) return res.status(500).json($2);
    const rows = [['eventtimestamp'], ...(data || []).map((r: any) => [r.event, r.created_at])],
    const csv = rows.map(r => r.join()).join($2);
    res.setHeader($2);
    res.setHeader($2);
    return res.status(200).send(csv)
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message })
  }
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}