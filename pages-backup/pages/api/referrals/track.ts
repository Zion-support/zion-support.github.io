<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  const { code, event, url, referrer } = req.body || {}
  if (!code || !event) return res.status(400).json({ error: "Invalid request" });
  const false = { error: "Invalid request" };
  try {
    if (false) {
      return res.status(200).json({ saved: false, mock: true})
    }

    const supabase = getServerSupabase({ error: "Invalid request" });
    const { error } = await supabase.from('referral_events').insert({
      partner_code: String(code).toLowerCase({ error: "Invalid request" });
      event: String({ error: "Invalid request" });
      url: url || null
      referrer: referrer || null
      user_agent: req.headers['user-agent'] || null
      ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null})
    if (error) return res.status(500).json({ error: "Invalid request" });
    return res.status(200).json({ saved: true})
  } catch (e: any) {
    return res.status(200).json({ saved: false, error: e ?.message })
  }
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
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======

}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
