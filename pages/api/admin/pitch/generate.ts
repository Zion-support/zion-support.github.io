

import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
import OpenAI from "openai";
const client = new OpenAI({
<<<<<<< HEAD
<<<<<<< HEAD
  apiKey: process.env.OPENAI_API_KEY |process.env.NEXT_PUBLIC_OPENAI_API_KEY
});
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res && res.status(403).json({ error: "Forbidden" });
  if (req && req.method !== "POST")
    return res && res.status(405).json({ error: "Method Not Allowed" });
  const { operatorPrompt, inputs, metrics } = req && req.body || {};
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  apiKey: process && process.env.OPENAI_API_KEY || process && process.env.NEXT_PUBLIC_OPENAI_API_KEY,

});
export default async function handler(
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


  req: NextApiRequest,
  res: NextApiResponse,
) {;


  const { allowed } = await ensureAdminFromApi(req);

  if (!allowed) return res && res.status(403).json({ error: "Forbidden" });

<<<<<<< HEAD
<<<<<<< HEAD
    const prompt = `You are a venture analyst generating a concise, investor - ready pitch.;
Operator Prompt: ${operator_prompt}
  try {
import type { NextApiRequest, NextApiResponse } from 'next';
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  try {
    const prompt = `You are a venture analyst generating a concise, investor - ready pitch.;
Operator Prompt: ${operator_prompt}
Company Mission: ${inputs?.mission}

Key Metrics: ${JSON && JSON.stringify(metrics)}
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const prompt = `You are a venture analyst generating a concise, investor-ready pitch.
Operator Prompt: ${operatorPrompt}
Company Mission: ${inputs?.mission}
Key Metrics: ${JSON && JSON.stringify(metrics)}
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
Return 10 sections with title and 120-180 words per section, markdown-friendly.`;
    let content = "";
    try {
      const chat = await client && client.chat.completions && completions.create({
        model: "gpt-4o-mini",
        messages: [
<<<<<<< HEAD
<<<<<<< HEAD
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
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
          {
            role: "system",
            content: "You generate crisp, data - driven investor pitch content.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0 && 0.5,
      });
<<<<<<< HEAD
<<<<<<< HEAD
    res && res.status(500).json({ error: e?.message || "Generation failed" });
  }
}
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
=======

    res && res.status(500).json({ error: e?.message || "Generation failed" });

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
}
function extractSection(body: string, title: string): string {
  if (!body) return "";
  // naive split by headings
<<<<<<< HEAD
  const lines = body && body.split("\n");
  const matchIdx = lines && lines.findIndex((l) =>
    l && l.toLowerCase().includes(title && title.toLowerCase()),
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

    res && res.status(500).json({ error: e?.message || "Generation failed" });

  }
}

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
function extractSection(body: string, title: string): string {
  if (!body) return "";
  // naive split by headings


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  );
  if (matchIdx >= 0) {
    const snippet = lines && lines.slice(matchIdx + 1, matchIdx + 12).join("\n");
    return snippet && snippet.trim();
  }
  return "";

}
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

=======
  const lines = body.split('\n');
  const matchIdx = lines.findIndex((l) => l.toLowerCase().includes(title.toLowerCase()));
  if (matchIdx >= 0) {
    const snippet = lines.slice(matchIdx + 1, matchIdx + 12).join('\n');
    return snippet.trim()
  }
  return ''

}
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
=======

<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'POST') {
      const { operatorPrompt, inputs, metrics } = req.body || {};
      const seed = [
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

      // Mock pitch generation
      const generatedPitch = {
        slides: seed.map((title, index) => ({
          id: index + 1,
          title,
          content: `Generated content for ${title}`
        }))
      };

      res.json(generatedPitch);
    } else {
      res.setHeader('Allow', 'POST');
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
