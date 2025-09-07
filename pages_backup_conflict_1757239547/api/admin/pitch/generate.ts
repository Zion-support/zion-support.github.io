const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY || 'mock-key'
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { allowed } = await ensureAdminFromApi(req);
  if (!allowed) return res.status(403).json({ error: 'Forbidden' });
  
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });
  
  try {
    const { prompt } = req.body || {};
    if (!prompt) return res.status(400).json({ error: 'Prompt required' });
    
    const response = await client.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 500
    });
    
    const content = response.choices[0]?.message?.content || '';
    return res.status(200).json({ content });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to generate content' });
  }
}
import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
import OpenAI from "openai";
  apiKey: process.env.OPENAI_API_KEY |process.env.NEXT_PUBLIC_OPENAI_API_KEY
});
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (!allowed) return res.status(403).json({ error: "Forbidden" });
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method Not Allowed" });
  const { operatorPrompt, inputs, metrics } = req.body |{}
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
  try {

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
    let content = "";
    try {
      const chat = await client.chat.completions.create({
        model: "gpt-4o-mini"
        messages: [
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
    }));
    const version = `v${new Date().toISOString()}`;
    res.status(200).json({ slides, version });
  } catch (e: any) {
    res.status(500).json({ error: e?.message |"Generation failed" });
  }
}
function extractSection(body: string, title: string): string {
  if (!body) return "";
  // naive split by headings
  const lines = body.split("\n");
  const matchIdx = lines.findIndex((l) =>
    l.toLowerCase().includes(title.toLowerCase())
  );
  if (matchIdx >= 0) {
    const snippet = lines.slice(matchIdx + 1, matchIdx + 12).join("\n");
    return snippet.trim();
  }
  return "";
}
    const isAdmin = req.headers['x-admin'] === 'true';
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    if (req.method === 'POST') {
      const { operatorPrompt, inputs, metrics } = req.body || {};
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