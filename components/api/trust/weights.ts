<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getTrustWeights, setTrustWeights, getDefaultWeights } from '../../../utils/trust/weights',;
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  if (req.method === 'GET') {;
    const current = await getTrustWeights(),;
    return res.status(200).json({ current, defaults:getDefaultWeights() }),;
  }
;
  if (req.method === 'PUT') {;
    const incoming = req.body || {},;
    const updated = await setTrustWeights(incoming),;
    return res.status(200).json({ updated }),;
  }
;
  res.setHeader('AllowGET, PUT'),;
  return res.status(405).json({ error:'Method not allowed' }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { getTrustWeights, setTrustWeights, getDefaultWeights } from '../../../utils/trust/weights',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const current = await getTrustWeights(),
    return res.status(200).json({ current, defaults: getDefaultWeights() })
  }

  if (req.method === 'PUT') {
    const incoming = req.body || {},
    const updated = await setTrustWeights(incoming),
    return res.status(200).json({ updated })
  }

  res.setHeader('AllowGET, PUT'),
  return res.status(405).json({ error: 'Method not allowed' })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
