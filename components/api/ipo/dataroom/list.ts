<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import fs from 'fs',;
import path from 'path',;
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  const section = String(req.query.section || 'General'),;
  const dir = resolveDataPath(path.join('dataroom', section)),;
  if (!fs.existsSync(dir)) return res.status(200).json([]),;
  const files = fs.readdirSync(dir).map((name) => ({ name })),;
  appendAuditLog({ type:'file_list', section }),;
  res.status(200).json(files),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const section = String(req.query.section || 'General'),
  const dir = resolveDataPath(path.join('dataroom', section)),
  if (!fs.existsSync(dir)) return res.status(200).json([]),
  const files = fs.readdirSync(dir).map((name) => ({ name })),
  appendAuditLog({ type: 'file_list', section }),
  res.status(200).json(files)}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
