
import type { NextApiRequest, NextApiResponse } from 'next';

import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Application } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const app: Application = {
      id: uuidv4(),
      name: 'New Application',
      status: 'pending',
      createdAt: new Date().toISOString()
    };
    return res.status(200).json(app);
  }
  
  return res.status(405).json({ error: 'Method not allowed' });
}

