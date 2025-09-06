import type { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import path from 'path';

  }
if (req.method === 'POST') {

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
      

      const report = {
        performance: performance |0
        accessibility: accessibility |0
        bestPractices: bestPractices |0
        seo: seo |0
        generatedAt: new Date().toISOString()

      };
      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);

    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update pagespeed report' });
    }
  }
=======


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
