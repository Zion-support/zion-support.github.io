import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
<<<<<<< HEAD
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { talentId, action } = req.body || {};
  if (!talentId || !['Accept', 'Decline', 'Negotiate'].includes(action)) {
    return res.status(400).json({ error: 'Invalid payload' });
  }

  // Placeholder for persistence; echo the response for now
  const payload = { talentId, action, at: new Date().toISOString() };
  return res.status(200).json({ ok: true, data: payload });
=======
    res.setHeader('AllowPOST');
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  const { talentId, action } = req.body || {};
  if (!talentId || !['AcceptDeclineNegotiate'].includes(action)) {
    return res.status(400).json({ error: 'Invalid payload' })
  }

  // Placeholder for persistence, echo the response for now
  const payload = { talentId, action, at: new Date().toISOString() };
  return res.status(200).json({ ok: true, data: payload })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
