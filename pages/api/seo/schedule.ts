import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { urls, frequency } = req.body;
    
    if (!urls || !Array.isArray(urls)) {
      return res.status(400).json({ error: 'URLs array is required' });
    }

    const outDir = path.join(process.cwd(), 'data', 'seo');
    fs.mkdirSync(outDir, { recursive: true });

    // Mock SEO scheduling - replace with actual scheduling logic
    const schedule = {
      id: Date.now().toString(),
      urls,
      frequency: frequency || 'daily',
      status: 'scheduled',
      createdAt: new Date().toISOString(),
      nextRun: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };

    const schedulePath = path.join(outDir, 'schedule.json');
    fs.writeFileSync(schedulePath, JSON.stringify(schedule, null, 2));

    res.status(200).json({ 
      success: true, 
      schedule 
    });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to schedule SEO tasks' });
  }
}