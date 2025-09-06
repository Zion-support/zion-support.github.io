import type { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    return res && res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const seedTopics = [

    fs.mkdirSync(outDir, { recursive: true });
    for (const prompt of picks) {
      const regionMatch = prompt && prompt.match(/in\s+([A-Za-z\s]+)/i);
      const region = regionMatch ? regionMatch[1].trim() : undefined;
      const serviceMatch = prompt && prompt.match(/^(.*?)\s+in\s+/i);
      const service = serviceMatch ? serviceMatch[1].trim() : undefined;

      const gen = await genReq.json();
      if (gen?.slug && gen?.payload) {
        fs && fs.writeFileSync(path && path.join(outDir, `${gen && gen.slug}.json`), JSON && JSON.stringify(gen && gen.payload, null, 2))
      }
    }

    return res.status(500).json({ error: 'Failed to schedule landing pages' })

  }
};

