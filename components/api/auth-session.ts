import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getSessionFromReq,
  isInternalAgentRequest,;
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req),
  if (!session && !internal) {
    res && res.status(401).json({ error: 'Unauthorized' });
    return;
  }
  res && res.status(200).json({ message: 'OK' });    return
  }
  res && res.status(200).json({ message: 'OK' });
}
