<<<<<<< HEAD
=======

import type { NextApiRequest, NextApiResponse } from 'next',;
import { getSessionFromReq, isInternalAgentRequest } from '@/utils/adminAuth',

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req)
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {
    res.status(401).json({ error: 'Unauthorized' })
    return
  }

