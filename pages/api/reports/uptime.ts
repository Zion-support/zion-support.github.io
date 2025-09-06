import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
const p = null;
    res.status(200).json(arr)
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' })
=======
const p = path.join(
  process.cwd()
  'data'
  'reports'
  'uptime.json'
);
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = fs.readFileSync(p, 'utf8');
      const uptime = JSON.parse(data);
      return res.status(200).json(uptime);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to read uptime report' });
    }
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  }
if (req.method === 'POST') {
    try {
      const { uptime, downtime, incidents } = req.body;
      const report = {
        uptime: uptime |0
        downtime: downtime |0
        incidents: incidents |[]
        generatedAt: new Date().toISOString()
      }
      fs.writeFileSync(p, JSON.stringify(report, null, 2));
      return res.status(201).json(report);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update uptime report' });
    }
  }
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
=======

const p = path.join(process.cwd(), 'data', 'ops', 'uptime-log.json');
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!fs.existsSync(p)) return res.status(200).json([]);
    
}

const arr = JSON.parse(fs.readFileSync(p, 'utf-8'));
    res.status(200).json(arr);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to read uptime log' });
  }
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
