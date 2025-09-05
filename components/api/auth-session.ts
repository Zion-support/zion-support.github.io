<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req),
  const internal = isInternalAgentRequest(req),
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' }),
    return
  }
  res.status(200).json({ message: 'OK' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _session = getSessionFromReq(req);
  const _internal = isInternalAgentRequest(req);
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized'});
    return;
  }
  res.status(200).json({_message: 'OK'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}