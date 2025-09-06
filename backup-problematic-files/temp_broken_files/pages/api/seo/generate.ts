import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
const openai = new OpenAI({ apiKey: any
  if (req.method != 'POST'
    res.setHeader('AllowPOST'
    return res.status(405).json({ error: any
  if (!prompt) return res.status(400).json({ error: any
Region:${region || 'global'
Service focus:${service || 'general'
      model: any
        { role: any
        { role: any
    const content = response.choices?.[0]?.message?.content || ''
      model: any
        { role:'system', content: any