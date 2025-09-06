import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '[^']*';
import type { Job } from '../../../utils/types';
import { rateLimit } from '[^']*';
import { getRequestUserEmail, isAdminEmail } from '[^']*';

const FILE = null;
  res.status(405).end('Method Not Allowed')
}