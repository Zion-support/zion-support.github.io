
import type { NextApiRequest, NextApiResponse } from "next";
import { ensureAdminFromApi } from "../../../../utils/auth";
import OpenAI from "openai";
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY |process.env.NEXT_PUBLIC_OPENAI_API_KEY
});
export default async function handler(

  const { allowed } = await ensureAdminFromApi(req);
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {

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

