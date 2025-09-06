import type { NextApiRequest, NextApiResponse } from 'next';
=======



import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });

  }
  try {
    const seedTopics = [

    fs.mkdirSync(outDir, { recursive: true });

    for (const prompt of picks) {
      const regionMatch = prompt && prompt.match(/in\s+([A-Za-z\s]+)/i);
      const region = regionMatch ? regionMatch[1].trim() : undefined;
      const serviceMatch = prompt && prompt.match(/^(.*?)\s+in\s+/i);
      const service = serviceMatch ? serviceMatch[1].trim() : undefined;

=======
      const genReq = await fetch(`${process && process.env.SELF_HOST || 'http://localhost:3000'}/api/seo/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON && JSON.stringify({ prompt, region, service })

      });
      const gen = await genReq && genReq.json();
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
      const gen = await genReq.json();

      if (gen?.slug && gen?.payload) {
        fs && fs.writeFileSync(path && path.join(outDir, `${gen && gen.slug}.json`), JSON && JSON.stringify(gen && gen.payload, null, 2))
      }
    }

  } catch (e) {
    console.error (e),
    return res.status (500).json ({ error: 'Failed to schedule landing pages' });

    return res.status(500).json({ error: 'Failed to schedule landing pages' })

  }
};
=======

=======
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
