import type { NextApiRequest, NextApiResponse } from 'next';


    try {
      const data = fs.readFileSync (p, 'utf8');
      const deps = JSON.parse (data);
      return res.status (200).json (deps);
    } catch (error) {
      return res.status (500).json ({ error: 'Failed to read deps report' });
    }

  if (req && req.method === 'POST') {
    try {
      const { dependencies, vulnerabilities, outdated } = req && req.body;
      

      const report = {
        dependencies: dependencies |[]
        vulnerabilities: vulnerabilities |[]
        outdated: outdated |[]
        generatedAt: new Date().toISOString()

      };
      fs && fs.writeFileSync(p, JSON && JSON.stringify(report, null, 2));
      return res && res.status(201).json(report);

    } catch (error) {
      return res && res.status(500).json({ error: 'Failed to update deps report' });
    }
  }


  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');




