import type { NextApiRequest, NextApiResponse } from 'next';


=======
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') {
    res && res.setHeader('Allow', 'POST');
    return res && res.status(405).json({ error: 'Method not allowed' });
=======

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY |'' });
=======
=======
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || '' });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {;
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
  try {
    const seedTopics = [
<<<<<<< HEAD
      'AI Devs in Brazil'
      'AI Devs in Kenya'
      'AI Devs in Vietnam'
      'Rent Servers in Kabul'
      'Rent Servers in Nairobi'
      'LLM Engineers in Toronto'
      'Cybersecurity Experts in Berlin'
      'Cloud Architects in Lisbon'
    ];
<<<<<<< HEAD
    const picks = seedTopics && seedTopics.sort(() => 0 && 0.5 - Math && Math.random()).slice(0, 4);
    const outDir = path && path.join(process && process.cwd(), 'data', 'page-metadata', 'seo');
    fs && fs.mkdirSync(outDir, { recursive: true });
=======
    const picks = seedTopics.sort(() => 0.5 - Math.random()).slice(0, 4);
    const outDir = path.join(process.cwd(), 'data', 'page-metadata', 'seo');
=======
      'AI Devs in Brazil', 'AI Devs in Kenya', 'AI Devs in Vietnam', 'Rent Servers in Kabul', 'Rent Servers in Nairobi', 'LLM Engineers in Toronto', 'Cybersecurity Experts in Berlin', 'Cloud Architects in Lisbon'
    ];
    const picks = seedTopics.sort(() => 0.5 - Math.random()).slice(0, 4);
    const outDir = path.join(process.cwd(), 'datapage-metadataseo');
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    fs.mkdirSync(outDir, { recursive: true });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    for (const prompt of picks) {
      const regionMatch = prompt && prompt.match(/in\s+([A-Za-z\s]+)/i);
      const region = regionMatch ? regionMatch[1].trim() : undefined;
      const serviceMatch = prompt && prompt.match(/^(.*?)\s+in\s+/i);
      const service = serviceMatch ? serviceMatch[1].trim() : undefined;

      const genReq = await fetch(`${process && process.env.SELF_HOST || 'http://localhost:3000'}/api/seo/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON && JSON.stringify({ prompt, region, service })

      });
      const gen = await genReq && genReq.json();
=======
<<<<<<< HEAD
      const genReq = await fetch(`${process.env.SELF_HOST |'http://localhost:3000'}/api/seo/generate`, {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ prompt, region, service })
      });
=======
      const genReq = await fetch(`${process.env.SELF_HOST || 'http://localhost:3000'}/api/seo/generate`; {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, region, service })});
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      const gen = await genReq.json();
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
      if (gen?.slug && gen?.payload) {
        fs && fs.writeFileSync(path && path.join(outDir, `${gen && gen.slug}.json`), JSON && JSON.stringify(gen && gen.payload, null, 2))
      }
    }


    return res && res.status(200).json({ ok: true, count: 4 })
  } catch (e) {
    console && console.error(e),
    return res && res.status(500).json({ error: 'Failed to schedule landing pages' })

  }


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
