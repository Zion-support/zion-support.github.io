import type { NextApiRequest, NextApiResponse } from 'next';
    try {
      const data = fs.readFileSync (p, 'utf8');
      const links = JSON.parse (data);
      return res.status (200).json (links);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read links report' });
    }

  }
    try {
      const report = {
        broken: broken |[]
        external: external |[]
        internal: internal |[]
        generatedAt: new Date().toISOString()
    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update links report' });
    }
  }


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');



