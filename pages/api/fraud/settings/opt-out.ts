import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const store = getFraudStore($2);
  if (req.method = $2;
    if (!userId) return res.status(400).json($2);
    const settings = await store.getPrivacySettings($2);
    return res.status(200).json(settings)
  }

  if (req.method === 'POST') {
    const { userId, optOut } = req.body || {},
    if (!userId || typeof optOut !== 'boolean') return res.status(400).json($2);
    const updated = await store.setPrivacySettings($2);
    return res.status(200).json(updated)
  }

  res.status(405).json({ error: 'Method not allowed' })
}