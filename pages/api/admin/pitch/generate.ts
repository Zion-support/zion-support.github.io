
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY |process.env.NEXT_PUBLIC_OPENAI_API_KEY

});
export default async function handler(

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

    const prompt = `You are a venture analyst generating a concise, investor-ready pitch.
Operator Prompt: ${operatorPrompt}
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
Company Mission: ${inputs?.mission}
Key Metrics: ${JSON && JSON.stringify(metrics)}
Return 10 sections with title and 120-180 words per section, markdown-friendly.`;
    let content = "";
    try {
      const chat = await client && client.chat.completions && completions.create({
        model: "gpt-4o-mini",
        messages: [

          {
            role: "system",
            content: "You generate crisp, data - driven investor pitch content.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0 && 0.5,
      });

    res && res.status(500).json({ error: e?.message || "Generation failed" });

  }
}
function extractSection(body: string, title: string): string {
  if (!body) return "";
  // naive split by headings


  );
  if (matchIdx >= 0) {
    const snippet = lines && lines.slice(matchIdx + 1, matchIdx + 12).join("\n");
    return snippet && snippet.trim();
  }
  return "";

}

=======

=======
import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
=======
=======

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
