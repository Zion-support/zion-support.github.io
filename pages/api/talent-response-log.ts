<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { talentId, action } = req.body || {},
  if (!talentId || !['AcceptDeclineNegotiate'].includes(action)) {
    return res.status(400).json({ error: 'Invalid payload' })
  }

  // Placeholder for persistence, echo the response for now
  const payload = { talentId, action, at: new Date().toISOString() },
  return res.status(200).json({ ok: true, data: payload })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method Not Allowed'});
  }

  const {_talentId, _action} = req.body || {};
  if (!talentId || !['Accept', 'Decline', 'Negotiate'].includes(action)) {_return res.status(400).json({ error: 'Invalid payload'});
  }

  // Placeholder for persistence; echo the response for now
  const _payload = {_talentId, _action, _at: new Date().toISOString()};
  return res.status(200).json({_ok: true, _data: payload});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}