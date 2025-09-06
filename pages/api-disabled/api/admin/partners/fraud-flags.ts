:pages/api/admin/partners/fraud-flags.ts

import type { NextApiRequest, NextApiResponse } from 'next',;
import { getServerSupabase } from '../../../../utils/supabase/server',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase(),
  if (!code) return res.status(400).json({ error: 'Missing code' }),
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/admin/partners/fraud-flags.ts

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';

  try {;
    if (usingPlaceholder) {;
      return res.status(200).json({ flags: [
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }]})
    }
:pages/api/admin/partners/fraud-flags.ts

    const supabase = getServerSupabase(),

;
    const supabase = getServerSupabase();
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/admin/partners/fraud-flags.ts
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code)
:pages/api/admin/partners/fraud-flags.ts

      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
    if (error) return res.status(500).json({ error: error.message }),


    const flags: any[] = [],
    counts.forEach((count, ip) => {
      if (count > 30 && ip !== 'unknown') {
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());
    if (error) return res.status(500).json({ error: error.message });
    const flags: any[] = [];
    counts.forEach((count, ip) => {;
      if (count > 30 && ip !== 'unknown') {;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/admin/partners/fraud-flags.ts
        flags.push({ type: 'suspicious_ip', severity: 'medium', ip, count, note: 'High number of events from a single IP in 7 days' })
      }
    });

    return res.status(200).json({ flags })
:pages/api/admin/partners/fraud-flags.ts
  } catch (e: any) {} catch (e: any) {;
ursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/admin/partners/fraud-flags.ts
    return res.status(500).json({ error: e?.message })
  }

};

