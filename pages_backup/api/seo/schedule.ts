import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs',
import path from 'path';
import OpenAI from 'openai';
const openai = null;
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
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
    fs.mkdirSync(outDir, { recursive: true });

    /api/seo/generate`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt, region, service }),
        }
      );
      const gen = await genReq.json();
      if (gen?.slug && gen?.payload) {
        fs.writeFileSync(
          path.join(outDir, `${gen.slug}.json`),
          JSON.stringify(gen.payload, null, 2)
        );
      }
    }

    return res.status(200).json({ ok: true, count: 4 });
  } catch (e) {
    console.error(e);
    return res.status(500).json({ error: 'Failed to schedule landing pages' });
  }
    return res.status(500).json({ error: 'Failed to schedule landing pages' })
  }
}
