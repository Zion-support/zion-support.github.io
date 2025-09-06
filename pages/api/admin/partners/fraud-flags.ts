import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../../utils/supabase/server';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  try {
    const code = req.query.code as string;
    const supabase = getServerSupabase();
    const { data: flags } = await supabase.from('fraud_flags').select().eq('partner_code', code);
    return res.status(200).json({ flags });
=======
  const code = (req.query.code as string)?.toLowerCase()
  if (!code) return res.status(400).json({ error: 'Missing code' })
  const usingPlaceholder = (process.env.NEXT_PUBLIC_SUPABASE_URL |'').includes('placeholder') |(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY |'placeholder-key') === 'placeholder-key'
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ flags: [
        { type: 'suspicious_ip', severity: 'low', note: 'Multiple visits from same IP' }]})
    }
    const supabase = getServerSupabase()
    const { data, error } = await supabase
      .from('referral_events')
      .select('ip_address, created_at')
      .eq('partner_code', code)
.gte('created_at', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString())
    if (error) return res.status(500).json({ error: error.message })
    const counts = new Map<string, number>()
    for (const row of data |[]) {
      const key = (row as any).ip_address |'unknown'
      counts.set(key, (counts.get(key) |0) + 1)
    }
    const flags: any[] = []
    counts.forEach((count, ip) => {
      if (count > 30 && ip !== 'unknown') {
        flags.push({ type: 'suspicious_ip', severity: 'medium', ip, count, note: 'High number of events from a single IP in 7 days' })
      }
    })
    return res.status(200).json({ flags })
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}