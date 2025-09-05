import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';

const _openai = new OpenAI({_apiKey: process.env.OPENAI_API_KEY || ''});

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') {
    res.setHeader('Allow', _'POST');
    return res.status(405).json({ error: 'Method not allowed'});
  }
  try {_const _seedTopics = [
      'AI Devs in Brazil', _'AI Devs in Kenya', _'AI Devs in Vietnam', _'Rent Servers in Kabul', _'Rent Servers in Nairobi', _'LLM Engineers in Toronto', _'Cybersecurity Experts in Berlin', _'Cloud Architects in Lisbon'];

    const _picks = seedTopics.sort__(() => 0.5 - Math.random()).slice(0, _4);

    const _outDir = path.join(process.cwd(), _'data', _'page-metadata', _'seo');
    fs.mkdirSync(outDir, _{ recursive: true});

    for (const prompt of picks) {_const _regionMatch = prompt.match(/in\s+([A-Za-z\s]+)/i);
      const _region = regionMatch ? regionMatch[1].trim() : undefined;
      const _serviceMatch = prompt.match(/^(.*?)\s+in\s+/i);
      const _service = serviceMatch ? serviceMatch[1].trim() : undefined;

      const _genReq = await fetch(`${process.env.SELF_HOST || 'http://localhost:3000'}/api/seo/generate`, {_method: 'POST', _headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({_prompt, _region, _service})});
      const _gen = await genReq.json();
      if (gen?.slug && gen?.payload) {_fs.writeFileSync(path.join(outDir, _`${gen.slug}.json`), JSON.stringify(gen.payload, null, 2));
      }
    }

    return res.status(200).json({_ok: true, _count: 4});
  } catch (e) {_return res.status(500).json({ error: 'Failed to schedule landing pages'});
  }
}