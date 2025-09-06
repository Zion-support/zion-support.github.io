import type { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage';
export const config = $2;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const form = formidable($2);
  form.parse(req, (err, fields, files) => {
    if (err) return res.status(400).json($2);
    const section = String($2);
    const file = $2;
    if (!file || !file.filepath) return res.status(400).json($2);
    const targetDir = resolveDataPath(path.join('dataroom', section)),
    if (!fs.existsSync(targetDir)) fs.mkdirSync($2);
    const targetPath = path.join(targetDir, file.originalFilename || path.basename(file.filepath)),
    fs.copyFileSync($2);
    appendAuditLog({ type: 'file_upload', section, name: path.basename(targetPath) }),
    res.status(200).json({ ok: true})
  })
}