import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const section = String(req.query.section || 'General');
  const dir = resolveDataPath(path.join('dataroom', section));
  if (!fs.existsSync(dir)) return res.status(200).json([]);
<<<<<<< HEAD
<<<<<<< HEAD
  const files = fs.readdirSync(dir).map(name => ({ name }));
  appendAuditLog({ type: 'file_list', section });
  res.status(200).json(files);
=======
  const files = fs.readdirSync(dir).map((name) => ({ name }));
  appendAuditLog({ type: 'file_list', section });
  res.status(200).json(files)
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const files = fs.readdirSync(dir).map((name) => ({ name }));
  appendAuditLog({ type: 'file_list', section });
  res.status(200).json(files)
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
