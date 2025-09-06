import type { NextApiRequest, NextApiResponse } from 'next';
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