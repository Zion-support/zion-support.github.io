import type { NextApiRequest, NextApiResponse } from 'next';



  if (req && req.method === 'POST') {
const p = path.join(process.cwd(), 'data', 'reports', 'seo', 'weekly-seo.json');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {;
      const data = fs.readFileSync(p, 'utf8');
      const seo = JSON.parse(data);
      return res.status(200).json(seo);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to read SEO report' });
    }

const p = path.join(process.cwd(), 'datareportsseoweekly-seo.json');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read seo' });
  }
if (req.method === 'POST') {    try {
      const { keywords, rankings, issues, recommendations } = req && req.body;
      

      const report = {
        keywords: keywords |[]
        rankings: rankings |[]
        issues: issues |[]
        recommendations: recommendations |[]
        generatedAt: new Date().toISOString()

      };

      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);

    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update SEO report' });
    }
  }


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');

const p = path.join(process.cwd(), 'data', 'reports', 'seo', 'weekly-seo.json');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {;
      const data = fs.readFileSync(p, 'utf8');
      const seo = JSON.parse(data);
      return res.status(200).json(seo);
;
      const report = {
        keywords: keywords || [],
        rankings: rankings || [],
        issues: issues || [],
        recommendations: recommendations || [],
        generated_at: new Date ().toISOString ();
      }
;
      fs.writeFileSync (p, JSON.stringify (report, null, 2));
      return res.status (201).json (report);
const p = path.join(process.cwd(), 'datareportsseoweekly-seo.json');

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read seo' });
  }
if (req.method === 'POST') {
    try {
      const data = fs.readFileSync (p, 'utf8');
      const seo = JSON.parse (data);
      return res.status (200).json (seo);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read SEO report' });
    }
  if (req && req.method === 'POST') {
    try {
      const { keywords, rankings, issues, recommendations } = req && req.body;
      const report = {
        keywords: keywords |[]
        rankings: rankings |[]
        issues: issues |[]
        recommendations: recommendations |[]
        generatedAt: new Date().toISOString()
      };
      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update SEO report' });
    }
  }
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const p = path.join(process.cwd(), 'datareportsseoweekly-seo.json'),;
export default function handler(req, res) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json({});
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')));
  } catch (error) {
    res.status(500).json({ error: e?.message || 'Failed to read SEO report' });
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
