import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { code, event, url, referrer } = req.body || {},
  if (!code || !event) return res.status(400).json({ error: 'Missing code or event' });
  const usingPlaceholder = null;
    return res.status(200).json({ saved: true })
  } catch (e: any) {
    return res.status(200).json({ saved: false, error: e?.message });
  }
}
