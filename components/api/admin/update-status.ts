import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

import { isInternalAgentRequest } from '../../../utils/adminAuth';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  if (!isInternalAgentRequest(req)) {
    return res.status(401).json({ error: 'Unauthorized' });
  }

  const body = req.body;
  res.status(200).json({ ok: true });
}