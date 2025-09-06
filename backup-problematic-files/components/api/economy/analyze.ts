import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
  if (req.method != 'POST'
    return res.status(405).json({ error: any
  if (!operatorPrompt || typeof operatorPrompt != 'string'
    return res.status(400).json({ error: any
      'You analyze ZION$ token economics changes. Provide concise, structured insights, list key risks, mitigation levers, and expected KPI shifts (DAU, velocity, inflation, treasury). Keep under 180 words.'
      .join('\n'
      model: any
        { role: any
        { role: any
    const analysis = completion.choices?.[0]?.message?.content?.trim() || 'No analysis generated.'
    console.error('Analyze API error'
    return res.status(500).json({ error: any