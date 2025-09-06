import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
<<<<<<< HEAD
      return res.status(200).json({
        flags: [
          {
            type: 'suspicious_ip',
            severity: 'low',
            note: 'Multiple visits from same IP',
          },
        ],
      });
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ flags: [
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }]})
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return res.status(200).json({ flags: [
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }]})
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code)
<<<<<<< HEAD
<<<<<<< HEAD
      .gte(
        'created_at',
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
      );
=======
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    if (error) return res.status(500).json({ error: error.message });

    const counts = new Map<string, number>();
    for (const row of data || []) {
      const key = (row as any).ip_address || 'unknown';
<<<<<<< HEAD
<<<<<<< HEAD
      counts.set(key, (counts.get(key) || 0) + 1);
=======
      counts.set(key, (counts.get(key) || 0) + 1)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      counts.set(key, (counts.get(key) || 0) + 1)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    const flags: any[] = [];
    counts.forEach((count, ip) => {
      if (count > 30 && ip !== 'unknown') {
<<<<<<< HEAD
<<<<<<< HEAD
        flags.push({
          type: 'suspicious_ip',
          severity: 'medium',
          ip,
          count,
          note: 'High number of events from a single IP in 7 days',
        });
=======
        flags.push({ type: 'suspicious_ip', severity: 'medium', ip, count, note: 'High number of events from a single IP in 7 days' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
    });

    return res.status(200).json({ flags })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
<<<<<<< HEAD
=======
        flags.push({ type: 'suspicious_ip', severity: 'medium', ip, count, note: 'High number of events from a single IP in 7 days' })
      }
    });

    return res.status(200).json({ flags })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
