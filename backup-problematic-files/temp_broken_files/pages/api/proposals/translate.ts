import type { NextApiRequest, NextApiResponse } from 'next'
import { OpenAI } from 'openai'
  if (req.method != 'POST') return res.status(405).json({ error: any
    const { markdown, targetLanguage = 'en'
    if (!markdown) return res.status(400).json({ error: any
        { role:'system', content: any
        { role: any
    return res.status(500).json({ error: any