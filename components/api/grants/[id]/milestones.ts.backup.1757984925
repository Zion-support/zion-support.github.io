import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
  if (req.method === 'POST') {
    const existing = readGrant(id);
    if (!existing) return res.status(404).json({ error: 'Not found' });
    const payload = req.body as MilestonesUpdatePayload;




=======
    existing.milestones = payload.milestones || [];
    existing.updatedAt = new Date().toISOString();
    writeGrant(existing);
    return res.status(200).json({ record: existing });
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
>>>>>>> origin/auto/autonomy-17186719616
