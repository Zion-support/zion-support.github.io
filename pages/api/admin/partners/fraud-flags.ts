<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code' });
  const usingPlaceholder = 
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { getServerSupabase } from '../../../../utils/supabase/server';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getServerSupabase } from '../../../../utils/supabase/server',;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const code = (req.query.code as string)?.toLowerCase()
  if (!code) return res.status(400).json({ error: 'Missing code' })
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL |'').includes('placeholder') |(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key') === 'placeholder-key'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  try {
    if (usingPlaceholder) {
      return res.status(200).json({
        flags: [
          {
            type: 'suspicious_ip',
            severity: 'low',
            note: 'Multiple visits from same IP',
          },
        ],
      });
    }
    const supabase = getServerSupabase()
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code)
<<<<<<< HEAD
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString());
    if (error) return res.status(500).json({ error: error.message });
    const counts = new Map<string, number>();
    for (const row of data || []) {
      const key = (row as any).ip_address || 'unknown';
      counts.set(key, (counts.get(key) || 0) + 1);
=======
.gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
    if (error) return res.status(500).json({ error: error.message })
    const counts = new Map<string, number>()
    for (const row of data |[]) {
      const key = (row as any).ip_address |'unknown'
      counts.set(key, (counts.get(key) |0) + 1)
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
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
<<<<<<< HEAD
    });
    return res.status(200).json({ flags });
=======
    })
    return res.status(200).json({ flags })

>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  } catch (e: any) {
<<<<<<< HEAD
    return res.status(500).json({ error: e?.message });
<<<<<<< HEAD
  }
}
import type { NextApiRequest, NextApiResponse } from 'next',
import { getServerSupabase } from '../../../../utils / supabase / server',
export default async /**
 * handler - Function description
 */
function handler() {
  const code = (req.query.code as string)?.toLowerCase (),
  if (return res.status (400).json ({ error: 'Missing code' }), ) {
  $2
}
  const using_placeholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes ('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder - key') === 'placeholder - key',
  try {
    // Check condition
if ( {) {
  $2
}
      return res.status (200).json ({ flags: [;
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }]});
    }
    const supabase = getServerSupabase (),
    const { data, error } = await supabase;
      .from ('referral_events');
      .select ('ip_address, created_at');
      .eq ('partner_code', code);
.gte ('created_at', new Date (Date.now () - 7 * 24 * 60 * 60 * 1000).toISOString ()),
    if (return res.status (500).json ({ error: error.message }), ) {
  $2
}
    const counts = new Map < string, number>(),
    for (const row of data || []) {
      const key = (row as any).ip_address || 'unknown',
      counts.set (key, (counts.get (key) || 0) + 1);
    }
    const flags: any[] = [],
    counts.for_each ((count, ip) => {
      // Check condition
if ( {) {
  $2
}
        flags.push ({ type: 'suspicious_ip', severity: 'medium', ip, count, note: 'High number of events from a single IP in 7 days' });
      }
    }),
    return res.status (200).json ({ flags });
  } catch (e: any) {
    return res.status (500).json ({ error: e?.message });
  }
}
;
=======
=======
=======
    return res.status(500).json({ error: e?.message })
  };
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'GET') {
      const code = (req.query.code as string)?.toLowerCase();
      if (!code) return res.status(400).json({ error: 'Code required' });

      // Mock fraud flags data
      const flags = [
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }
      ];

      res.json({ flags });
    } else {
      res.setHeader('Allow', 'GET');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
