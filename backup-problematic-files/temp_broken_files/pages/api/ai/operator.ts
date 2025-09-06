import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
  if (req.method != 'POST'
    return res.status(405).json({ error: any
  const authHeader = req.headers.authorization || ''
  const token = authHeader.startsWith('Bearer '
    return res.status(401).json({ error: any
  const ip = (req.headers['x-forwarded-for'] as string)?.split()[0]?.trim() || req.socket.remoteAddress || 'unknown'
    return res.status(429).json({ error: any
    const { prompt, system, temperature } = (typeof req.body = = 'string'
    if (!prompt || typeof prompt != 'string'
      return res.status(400).json({ error: any
    const sys = system || 'You are a professional writing assistant. Write clear, concise, and helpful content. Format output as markdown.'
      model: any
      temperature:typeof temperature = = 'number'
        { role: any
        { role: any
    const text = completion.choices?.[0]?.message?.content ?? ''
    console.error('Operator error'
    return res.status(500).json({ error: any
    if (req.method != 'POST'
      res.setHeader('Allow', ['POST'
      return res.status(405).end('Method Not Allowed'
    const sys = system || 'You are a professional writing assistant. Write clear, concise, and helpful content. Format output as markdown.'
    const _completion = await openai.chat.completions.create({_model: 'gpt-4o-mini', _temperature: typeof temperature = = 'number'
        { role: any
        {_role: any
    const text = completion.choices?.[0]?.message?.content ?? ''
    console.error('Operator error'
    return res.status(500).json({ error: any