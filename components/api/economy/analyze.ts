
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import OpenAI from 'openai';
export type AnalyzeRequestBody = {
  operatorPrompt: string,
  context?: Record<string, unknown>
},

export type AnalyzeResponse = {
  analysis: string
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
},

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<AnalyzeResponse | { error: string }>
) {
  if (req.method !== 'POST') {

=======
    return res.status(405).json({ error: 'Method not allowed' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const { operatorPrompt, context } = (req.body || {}) as AnalyzeRequestBody,
  if (!operatorPrompt || typeof operatorPrompt !== 'string') {

=======
    return res.status(400).json({ error: 'operatorPrompt is required' })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const apiKey = process.env.OPENAI_API_KEY,
  if (!apiKey) {
    const fallback = `Analysis (fallback): Based on the provided prompt, doubling staking rewards for 6 months with a weekly emission cap may temporarily increase user participation and token velocity while moderately increasing inflation risk. Monitor treasury inflows from taxes/burns to offset emissions and adjust the cap if net inflation exceeds target bands.`,

=======
    return res.status(200).json({ analysis: fallback })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  try {
    const client = new OpenAI({ apiKey }),
    const system =
      'You analyze ZION$ token economics changes. Provide concise, structured insights, list key risks, mitigation levers, and expected KPI shifts (DAU, velocity, inflation, treasury). Keep under 180 words.',

    const user = [

=======
      `Operator Prompt: ${operatorPrompt}`,
      context ? `Context: ${JSON.stringify(context)}` : undefined]
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      .filter(Boolean)
      .join('\n'),

    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [


    const analysis = completion.choices?.[0]?.message?.content?.trim() || 'No analysis generated.',
    return res.status(200).json({ analysis })
  } catch (error: any) {
    console.error('Analyze API error', error?.message || error),

=======
    return res.status(500).json({ error: 'Failed to generate analysis' })
  },
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
