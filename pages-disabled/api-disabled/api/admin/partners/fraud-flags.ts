import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:pages/api/admin/partners/fraud-flags.ts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement fraudflags logic
    res.status(200).json({ message: 'fraudflags endpoint' });
  } catch (error) {
    console.error('Error in fraudflags:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
=======
import { getServerSupabase } from '../../../../utils/supabase/server';
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getServerSupabase } from '../../../../utils/supabase/server',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  try {;
    if (usingPlaceholder) {;
      return res.status(200).json({ flags: [
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }]})
    }
;
    const supabase = getServerSupabase();
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code)

    }
    const flags: any[] = []
    counts.forEach((count, ip) => {
      if (count > 30 && ip !== 'unknown') {
        flags.push({
          type: 'suspicious_ip',
          severity: 'medium',
          ip,
          count,
          note: 'High number of events from a single IP in 7 days',
        });
      }

      }
    });

    return res.status(200).json({ flags })
  } catch (e: any) {;
    return res.status(500).json({ error: e?.message })
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api-disabled/api/admin/partners/fraud-flags.ts
