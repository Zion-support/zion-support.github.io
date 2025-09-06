import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {  const store = getFraudStore();

=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const store = getFraudStore();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (req.method === 'GET') {
    const userId = (req.query.userId as string) || '';
    if (!userId) return res.status($1).json({$2});
    const settings = await store.getPrivacySettings(userId);
<<<<<<< HEAD
    return res.status(200).json(settings);  }

  if (req.method === 'POST') {
    const { userId, optOut } = req.body || {};
    if (!userId || typeof optOut !== 'boolean')
      return res.status(400).json({ error: 'Missing userId or optOut' });
    const updated = await store.setPrivacySettings(userId, optOut);
    return res.status(200).json(updated);
  }

  res.status(405).json({ error: 'Method not allowed' });
=======
    return res.status(200).json(settings)
  }

  if (req.method === 'POST') {
    const { userId, optOut } = req.body || {};
    if (!userId || typeof optOut !== 'boolean') return res.status($1).json({$2});
    const updated = await store.setPrivacySettings(userId, optOut);
    return res.status(200).json(updated)
  }

  res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
