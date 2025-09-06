import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD


    try {
      const data = fs.readFileSync (p, 'utf8');
      const pagespeed = JSON.parse (data);
      return res.status (200).json (pagespeed);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read pagespeed report' });
    }

  if (req && req.method === 'POST') {
    try {
      const { performance, accessibility, bestPractices, seo } = req && req.body;
      

=======
import fs from 'fs';
import path from 'path';
const p = null;
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read PageSpeed report' })
  }
if (req.method === 'POST') {
    try {
      const { performance, accessibility, bestPractices, seo } = req.body;
>>>>>>> pr-12243
      const report = {
        performance: performance |0
        accessibility: accessibility |0
        bestPractices: bestPractices |0
        seo: seo |0
        generatedAt: new Date().toISOString()
<<<<<<< HEAD

      };
      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);

=======
      }
      fs.writeFileSync(p, JSON.stringify(report, null, 2));
      return res.status(201).json(report);
>>>>>>> pr-12243
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update pagespeed report' });
    }
  }
<<<<<<< HEAD


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');




=======
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
>>>>>>> pr-12243
