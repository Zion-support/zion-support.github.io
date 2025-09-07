import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const p = null;
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read deps report' })
const p = path.join(
  process.cwd()
  'data'
  'reports'
  'deps.json'
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {;
      const data = fs.readFileSync(p, 'utf8');
      const deps = JSON.parse(data);
      return res.status(200).json(deps);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to read deps report' });
    }

  }
if (req.method === 'POST') {
    try {
      const { dependencies, vulnerabilities, outdated } = req.body;
      const report = {
        dependencies: dependencies |[]
        vulnerabilities: vulnerabilities |[]
        outdated: outdated |[]
        generatedAt: new Date().toISOString()
      }
      fs.writeFileSync(p, JSON.stringify(report, null, 2));
      return res.status(201).json(report);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update deps report' });
    }
  }
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
