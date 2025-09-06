import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
<<<<<<< HEAD
<<<<<<< HEAD

export default async function handler(
  _req: NextApiRequest,
  res: NextApiResponse
) {
  const usingPlaceholder =
    (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') ||
    (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') ===
      'placeholder-key';
=======
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  try {
    if (usingPlaceholder) {
      return res.status(200).json({
        leaders: [
          { code: 'aihub', profile_completions: 9 },
          { code: 'modelmasters', profile_completions: 7 },
<<<<<<< HEAD
<<<<<<< HEAD
          { code: 'promptpro', profile_completions: 5 },
        ],
      });
=======
          { code: 'promptpro', profile_completions: 5 }
        ]})
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
          { code: 'promptpro', profile_completions: 5 }
        ]
      })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    const supabase = getServerSupabase();
    const startOfMonth = new Date();
    startOfMonth.setDate(1);
    startOfMonth.setHours(0, 0, 0, 0);

    const { data, error } = await supabase
      .from('referral_events')
      .select('partner_code, event, created_at')
      .gte('created_at', startOfMonth.toISOString());
    if (error) return res.status(500).json({ error: error.message });

    const map = new Map<string, number>();
    for (const row of data || []) {
      if (row.event !== 'profile_completed') continue;
      const key = row.partner_code as string;
<<<<<<< HEAD
<<<<<<< HEAD
      map.set(key, (map.get(key) || 0) + 1);
=======
      map.set(key, (map.get(key) || 0) + 1)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      map.set(key, (map.get(key) || 0) + 1)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    const leaders = Array.from(map.entries())
      .map(([code, profile_completions]) => ({ code, profile_completions }))
      .sort((a, b) => b.profile_completions - a.profile_completions)
      .slice(0, 10);

<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(200).json({ leaders });
=======
    return res.status(200).json({ leaders })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
<<<<<<< HEAD
=======
    return res.status(200).json({ leaders })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
