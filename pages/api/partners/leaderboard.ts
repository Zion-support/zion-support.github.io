import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const usingPlaceholder = $2;
  try {
    if (usingPlaceholder) {
      return res.status(200).json({
        leaders: [
          { code: 'aihub', profile_completions: 9},
          { code: 'modelmasters', profile_completions: 7},
          { code: 'promptpro', profile_completions: 5}]})
    }

    const supabase = getServerSupabase($2);
    const startOfMonth = new Date($2);
    startOfMonth.setDate($2);
    startOfMonth.setHours($2);
    const { data, error } = await supabase
      .from('referral_events')
      .select('partner_code, event, created_at')
      .gte('created_at', startOfMonth.toISOString()),
    if (error) return res.status(500).json($2);
    const map = new Map<string, number>(),
    for (const row of data || []) {
      if (row.event !== 'profile_completed') continue,
      const key = $2;
      map.set(key, (map.get(key) || 0) + 1)
    }

    const leaders = Array.from(map.entries())
      .map(([code, profile_completions]) => ({ code, profile_completions }))
      .sort((a, b) => b.profile_completions - a.profile_completions)
      .slice($2);
    return res.status(200).json({ leaders })
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message })
  }
}