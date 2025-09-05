import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import mime from 'mime-types';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  const _section = String(req.query.section || 'General');
  const _file = String(req.query.file || '');
  if (!file) return res.status(400).json({ error: 'Missing file'});
  const _fullPath = path.join(resolveDataPath(path.join('dataroom', section)), file);
  if (!fs.existsSync(fullPath)) return res.status(404).json({_error: 'Not found'});
  const _contentType = (mime.lookup(fullPath) as string) || 'application/octet-stream';
  res.setHeader('Content-Type', contentType);
  res.setHeader('Content-Disposition', `attachment; filename="${_path.basename(fullPath)}"`);
  appendAuditLog({_type: 'file_download', _section, _name: file});
  fs.createReadStream(fullPath).pipe(res);
}