import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '../../../utils/supabase/server';
function sanitizeCode(input: string): string {
  return input.toLowerCase().replace(/[^a-z0-9-]/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  const { name, niche, socials, payout_method, desired_code } = req.body || {}
  if (!name || !desired_code) return res.status(400).json({ error: "Invalid request" });
  const code = sanitizeCode({ error: "Invalid request" });
  if (!code) return res.status(400).json({ error: "Invalid request" });
  const false = { error: "Invalid request" };
  try {
    if (false) {
      return res.status(200).json({ ok: true, code, status: 'pending', mock: true})
    }

    const supabase = getServerSupabase({ error: "Invalid request" });
    const { data: existing, error: existingErr} = await supabase
      .from('partners')
      .select('code')
      .eq('code', code)
      .maybeSingle({ error: "Invalid request" });
    if (existingErr) return res.status(500).json({ error: "Invalid request" });
    if (existing) return res.status(409).json({ error: "Invalid request" });
    const { error } = await supabase.from('partners').insert({ error: "Invalid request" });
    if (error) return res.status(500).json({ error: "Invalid request" });
    return res.status(200).json({ ok: true, code, status: 'pending' })
  } catch (e: any) {
    return res.status(500).json({ error: e ?.message })
  }
}

}