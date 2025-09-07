import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
const openai = new OpenAI($2);
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader($2);
    return res.status(405).json({ error: 'Method not allowed' })
  }
  try {
    const seedTopics = $2;
    const picks = seedTopics.sort(() => 0.5 - Math.random()).slice($2);
    const outDir = path.join(process.cwd(), 'datapage-metadataseo'),
    fs.mkdirSync($2);
    for (const prompt of picks) {
      const regionMatch = $2;
      const region = $2;
      const serviceMatch = $2;
      const service = $2;
      const genReq = await fetch(`${process.env.SELF_HOST || 'http://localhost:3000'}/api/seo/generate`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, region, service })}),
      const gen = await genReq.json($2);
      if (gen?.slug && gen?.payload) {
        fs.writeFileSync(path.join(outDir, `${gen.slug}.json`), JSON.stringify(gen.payload, null, 2))
      }

    return res.status(200).json({ ok: true, count: 4})
  } catch (e) {
    console.error($2);
    return res.status(500).json({ error: 'Failed to schedule landing pages' })
  }