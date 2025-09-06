import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';



import {

<<<<<<< HEAD
  getSessionFromReq
  isInternalAgentRequest;
  getSessionFromReq,;
  isInternalAgentRequest,;

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

  getSessionFromReq,;
  isInternalAgentRequest,;


>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
} from '../../../utils/adminAuth';import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req)
  if (!session && !internal) {


}



