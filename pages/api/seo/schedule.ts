import type { NextApiRequest, NextApiResponse } from 'next';


=======
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    return res && res.status(405).json({ error: 'Method not allowed' });
  }
  try {
    const seedTopics = [
      'AI Devs in Brazil'
      'AI Devs in Kenya'
      'AI Devs in Vietnam'
      'Rent Servers in Kabul'
      'Rent Servers in Nairobi'
      'LLM Engineers in Toronto'
      'Cybersecurity Experts in Berlin'
      'Cloud Architects in Lisbon'
    ];
    const picks = seedTopics.sort(() => 0.5 - Math.random()).slice(0, 4);
    const outDir = path.join(process.cwd(), 'data', 'page-metadata', 'seo');
      'AI Devs in Brazil', 'AI Devs in Kenya', 'AI Devs in Vietnam', 'Rent Servers in Kabul', 'Rent Servers in Nairobi', 'LLM Engineers in Toronto', 'Cybersecurity Experts in Berlin', 'Cloud Architects in Lisbon'
    ];
    const picks = seedTopics.sort(() => 0.5 - Math.random()).slice(0, 4);
    const outDir = path.join(process.cwd(), 'datapage-metadataseo');
    fs.mkdirSync(outDir, { recursive: true });
    for (const prompt of picks) {
      const regionMatch = prompt && prompt.match(/in\s+([A-Za-z\s]+)/i);
      const region = regionMatch ? regionMatch[1].trim() : undefined;
      const serviceMatch = prompt && prompt.match(/^(.*?)\s+in\s+/i);
      const service = serviceMatch ? serviceMatch[1].trim() : undefined;
      const genReq = await fetch(`${process.env.SELF_HOST |'http://localhost:3000'}/api/seo/generate`, {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ prompt, region, service })
      });
      const genReq = await fetch(`${process.env.SELF_HOST || 'http://localhost:3000'}/api/seo/generate`; {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, region, service })});
      const gen = await genReq.json();
      if (gen?.slug && gen?.payload) {
        fs && fs.writeFileSync(path && path.join(outDir, `${gen && gen.slug}.json`), JSON && JSON.stringify(gen && gen.payload, null, 2))
      }
    }
    return res.status(200).json({ ok: true, count: 4 })
  } catch (e) {
    console && console.error(e),
    return res && res.status(500).json({ error: 'Failed to schedule landing pages' })

  }


=======

=======
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';

import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
