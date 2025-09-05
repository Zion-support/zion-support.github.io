<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method !== 'POST') {;
    res.setHeader('AllowPOST'),;
    return res.status(405).json({ error:'Method Not Allowed' }),;
  }
;
  const { talentId, action } = req.body || {},;
  if (!talentId || !['AcceptDecline', 'Negotiate'].includes(action)) {;
    return res.status(400).json({ error:'Invalid payload' }),;
  }
;
  // Placeholder for persistence, echo the response for now;
  const payload = { talentId, action, at:new Date().toISOString() },;
  return res.status(200).json({ ok:true, data:payload }),;
}
=======
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
  return res.status(200).json({ ok: true, data: payload })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
