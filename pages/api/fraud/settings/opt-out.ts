import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  const store = getFraudStore();

  if (req.method === 'GET') {
    const userId = (req.query.userId as string) || '';
    if (!userId) return res.status(400).json({ error: 'Missing userId' });
    const settings = await store.getPrivacySettings(userId);
<<<<<<< HEAD
    return res.status(200).json(settings);
=======
    return res.status(200).json(settings)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (req.method === 'POST') {
    const { userId, optOut } = req.body || {};
<<<<<<< HEAD
    if (!userId || typeof optOut !== 'boolean')
      return res.status(400).json({ error: 'Missing userId or optOut' });
    const updated = await store.setPrivacySettings(userId, optOut);
    return res.status(200).json(updated);
  }

  res.status(405).json({ error: 'Method not allowed' });
=======
    if (!userId || typeof optOut !== 'boolean') return res.status(400).json({ error: 'Missing userId or optOut' });
    const updated = await store.setPrivacySettings(userId, optOut);
    return res.status(200).json(updated)
  }

  res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
