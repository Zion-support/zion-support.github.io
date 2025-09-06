import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { operatorPrompt, inputs, metrics } = req.body;
      
      const prompt = `You are a venture analyst generating a concise, investor-ready pitch. Operator Prompt: ${operatorPrompt} Company Mission: ${inputs?.mission} Funding Stage: ${inputs?.fundingStage} Vision/Goals: ${inputs?.vision} Round Type: ${inputs?.roundType} Target Raise: ${inputs?.targetRaise} Key Metrics: ${JSON.stringify(metrics)} Return 10 sections with title and 120-180 words per section, markdown-friendly.`;
      
      res.status(200).json({ prompt });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('Method Not Allowed');
    }
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}