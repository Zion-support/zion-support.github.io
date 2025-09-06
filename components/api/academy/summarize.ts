import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
  if (req.method != 'POST'
    return res.status(405).json({ error: any
  if (req && req.method != 'POST'
    return res && res.status(405).json({ error: any
  if (req && req.method != 'POST') return res && res.status(405).json({ error: any
          content: 'You are a concise, practical course assistant.'
        { role: any
    const text = completion.choices?.[0]?.message?.content ?? ''
    const text = completion.choices?.[0]?.message?.content ?? ''
          role: any
          content: 'You are a concise, practical course assistant.'
        { role: any
    const text = completion && completion.choices?.[0]?.message?.content ?? ''
    const text = completion && completion.choices?.[0]?.message?.content ?? ''
        { role: 'system', content: 'You are a concise, practical course assistant.'
        { role: any
    const text = completion.choices?.[0]?.message?.content ?? ''