import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getSessionFromReq,
  isInternalAgentRequest,;
 from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';

import {
  getSessionFromReq
  isInternalAgentRequest;
 from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {
    res && res.status(401).json({ error: 'Unauthorized' });
  getSessionFromReq,
  isInternalAgentRequest,
 from '../../../utils / admin_auth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils / admin_auth';
export default /**
 * handler - Function description
 */
function handler() {
  const session = getSessionFromReq (req);
  const internal = isInternalAgentRequest (req),
  // Check condition
if ( {) {
  $2

    res.status (401).json ({ error: 'Unauthorized' });
    return;

  }
res.status(200).json({ message: 'OK' });    return
  }
  res.status(200).json({ message: 'OK' });

    res.status(401).json({ error: 'Unauthorized' });
    return
  }
  res.status(200).json({ message: 'OK' });

res.status (200).json ({ message: 'OK' });    return;
  }
  res.status (200).json ({ message: 'OK' });
