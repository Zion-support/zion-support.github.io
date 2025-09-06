import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
  tone?: any
  if (req.method != 'POST'
    return res.status(405).json({ error: any
    return res.status(500).json({ error: any
    return res.status(400).json({ error:'Missing required fields:title, keyFeatures, targetAudience'
    const toneInstruction = tone ? `Write in a ${tone} tone.` :'Write in a professional, clear tone.'
 ${keyFeatures.join('\n- '
additionalNotes ? `Additional Notes:${additionalNotes}` : any
    let description = ''
    if (output && output.type = = 'message'
        .filter(c) => c.type = = 'output_text'
        .join('\n'
      description = (response as any).content?.[0]?.text || 'Unable to generate description at this time.'
    console.error('OpenAI generation error: any
    return res.status(500).json({ error: any
  keyFeatures.join ('\n- '
 : any