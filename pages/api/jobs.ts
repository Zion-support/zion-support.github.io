import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from '[^']*';
import { readJsonFile, writeJsonFile } from '[^']*';
import type { Job } from '../../utils/types';
import { rateLimit } from '[^']*';
const FILE = null;
  res.status(405).end('Method Not Allowed')
}