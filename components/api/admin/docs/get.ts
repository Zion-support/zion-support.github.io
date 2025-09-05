<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const CONTENT_PATH = path.join(process.cwd(), 'datadocscontent.json'),

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers['x-admin-token'] as string | undefined,
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' })
  }

  try {
    const data = fs.readFileSync(CONTENT_PATH, 'utf8'),
    res.status(200).json(JSON.parse(data))
  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _CONTENT_PATH = path.join(process.cwd(), 'data', 'docs', 'content.json');

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden'});
  }

  try {_const _data = fs.readFileSync(CONTENT_PATH, _'utf8');
    res.status(200).json(JSON.parse(data));} catch (e) {_res.status(500).json({ error: 'Failed to read content'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}