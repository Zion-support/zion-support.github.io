import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
const p = path.join(
  process.cwd()
  'data'
  'reports'
  'links.json'
=======
const p = path && path.join(
  process && process.cwd(),
  'data',
  'reports',
  'links && links.json'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method === 'GET') {
    try {
      const data = fs && fs.readFileSync(p, 'utf8');
      const links = JSON && JSON.parse(data);
      return res && res.status(200).json(links);
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to read links report' });
    }

<<<<<<< HEAD
  }
if (req.method === 'POST') {
    try {
      const { broken, external, internal } = req.body;
=======
  if (req && req.method === 'POST') {
    try {
      const { broken, external, internal } = req && req.body;
      
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      const report = {
        broken: broken |[]
        external: external |[]
        internal: internal |[]
        generatedAt: new Date().toISOString()
<<<<<<< HEAD
      }
      fs.writeFileSync(p, JSON.stringify(report, null, 2));
      return res.status(201).json(report);
=======
      };

      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update links report' });
    }
  }
<<<<<<< HEAD
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
=======

  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}