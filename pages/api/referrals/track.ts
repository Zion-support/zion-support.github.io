import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });

  const { code, event, url, referrer } = req.body || {};
  if (!code || !event)
    return res.status(400).json({ error: 'Missing code or event' });

  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') ===
      'placeholder-key';

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ saved: false, mock: true });    }
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  const { code, event, url, referrer } = req.body || {};
  if (!code || !event) return res.status($1).json({$2});
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ saved: false, mock: true })
    }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

    const supabase = getServerSupabase();
    const { error } = await supabase.from('referral_events').insert({
      partner_code: String(code).toLowerCase(),
      event: String(event),
      url: url || null,
      referrer: referrer || null,
      user_agent: req.headers['user-agent'] || null,
<<<<<<< HEAD
      ip_address:
        (req.headers['x-forwarded-for'] as string) ||
        req.socket.remoteAddress ||
        null,
    });

    if (error) return res.status(500).json({ error: error.message });
    return res.status(200).json({ saved: true });
  } catch (e: any) {
    return res.status(200).json({ saved: false, error: e?.message });
  }
=======
      ip_address: (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || null}),
    if (error) return res.status($1).json({$2});
    return res.status(200).json({ saved: true })
  } catch (e: any) {
    return res.status(200).json({ saved: false, error: e?.message })
  }
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
