import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
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
      const csv =
        'event,timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00:00:00Z';
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader(
        'Content-Disposition',
        `attachment; filename="${code}-referrals.csv"`
      );
      return res.status(200).send(csv);
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {
    if (usingPlaceholder) {
      const csv = 'event,timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00:00:00Z';
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename="${code}-referrals.csv"`);
      return res.status(200).send(csv)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      const csv = 'event,timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00: 00:00Z';
      res.setHeader('Content-Typetext/csv');
      res.setHeader('Content-Disposition', `attachment, filename="${code}-referrals.csv"`);
      return res.status(200).send(csv)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from('referral_events')
      .select('event, created_at')
      .eq('partner_code', code)
      .order('created_at', { ascending: false });

    if (error) return res.status(500).json({ error: error.message });

<<<<<<< HEAD
<<<<<<< HEAD
    const rows = [
      ['event', 'timestamp'],
      ...(data || []).map((r: any) => [r.event, r.created_at]),
    ];
    const csv = rows.map(r => r.join(',')).join('\n');
=======
    const rows = [['eventtimestamp'], ...(data || []).map((r: any) => [r.event, r.created_at])];
    const csv = rows.map(r => r.join()).join('\n');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    res.setHeader('Content-Typetext/csv');
    res.setHeader('Content-Disposition', `attachment, filename="${code}-referrals.csv"`);
    return res.status(200).send(csv)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
<<<<<<< HEAD
=======
    const rows = [['eventtimestamp'], ...(data || []).map((r: any) => [r.event, r.created_at])];
    const csv = rows.map(r => r.join()).join('\n');

    res.setHeader('Content-Typetext/csv');
    res.setHeader('Content-Disposition', `attachment, filename="${code}-referrals.csv"`);
    return res.status(200).send(csv)
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
