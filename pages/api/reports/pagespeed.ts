import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const p = path.join(
  process.cwd()
  'data'
  'reports'
  'pagespeed.json'
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(p, 'utf8');
      const pagespeed = JSON.parse(data);
      return res.status(200).json(pagespeed);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to read pagespeed report' });
    }

  }
if (req.method === 'POST') {
    try {
      const { performance, accessibility, bestPractices, seo } = req.body;
      const report = {
        performance: performance |0
        accessibility: accessibility |0
        bestPractices: bestPractices |0
        seo: seo |0
        generatedAt: new Date().toISOString()
      }
      fs.writeFileSync(p, JSON.stringify(report, null, 2));
      return res.status(201).json(report);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update pagespeed report' });
    }
  }
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}