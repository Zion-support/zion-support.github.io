import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/fileUtils';
import type { Application } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';

const FILE = 'data/applications.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const application: Application = {
      id: uuidv4(),
      ...req.body,
      createdAt: new Date().toISOString()
    };

    const applications = readJsonFile(FILE) || [];
    applications.push(application);
    writeJsonFile(FILE, applications);

    res.status(200).json({ success: true, application });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create application' });
  }
}
