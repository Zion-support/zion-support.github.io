<<<<<<< HEAD:pages/api/admin/partners/fraud-flags.ts
<<<<<<< HEAD

=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> main
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
import type { NextApiRequest, NextApiResponse } from 'next';
main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/partners/fraud-flags.ts
import { getServerSupabase } from '../../../../utils/supabase/server',;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase()
  if (!code) return res.status(400).json({ error: 'Missing code' })

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key'

  try {
    if (usingPlaceholder) {
      return res.status(200).json({ flags: [
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }]})
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
  try {
    const code = req.query.code as string;
    const supabase = getServerSupabase();
    const { data: flags } = await supabase.from('fraud_flags').select().eq('partner_code', code);
    return res.status(200).json({ flags });
origin/cursor/automate-test-improve-and-merge-code-2533
    }

    const supabase = getServerSupabase()
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code)
<<<<<<< HEAD:pages/api/admin/partners/fraud-flags.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/partners/fraud-flags.ts
.gte(
        'created_at',
        new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()
      );
    if (error) return res.status(500).json({ error: error.message });

    const counts = new Map<string, number>();
    for (const row of data || []) {
      const key = (row as any).ip_address || 'unknown';
counts.set(key, (counts.get(key) || 0) + 1);
origin/cursor/automate-test-improve-and-merge-code-2533
    }
<<<<<<< HEAD:pages/api/admin/partners/fraud-flags.ts
=======
<<<<<<< HEAD
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
    if (error) return res.status(500).json({ error: error.message }),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

    const flags: any[] = []

=======
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
    if (error) return res.status(500).json({ error: error.message })



    const flags: any[] = []
main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/partners/fraud-flags.ts
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
<<<<<<< HEAD:pages/api/admin/partners/fraud-flags.ts
<<<<<<< HEAD
    })

<<<<<<< HEAD
=======
<<<<<<< HEAD
    return res.status(500).json({ error: e?.message })
  };
};
import type { NextApiRequest, NextApiResponse } from 'next';



  }
}
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/partners/fraud-flags.ts
    return res.status(200).json({ flags })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
};

    });
  } catch (error) {
    return res.status(500).json({ error: 'Internal server error' });
  }
}
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}
<<<<<<< HEAD:pages/api/admin/partners/fraud-flags.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/admin/partners/fraud-flags.ts
