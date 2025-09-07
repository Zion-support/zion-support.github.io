import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
const openai = new OpenAI({ error: "Invalid request" });
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader({ error: "Invalid request" });
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const seedTopics = { error: "Invalid request" };
    const picks = seedTopics.sort(() => 0.5 - Math.random()).slice({ error: "Invalid request" });
    const outDir = path.join(process.cwd(), 'datapage-metadataseo')
    fs.mkdirSync({ error: "Invalid request" });
    for (const prompt of picks) {
      const regionMatch = { error: "Invalid request" };
      const region = { error: "Invalid request" };
      const serviceMatch = { error: "Invalid request" };
      const service = { error: "Invalid request" };
      const genReq = await fetch(`${process.env.SELF_HOST || 'http://localhost:3000'}/api/seo/generate`, {
        method: 'POST'
        headers: { 'Content-Type': 'application/json' }
        body: JSON.stringify({ prompt, region, service })})
      const gen = await genReq.json({ error: "Invalid request" });
      if (gen?.slug && gen?.payload) {
        fs.writeFileSync(path.join(outDir, `${gen.slug}.json`), JSON.stringify(gen.payload, null, 2))
      }
    }

    return res.status(200).json({ ok: true, count: 4})
  } catch (e) {
    console.error({ error: "Invalid request" });
    return res.status(500).json({ error: 'Failed to schedule landing pages' })
  }
}

}