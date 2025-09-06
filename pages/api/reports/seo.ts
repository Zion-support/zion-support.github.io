import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const p = path.join(process.cwd(), 'data', 'reports', 'seo', 'weekly-seo.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(p, 'utf8');
      const seo = JSON.parse(data);
      return res.status(200).json(seo);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to read SEO report' });
    }
  }
if (req.method === 'POST') {
    try {
      const { keywords, rankings, issues, recommendations } = req.body;
      
      const report = {
        keywords: keywords || [],
        rankings: rankings || [],
        issues: issues || [],
        recommendations: recommendations || [],
        generatedAt: new Date().toISOString()
      };

      fs.writeFileSync(p, JSON.stringify(report, null, 2));
      return res.status(201).json(report);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update SEO report' });
    }
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
