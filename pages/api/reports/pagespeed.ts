import type { NextApiRequest, NextApiResponse } from 'next';


    try {
      const { performance, accessibility, bestPractices, seo } = req && req.body;
      

      const report = {
        performance: performance |0
        accessibility: accessibility |0
        bestPractices: bestPractices |0
        seo: seo |0
        generatedAt: new Date().toISOString()
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update pagespeed report' });
    }
  }


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');



