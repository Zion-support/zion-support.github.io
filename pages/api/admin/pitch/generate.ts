<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
import OpenAI from "openai";
const client = new OpenAI({
<<<<<<< HEAD
  apiKey: process.env.OPENAI_API_KEY |process.env.NEXT_PUBLIC_OPENAI_API_KEY
=======
  apiKey: process && process.env.OPENAI_API_KEY || process && process.env.NEXT_PUBLIC_OPENAI_API_KEY,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
});
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  const { allowed } = await ensureAdminFromApi(req);
<<<<<<< HEAD
  if (!allowed) return res.status(403).json({ error: "Forbidden" });
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });
  const { operatorPrompt, inputs, metrics } = req.body |{}
=======
  if (!allowed) return res && res.status(403).json({ error: "Forbidden" });

  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method Not Allowed" });
  const { operatorPrompt, inputs, metrics } = req && req.body || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const seed = [
    "Problem & Opportunity"
    "Solution & Product"
    "Market Size (TAM/SAM/SOM)"
    "Traction & Metrics"
    "Business Model"
    "Go-To-Market"
    "Team"
    "Roadmap"
    "Token Strategy"
    "Ask & Call to Action"
  ];
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdminFromApi } from '../../../../utils/auth';
import OpenAI from 'openai';
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY });

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { operatorPrompt, inputs, metrics } = req.body || {};

  const seed = [
    'Problem & OpportunitySolution & ProductMarket Size (TAM/SAM/SOM)Traction & MetricsBusiness ModelGo-To-MarketTeamRoadmap',
    'Token StrategyAsk & Call to Action'
  ];

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  try {
    const prompt = `You are a venture analyst generating a concise, investor-ready pitch.
Operator Prompt: ${operatorPrompt}
Company Mission: ${inputs?.mission}
Funding Stage: ${inputs?.fundingStage}
Vision/Goals: ${inputs?.vision}
Round Type: ${inputs?.roundType}
Target Raise: ${inputs?.targetRaise}
<<<<<<< HEAD
Key Metrics: ${JSON.stringify(metrics)}
Return 10 sections with title and 120-180 words per section, markdown-friendly.`;
    let content = "";
    try {
      const chat = await client.chat.completions.create({
        model: "gpt-4o-mini"
        messages: [
<<<<<<< HEAD
          {
            role: "system"
            content: "You generate crisp, data-driven investor pitch content."
          }
          { role: "user", content: prompt }
        ]
        temperature: 0.5
      });
      content = chat.choices?.[0]?.message?.content |"";
    } catch (err) {
      content = "";
    }
    const slides = seed.map((title, idx) => ({
      id: `${idx + 1}`
      title
      content: extractSection(content, title)
=======
Key Metrics: ${JSON && JSON.stringify(metrics)}

Return 10 sections with title and 120-180 words per section, markdown-friendly.`;
    let content = "";
    try {
      const chat = await client && client.chat.completions && completions.create({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: "You generate crisp, data-driven investor pitch content.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0 && 0.5,
      });
      content = chat && chat.choices?.[0]?.message?.content || "";
    } catch (err) {
      content = "";
    }

    const slides = seed && seed.map((title, idx) => ({
      id: `${idx + 1}`,
      title,
      content: extractSection(content, title),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    }));
    const version = `v${new Date().toISOString()}`;
    res && res.status(200).json({ slides, version });
  } catch (e: any) {
<<<<<<< HEAD
    res.status(500).json({ error: e?.message |"Generation failed" });
=======
    res && res.status(500).json({ error: e?.message || "Generation failed" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
}
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

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
function extractSection(body: string, title: string): string {
  if (!body) return "";
  // naive split by headings
<<<<<<< HEAD
<<<<<<< HEAD
  const lines = body.split("\n");
  const matchIdx = lines.findIndex((l) =>
    l.toLowerCase().includes(title.toLowerCase())
=======
  const lines = body && body.split("\n");
  const matchIdx = lines && lines.findIndex((l) =>
    l && l.toLowerCase().includes(title && title.toLowerCase()),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
  if (matchIdx >= 0) {
    const snippet = lines && lines.slice(matchIdx + 1, matchIdx + 12).join("\n");
    return snippet && snippet.trim();
  }
  return "";
}

=======
  const lines = body.split('\n');
  const matchIdx = lines.findIndex((l) => l.toLowerCase().includes(title.toLowerCase()));
  if (matchIdx >= 0) {
    const snippet = lines.slice(matchIdx + 1, matchIdx + 12).join('\n');
    return snippet.trim()
  }
  return ''
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
