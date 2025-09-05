<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { getSessionFromReq, isInternalAgentRequest } from '@/utils/adminAuth',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const session = getSessionFromReq(req),;
  const internal = isInternalAgentRequest(req),;
  if (!session && !internal) {;
    res.status(401).json({ error:'Unauthorized' }),;
    return,;
  }
  res.status(200).json({ message:'OK' }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import { getSessionFromReq, isInternalAgentRequest } from '@/utils/adminAuth',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req),
  const internal = isInternalAgentRequest(req),
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' }),
    return
  }
  res.status(200).json({ message: 'OK' })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
