// Generate pitch API endpoint
export default function handler(req: any, res: any) {
  try {
    const prompt = `You are a venture analyst generating a concise, investor-ready pitch. Operator Prompt: ${req.body?.operatorPrompt || ''}Company Mission: ${req.body?.inputs?.mission || ''}Funding Stage: ${req.body?.inputs?.fundingStage || ''}Vision/Goals: ${req.body?.inputs?.vision || ''}Round Type: ${req.body?.inputs?.roundType || ''}Target Raise: ${req.body?.inputs?.targetRaise || ''}Key Metrics: ${JSON.stringify(req.body?.metrics || {})}Return 10 sections with title and 120-180 words per section, markdown-friendly.`;
    
    res.status(200).json({ prompt });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}