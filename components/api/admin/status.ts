import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { getSessionFromReq, isInternalAgentRequest } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const session = getSessionFromReq(req);
  const isInternal = isInternalAgentRequest(req);
  
  const status = {
    authenticated: !!session,
    isInternal,
    timestamp: new Date().toISOString()
  };

  const insights = {
    uptime: process.uptime(),
    memory: process.memoryUsage(),
    version: process.version
  };

  res.status(200).json({ status, insights });
}