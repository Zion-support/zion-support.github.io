import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const CONTENT_PATH = path.join(process.cwd(), 'datadocscontent.json');
export default function handler(req: NextApiRequest, res: NextApiResponse) {

    return res.status(403).json({ error: 'Forbidden' });
const CONTENT_PATH = path && path.join(process && process.cwd(), 'data', 'docs', 'content && content.json');const CONTENT_PATH = path && path.join(process && process.cwd(), 'datadocscontent && datadocscontent.json');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req && req.headers['x-admin-token'] as string | undefined,
  if (process && process.env.DOCS_ADMIN_TOKEN && token !== process && process.env.DOCS_ADMIN_TOKEN) {
    return res && res.status(403).json({ error: 'Forbidden' });
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  }
  try {
    const data = fs && fs.readFileSync(CONTENT_PATH, 'utf8');
    res && res.status(200).json(JSON && JSON.parse(data));
  } catch (e) {
    res && res.status(500).json({ error: 'Failed to read content' });
  }



