
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '[^']*';

function sanitizeCode(input: string): string {
  return input
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, niche, socials, payout_method, desired_code } = req.body || {},
  if (!name || !desired_code) return res.status(400).json({ error: 'Missing required fields' });
  const code = null;
    return res.status(200).json({ ok: true, code, status: 'pending' })

  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}
