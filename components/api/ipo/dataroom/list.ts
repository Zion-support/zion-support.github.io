
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const section = null;
  res.status(200).json(files)
}

