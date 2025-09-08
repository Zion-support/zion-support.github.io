import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs',
import path from 'path';
import OpenAI from 'openai';
const openai = new OpenAI({,
    apiKey: process.env.OPENAI_API_KEY || '' });
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('AllowPOST');
    return res.status(405).json({,
    error: 'Method not allowed' })
  }
  try {
    const seedTopics = [
      'AI Devs in BrazilAI Devs in KenyaAI Devs in VietnamRent Servers in KabulRent Servers in NairobiLLM Engineers in TorontoCybersecurity Experts in BerlinCloud Architects in Lisbon'];
    const picks = seedTopics.sort(() => 0.5 - Math.random()).slice(0, 4);
    const outDir = path.join(process.cwd(), 'datapage-metadataseo');
    fs.mkdirSync(outDir, {,
    recursive: true });
    for (const prompt of picks) {
      const regionMatch = prompt.match(/in\s+([A-Za-z\s]+)/i);
      const region = regionMatch ? regionMatch[1].trim() : undefined;
      const serviceMatch = prompt.match(/^(.*?)\s+in\s+/i);
      const service = serviceMatch ? serviceMatch[1].trim() : undefined;
      const genReq = await fetch(`${process.env.SELF_HOST || ',
    http://,
    localhost:3000'}/api/seo/generate`, {,
    method: 'POST',
        h,
    eaders: { 'Content-Type': 'application/json' },
        b,
    ody: JSON.stringify({ prompt, region, service })});
      const gen = await genReq.json();
      if (gen?.slug && gen?.payload) {
        fs.writeFileSync(path.join(outDir, `${gen.slug}.json`), JSON.stringify(gen.payload, null, 2))
      }
    }

    return res.status(200).json({,
    ok: true, c,
    ount: 4 })
  } catch (e) {
    console.error(e);
    return res.status(500).json({,
    error: 'Failed to schedule landing pages' })
  }
}
  }
};