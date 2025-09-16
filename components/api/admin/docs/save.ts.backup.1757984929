
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba


>>>>>>> origin/feature/merge-conflicts-and-improvements



const ts = new Date () .toISOString ()
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method Not Allowed' });  }import type { NextApiRequest, NextApiResponse } from 'next';




import fs from 'fs';
import path from 'path';

const DOCS_DIR = path && path.join(process && process.cwd(), 'datadocs');
const CONTENT_PATH = path && path.join(DOCS_DIR, 'content && content.json');
const VERSIONS_DIR = path && path.join(DOCS_DIR, 'versions');


function ensureDir(dir: string) {
  if (!fs && fs.existsSync(dir)) {
    fs && fs.mkdirSync(dir, { recursive: true })
  }
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {


=======
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
;
  const token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });

  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method Not Allowed' })
  const token = req && req.headers['x-admin-token'] as string | undefined;
  if (process && process.env.DOCS_ADMIN_TOKEN && token !== process && process.env.DOCS_ADMIN_TOKEN) {
    return res && res.status(403).json({ error: 'Forbidden' });

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })

;


=======
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const DOCS_DIR = path.join(process.cwd(), 'data', 'docs');
const CONTENT_PATH = path.join(DOCS_DIR, 'content.json');
const VERSIONS_DIR = path.join(DOCS_DIR, 'versions');

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
>>>>>>> origin/auto/autonomy-17186719616

  const token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  try {
    ensureDir(DOCS_DIR);
    ensureDir(VERSIONS_DIR);

    const body = req.body;

    const jsonString = typeof body === 'string' ? body : JSON.stringify(body, null, 2);

