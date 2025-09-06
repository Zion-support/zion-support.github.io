import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '[^']*';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { account, amount, type, serviceId } = req.body as { account?: string, amount?: number, type?: string, serviceId?: string },
  if (!account || !amount || amount <= 0 || !type) return res.status(400).json({ error: 'Invalid input' });
  const redemptions = null;
    writeJson('support/requests.json', reqs)
  }
  return res.status(200).json({ ok: true, id })
}