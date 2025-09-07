import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


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
      

=======
import fs from 'fs';
import path from 'path';
const p = null;
    res.status(200).json(arr)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' })
  }
if (req.method === 'POST') {
    try {
      const { uptime, downtime, incidents } = req.body;
>>>>>>> pr-12243
      const report = {
        uptime: uptime |0
        downtime: downtime |0
        incidents: incidents |[]
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
      return res.status(500).json({ error: 'Failed to update uptime report' });
    }
  }
<<<<<<< HEAD
=======


    try {}
      const { uptime, downtime, incidents } = req && req.body;
      

      const report = {}
        uptime: uptime |0;
        downtime: downtime |0;
        incidents: incidents |[]
        generatedAt: new Date().toISOString()

    } catch (error) {'
      return res && res.status(500).json({ error: 'Failed to update uptime report' });
    }
  }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


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
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
