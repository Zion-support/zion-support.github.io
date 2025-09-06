import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
function sanitizeCode(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { name, niche, socials, payout_method, desired_code } = req.body || {},
  if (!name || !desired_code) return res.status(400).json($2);
  const code = sanitizeCode($2);
  if (!code) return res.status(400).json($2);
  const usingPlaceholder = $2;
  try {
    if (usingPlaceholder) {
      return res.status(200).json({ ok: true, code, status: 'pending', mock: true})
    }

    const supabase = getServerSupabase($2);
    const { data: existing, error: existingErr} = await supabase
      .from('partners')
      .select('code')
      .eq('code', code)
      .maybeSingle($2);
    if (existingErr) return res.status(500).json($2);
    if (existing) return res.status(409).json($2);
    const { error } = await supabase.from('partners').insert($2);
    if (error) return res.status(500).json($2);
    return res.status(200).json({ ok: true, code, status: 'pending' })
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message })
  }
}