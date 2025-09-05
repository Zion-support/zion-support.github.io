<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import formidable from 'formidable',
import fs from 'fs',
import path from 'path',
import { appendAuditLog, resolveDataPath } from '../../../../utils/api/storage',

export const config = { api: { bodyParser: false } },

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),

  const form = formidable({ multiples: false }),
  form.parse(req, (err, fields, files) => {
    if (err) return res.status(400).json({ error: 'Invalid form data' }),
    const section = String(fields.section || 'General'),
    const file = files.file as formidable.File | undefined,
    if (!file || !file.filepath) return res.status(400).json({ error: 'File missing' }),

    const targetDir = resolveDataPath(path.join('dataroom', section)),
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, { recursive: true }),
    const targetPath = path.join(targetDir, file.originalFilename || path.basename(file.filepath)),
    fs.copyFileSync(file.filepath, targetPath),
    appendAuditLog({ type: 'file_upload', section, name: path.basename(targetPath) }),
    res.status(200).json({ ok: true })
  })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const _config = {_api: { bodyParser: false} };

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});

  const _form = formidable({_multiples: false});
  form.parse(_req, _(err, _fields, _files) => {_if (err) return res.status(400).json({ error: 'Invalid form data'});
    const _section = String(fields.section || 'General');
    const _file = files.file as formidable.File | undefined;
    if (!file || !file.filepath) return res.status(400).json({_error: 'File missing'});

    const _targetDir = resolveDataPath(path.join('dataroom', section));
    if (!fs.existsSync(targetDir)) fs.mkdirSync(targetDir, {_recursive: true});
    const _targetPath = path.join(targetDir, file.originalFilename || path.basename(file.filepath));
    fs.copyFileSync(file.filepath, targetPath);
    appendAuditLog({_type: 'file_upload', _section, _name: path.basename(targetPath)});
    res.status(200).json({_ok: true});
  });
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}