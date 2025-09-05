<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { getServerSupabase } from '../../../utils/supabase/server',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase(),
  if (!code) return res.status(400).json({ error: 'Missing code' }),

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key',

  try {
    if (usingPlaceholder) {
<<<<<<< HEAD
      const csv = 'event,timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00: 00:00Z',
      res.setHeader('Content-Typetext/csv'),
      res.setHeader('Content-Disposition', `attachment, filename="${code}-referrals.csv"`),
      return res.status(200).send(csv)
=======
      const csv = 'event,timestamp\nvisit,2025-01-01T00:00:00Z\nsignup,2025-01-02T00:00:00Z';
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', `attachment; filename=&quot;${code}-referrals.csv&quot;`);
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code'});

  const _usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {_if (usingPlaceholder) {
      const _csv = 'event, _timestamp\nvisit, _2025-01-01T00:00:00Z\nsignup, _2025-01-02T00:00:00Z';
      res.setHeader('Content-Type', _'text/csv');
      res.setHeader('Content-Disposition', _`attachment; filename="${code}-referrals.csv"`);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
      return res.status(200).send(csv);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    }

<<<<<<< HEAD
    const supabase = getServerSupabase(),
    const { data, error } = await supabase
      .from('referral_events')
      .select('event, created_at')
      .eq('partner_code', code)
      .order('created_at', { ascending: false }),

    if (error) return res.status(500).json({ error: error.message }),

    const rows = [['eventtimestamp'], ...(data || []).map((r: any) => [r.event, r.created_at])],
    const csv = rows.map(r => r.join()).join('\n'),
=======
    const _supabase = getServerSupabase();
    const {_data, _error} = await supabase
      .from('referral_events')
      .select('event, created_at')
      .eq('partner_code', code)
      .order('created_at', {_ascending: false});

    if (error) return res.status(500).json({_error: error.message});

    const _rows = [['event', 'timestamp'], ...(data || []).map(_(r: unknown) => [r.event, r.created_at])];
    const _csv = rows.map(r => r.join(',')).join('\n');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

<<<<<<< HEAD
    res.setHeader('Content-Typetext/csv'),
    res.setHeader('Content-Disposition', `attachment, filename="${code}-referrals.csv"`),
    return res.status(200).send(csv)
=======
    res.setHeader('Content-Type', 'text/csv');
<<<<<<< HEAD
    res.setHeader('Content-Disposition', `attachment; filename=&quot;${code}-referrals.csv&quot;`);
    return res.status(200).send(csv);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
=======
    res.setHeader('Content-Disposition', `attachment; filename="${_code}-referrals.csv"`);
    return res.status(200).send(csv);
  } catch (e: unknown) {_return res.status(500).json({ error: e?.message});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}