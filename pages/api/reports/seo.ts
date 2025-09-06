import type { NextApiRequest, NextApiResponse } from 'next';



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


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39


>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
