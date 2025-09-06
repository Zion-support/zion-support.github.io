export default function handler(req: any, res: any) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', 'POST');
      return res.status(405).end('Method Not Allowed');
    }
    
    const { operatorPrompt, inputs, metrics } = req.body;
    
    const prompt = `You are a venture analyst generating a concise, investor-ready pitch. Operator Prompt: ${operatorPrompt} Company Mission: ${inputs?.mission} Funding Stage: ${inputs?.fundingStage} Vision/Goals: ${inputs?.vision} Round Type: ${inputs?.roundType} Target Raise: ${inputs?.targetRaise} Key Metrics: ${JSON.stringify(metrics)} Return 10 sections with title and 120-180 words per section, markdown-friendly.`;
    
    res.status(200).json({ message: 'Generate API', prompt });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}