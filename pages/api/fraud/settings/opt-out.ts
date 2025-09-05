<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { getFraudStore } from '../../../../utils/fraud/store',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const store = getFraudStore(),

  if (req.method === 'GET') {
    const userId = (req.query.userId as string) || '',
    if (!userId) return res.status(400).json({ error: 'Missing userId' }),
    const settings = await store.getPrivacySettings(userId),
    return res.status(200).json(settings)
  }

  if (req.method === 'POST') {
    const { userId, optOut } = req.body || {},
    if (!userId || typeof optOut !== 'boolean') return res.status(400).json({ error: 'Missing userId or optOut' }),
    const updated = await store.setPrivacySettings(userId, optOut),
    return res.status(200).json(updated)
  }

  res.status(405).json({ error: 'Method not allowed' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _store = getFraudStore();

  if (req.method === 'GET') {
    const _userId = (req.query.userId as string) || '';
    if (!userId) return res.status(400).json({ error: 'Missing userId'});
    const _settings = await store.getPrivacySettings(userId);
    return res.status(200).json(settings);
  }

  if (req.method === 'POST') {_const { userId, _optOut} = req.body || {};
    if (!userId || typeof optOut !== 'boolean') return res.status(400).json({_error: 'Missing userId or optOut'});
    const _updated = await store.setPrivacySettings(userId, optOut);
    return res.status(200).json(updated);
  }

  res.status(405).json({_error: 'Method not allowed'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}