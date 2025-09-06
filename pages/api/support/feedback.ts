import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

function writeJson(filePath: string, data: any) {
  const fullPath = path.join(process.cwd(), 'data', filePath);
  const dir = path.dirname(fullPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(fullPath, JSON.stringify(data, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { message, rating, category } = req.body;
    
    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const feedback = {
      id: Date.now().toString(),
      message,
      rating: rating || 5,
      category: category || 'general',
      timestamp: new Date().toISOString()
    };

    writeJson('support/feedback.json', feedback);
    return res.status(200).json({ ok: true });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to save feedback' });
  }
}