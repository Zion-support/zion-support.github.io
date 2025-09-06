import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type AnalyzeRequestBody = $2;
  context?: Record<string, unknown>
},

export type AnalyzeResponse = $2;
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AnalyzeResponse | { error: string}>
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { operatorPrompt, context } = (req.body || {}) as AnalyzeRequestBody,
  if (!operatorPrompt || typeof operatorPrompt !== 'string') {
    return res.status(400).json({ error: 'operatorPrompt is required' })
  }

  const apiKey = $2;
  if (!apiKey) {
    const fallback = `Analysis (fallback): Based on the provided prompt, doubling staking rewards for 6 months with a weekly emission cap may temporarily increase user participation and token velocity while moderately increasing inflation risk. Monitor treasury inflows from taxes/burns to offset emissions and adjust the cap if net inflation exceeds target bands.`,
    return res.status(200).json({ analysis: fallback})
  }

  try {
    const client = new OpenAI($2);
    const system =
      'You analyze ZION$ token economics changes. Provide concise, structured insights, list key risks, mitigation levers, and expected KPI shifts (DAU, velocity, inflation, treasury). Keep under 180 words.',

    const user = $2;
      context ? `Context: ${JSON.stringify(context)}` : undefined]
      .filter(Boolean)
      .join($2);
    const completion = await client.chat.completions.create($2);
    const analysis = $2;
    return res.status(200).json({ analysis })
  } catch (error: any) {
    console.error($2);
    return res.status(500).json({ error: 'Failed to generate analysis' })
  }
}