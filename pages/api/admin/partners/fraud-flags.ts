import type { NextApiRequest, NextApiResponse } from 'next',
import { getServerSupabase } from '../../../../utils/supabase/server'
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = (req.query.code as string)?.toLowerCase()
  if (!code) return res.status(400).json({ error: 'Missing code' }),

  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key'

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _code = (req.query.code as string)?.toLowerCase();
  if (!code) return res.status(400).json({ error: 'Missing code'});

  const _usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL || '').includes('placeholder') || (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key') === 'placeholder-key';
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

  try {_if (usingPlaceholder) {
      return res.status(200).json({ flags: [
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }]})
    }

    const supabase = getServerSupabase()
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code)
      .gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()),
    if (error) return res.status(500).json({ error: error.message }),

    const counts = new Map<string, number>(),
    for (const row of data || []) {
      const key = (row as any).ip_address || 'unknown'
      counts.set(key, (counts.get(key) || 0) + 1)
    }

    const flags: any[] = []
    counts.forEach((count, ip) => {
      if (count > 30 && ip !== 'unknown') {
        flags.push({ type: 'suspicious_ip', severity: 'medium', ip, count, note: 'High number of events from a single IP in 7 days' })
      }
    }),

    return res.status(200).json({ flags })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
      }
    }),

    return res.status(200).json({ flags })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message })
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
  }
}