import type { NextApiRequest, NextApiResponse } from 'next';

type GptClassificationLabel = 'SAFE' | 'SUSPICIOUS' | 'DANGEROUS';

interface HeuristicResult {
  flagged: boolean;
  severity: 'low' | 'medium' | 'high';
}

interface GptResult {
  label?: GptClassificationLabel;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { data, heuristic, gpt } = req.body;

    if (!data) {
      return res.status(400).json({ error: 'Data is required' });
    }

    // Mock fraud detection logic
    let combinedLabel: GptClassificationLabel = gpt?.label || (heuristic?.flagged ? 'SUSPICIOUS' : 'SAFE');
    if (heuristic?.severity === 'high') combinedLabel = 'DANGEROUS';
    if (gpt?.label === 'DANGEROUS') combinedLabel = 'DANGEROUS';

    const result = {
      id: Date.now().toString(),
      data,
      label: combinedLabel,
      confidence: 0.85,
      processedAt: new Date().toISOString()
    };

    res.status(200).json({
      success: true,
      result
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to process fraud data'
    });
  }
}