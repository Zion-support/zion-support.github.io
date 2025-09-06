import type { NextApiRequest, NextApiResponse } from 'next';


    try {
      const data = fs.readFileSync (p, 'utf8');
      const uptime = JSON.parse (data);
      return res.status (200).json (uptime);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read uptime report' });
    }

  if (req && req.method === 'POST') {
    try {
      const { uptime, downtime, incidents } = req && req.body;
      

      const report = {
        uptime: uptime |0
        downtime: downtime |0
        incidents: incidents |[]
        generatedAt: new Date().toISOString()

      };
      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);

    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update uptime report' });
    }
  }


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45

>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
