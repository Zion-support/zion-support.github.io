import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
import OpenAI from 'openai';
<<<<<<< HEAD
<<<<<<< HEAD
=======
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

<<<<<<< HEAD
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method Not Allowed' });
=======
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

  const { operatorPrompt, inputs, metrics } = req.body || {};

  const seed = [
<<<<<<< HEAD
    'Problem & Opportunity',
    'Solution & Product',
    'Market Size (TAM/SAM/SOM)',
    'Traction & Metrics',
    'Business Model',
    'Go-To-Market',
    'Team',
    'Roadmap',
    'Token Strategy',
    'Ask & Call to Action'
  ];
<<<<<<< HEAD
=======
    'Problem & OpportunitySolution & ProductMarket Size (TAM/SAM/SOM)Traction & MetricsBusiness ModelGo-To-MarketTeamRoadmap',
    'Token StrategyAsk & Call to Action'
  ];

>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======

>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  try {
    const prompt = `You are a venture analyst generating a concise, investor-ready pitch.
Operator Prompt: ${operatorPrompt}
Company Mission: ${inputs?.mission}
Funding Stage: ${inputs?.fundingStage}
Vision/Goals: ${inputs?.vision}
Round Type: ${inputs?.roundType}
Target Raise: ${inputs?.targetRaise}
Key Metrics: ${JSON.stringify(metrics)}

Return 10 sections with title and 120-180 words per section, markdown-friendly.`;

    let content = '';
    try {
      const chat = await client.chat.completions.create({
        model: 'gpt-4o-mini',
        messages: [
<<<<<<< HEAD
<<<<<<< HEAD
          {
            role: 'system',
            content: 'You generate crisp, data-driven investor pitch content.',
          },
          { role: 'user', content: prompt },
=======
          { role: 'system', content: 'You generate crisp, data-driven investor pitch content.' },
          { role: 'user', content: prompt }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        ],
        temperature: 0.5
      });
      content = chat.choices?.[0]?.message?.content || '';
    } catch (err) {
      content = '';
    }

    const slides = seed.map((title, idx) => ({ id: `${idx + 1}`, title, content: extractSection(content, title) }));
    const version = `v${new Date().toISOString()}`;
    res.status(200).json({ slides, version });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Generation failed' });
  }
<<<<<<< HEAD
=======
          { role: 'system', content: 'You generate crisp, data-driven investor pitch content.' },
          { role: 'user', content: prompt }
        ],
        temperature: 0.5
      });
      content = chat.choices?.[0]?.message?.content || ''
    } catch (err) {
      content = ''
    }

    const slides = seed.map((title, idx) => ({ id: `${idx + 1}`, title, content: extractSection(content, title) }));
    const version = `v${new Date().toISOString()}`;
    res.status(200).json({ slides, version })
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Generation failed' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function extractSection(body: string, title: string): string {
  if (!body) return '';
  // naive split by headings
  const lines = body.split('\n');
<<<<<<< HEAD
<<<<<<< HEAD
  const matchIdx = lines.findIndex(l =>
    l.toLowerCase().includes(title.toLowerCase())
  );
=======
  const matchIdx = lines.findIndex((l) => l.toLowerCase().includes(title.toLowerCase()));
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (matchIdx >= 0) {
    const snippet = lines.slice(matchIdx + 1, matchIdx + 12).join('\n');
    return snippet.trim();
  }
  return '';
<<<<<<< HEAD
=======
  const matchIdx = lines.findIndex((l) => l.toLowerCase().includes(title.toLowerCase()));
  if (matchIdx >= 0) {
    const snippet = lines.slice(matchIdx + 1, matchIdx + 12).join('\n');
    return snippet.trim()
  }
  return ''
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
