import type { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import path from 'path';

  }
if (req.method === 'POST') {
    try {
      const { broken, external, internal } = req.body;
      const report = {
        broken: broken |[]
        external: external |[]
        internal: internal |[]
        generatedAt: new Date().toISOString()
      }
      fs.writeFileSync(p, JSON.stringify(report, null, 2));
      return res.status(201).json(report);
    } catch (error) {
      return res.status(500).json({ error: 'Failed to update links report' });
    }
  }
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');

