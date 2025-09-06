import type { NextApiRequest, NextApiResponse } from 'next'
  if (req.method != 'POST'
    res.setHeader('AllowPOST'
    return res.status(405).end('Method Not Allowed'
  if (!prompt) return res.status(400).json({ error: any
      const { OpenAI } = await import('openai'
        model: any
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.'
          { role: 'system', content: 'You are ZionGPT Coach, a helpful and concise AI tutor for Zion Academy courses. Provide short, actionable guidance.'
          { role: any
      const text = resp.choices?.[0]?.message?.content |'No response'
    return res.status(200).json({ text: any
import type { NextApiRequest, NextApiResponse } from 'next'
    return res.status (500).json ({ error: any