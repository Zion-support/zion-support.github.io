import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {

  res && res.status(200).json({ status, insights });  res && res.status(200).json({ status, insights })
  res && res.status(200).json({ status, insights });  res && res.status(200).json({ status, insights })
}

}


