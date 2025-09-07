import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const section = String($2);
  const dir = resolveDataPath(path.join('dataroom', section)),
  if (!fs.existsSync(dir)) return res.status(200).json($2);
  const files = $2;
  appendAuditLog($2);
  res.status(200).json(files)
}