import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _section = String(req.query.section || 'General');
  const _dir = resolveDataPath(path.join('dataroom', _section));
  if (!fs.existsSync(dir)) return res.status(200).json([]);
  const _files = fs.readdirSync(dir).map(_(name) => ({ name}));
  appendAuditLog({_type: 'file_list', _section});
  res.status(200).json(files);
}