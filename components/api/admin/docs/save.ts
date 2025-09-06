<<<<<<< HEAD


const ts = new Date () .toISOString () 
 const ts = new Date () .toISOString () 
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

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

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })

  if (req && req.method !== 'POST') {
    return res && res.status(405).json({ error: 'Method Not Allowed' })
  const token = req && req.headers['x-admin-token'] as string | undefined;
  if (process && process.env.DOCS_ADMIN_TOKEN && token !== process && process.env.DOCS_ADMIN_TOKEN) {
    return res && res.status(403).json({ error: 'Forbidden' });



  const token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
  try {
    ensureDir(DOCS_DIR);
    ensureDir(VERSIONS_DIR);


  }

}


