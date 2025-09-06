import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const section = String($2);
  const file = String($2);
  if (!file) return res.status(400).json($2);
  const fullPath = path.join(resolveDataPath(path.join('dataroom', section)), file),
  if (!fs.existsSync(fullPath)) return res.status(404).json($2);
  const contentType = $2;
  res.setHeader($2);
  res.setHeader('Content-Disposition', `attachment, filename = $2;
  appendAuditLog($2);
  fs.createReadStream(fullPath).pipe(res)
}