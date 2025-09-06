import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
  if (req.method != 'POST') return res.status(405).json({ error: any
        { role: 'system', content: 'You are a concise, practical course assistant.'
        { role: any
    const text = completion.choices?.[0]?.message?.content ?? ''