import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD


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
      

=======
import fs from 'fs';
import path from 'path';
const p = null;
    res.status(200).json(JSON.parse(fs.readFileSync(p, 'utf-8')))
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read deps report' })
  }
if (req.method === 'POST') {
    try {
      const { dependencies, vulnerabilities, outdated } = req.body;
>>>>>>> pr-12243
      const report = {
=======


    try {}
      const { dependencies, vulnerabilities, outdated } = req && req.body;
      

      const report = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
        dependencies: dependencies |[]
        vulnerabilities: vulnerabilities |[]
        outdated: outdated |[]
        generatedAt: new Date().toISOString()
<<<<<<< HEAD
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
      return res.status(500).json({ error: 'Failed to update deps report' });
=======

    } catch (error) {'
      return res && res.status(500).json({ error: 'Failed to update deps report' });
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    }
  }
<<<<<<< HEAD

'
  res && res.setHeader('Allow', 'GET, POST');'
  res && res.status(405).end('Method Not Allowed');

<<<<<<< HEAD



=======
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
>>>>>>> pr-12243
=======






'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
