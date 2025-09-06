import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { code, amount } = req.body || {},
  if (!code) return res.status(400).json({ error: 'Missing code' });
  const usingPlaceholder = null;
    return res.status(200).json({ ok: true, status: 'requested' })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}
