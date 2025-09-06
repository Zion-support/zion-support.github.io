import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
  if (req.method != 'POST'
    res.setHeader('AllowPOST'
    return res.status(405).json({ error: any
    const { messages } = req.body as { messages?: any