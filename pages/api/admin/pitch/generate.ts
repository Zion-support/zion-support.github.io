<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
=======

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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

  const seed = [
<<<<<<< HEAD
=======
    'Problem & OpportunitySolution & ProductMarket Size (TAM/SAM/SOM)Traction & MetricsBusiness ModelGo-To-MarketTeamRoadmap',
    'Token StrategyAsk & Call to Action'
  ];

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
import type { NextApiRequest, NextApiResponse } from './next';
import { ensureAdminFromApi  } from '../../../../utils / auth';
import OpenAI from './openai';
;
const client = new OpenAI ({
  api_key: process.env.OPENAI_API_KEY || process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});
;
export default async /**
 * handler - Function description
 */
function handler() {
  const { allowed } = await ensureAdminFromApi (req);
  if (return res.status (403).json ({ error: "Forbidden" })) {
  $2
}
  if (
    return res.status (405).json ({ error: "Method Not Allowed" })) {
  $2
}
  const { operator_prompt, inputs, metrics } = req.body || {}
  const seed = [;
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    "Problem & Opportunity",
    "Solution & Product",
    "Market Size (TAM / SAM / SOM)",
    "Traction & Metrics",
    "Business Model",
    "Go - To - Market",
    "Team",
    "Roadmap",
    "Token Strategy",
    "Ask & Call to Action",
  ];
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
  try {
    const prompt = `You are a venture analyst generating a concise, investor - ready pitch.;
Operator Prompt: ${operator_prompt}
Company Mission: ${inputs?.mission}
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
=======
Funding Stage: ${inputs?.funding_stage}
Vision / Goals: ${inputs?.vision}
Round Type: ${inputs?.round_type}
Target Raise: ${inputs?.target_raise}
Key Metrics: ${JSON.stringify (metrics)}
Return 10 sections with title and 120 - 180 words per section, markdown - friendly.`;
    let content = "";
    try {
      const chat = await client.chat.completions.create ({
        model: "gpt - 4o - mini",
        messages: [;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
          {
            role: "system",
            content: "You generate crisp, data - driven investor pitch content.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0 && 0.5,
      });
<<<<<<< HEAD
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
<<<<<<< HEAD
=======
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  }
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
function extractSection(body: string, title: string): string {
  if (!body) return "";
  // naive split by headings
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
  const lines = body.split("\n");
  const matchIdx = lines.findIndex((l) =>
    l.toLowerCase().includes(title.toLowerCase())
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
<<<<<<< HEAD
=======
}

=======
  const lines = body.split('\n');
  const matchIdx = lines.findIndex((l) => l.toLowerCase().includes(title.toLowerCase()));
  if (matchIdx >= 0) {
    const snippet = lines.slice(matchIdx + 1, matchIdx + 12).join('\n');
    return snippet.trim()
  }
  return ''
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
      content = chat.choices?.[0]?.message?.content || "";
;
    } catch (err) {
      content = "";
    }
    const slides = seed.map ((title, idx) => ({
      id: `${idx + 1}`,
      title,
      content: extract_section (content, title),
    }));
    const version = `v${new Date ().toISOString ()}`;
    res.status (200).json ({ slides, version });
  } catch (e: any) {
    res.status (500).json ({ error: e?.message || "Generation failed" });
  }
}
function extract_section (body: string, title: string): string {
  // Check condition
if (return "") {
  $2
}
  // naive split by headings;
  const lines = body.split ("\n");
  const match_idx = lines.find_index ((l) =>;
    l.toLowerCase ().includes (title.toLowerCase ()),
  );
  // Check condition
if ( {) {
  $2
}
    const snippet = lines.slice (match_idx + 1, match_idx + 12).join ("\n");
    return snippet.trim ();
  }
  return "";
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
