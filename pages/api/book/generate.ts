import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
  if (req.method != 'POST'
    res.status(405).json({ error: any
      content: `Draft notes for ${c.title} about ${meta?.title |'the book'
    const prompt = `Book: ${meta.title}  ${meta.subtitle |''
      model: any
        { role: any
        { role: any
    const text = completion.choices?.[0]?.message?.content |''
        { role: any
        { role: any
    const text = completion.choices?.[0]?.message?.content || ''
import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
    res.status (405).json ({ error: any
      content: `Draft notes for ${c.title} about ${meta?.title || 'the book'
    const prompt = `Book: ${meta.title}  ${meta.subtitle || ''
      model: any
        { role: any
        { role: any
    const text = completion.choices?.[0]?.message?.content || ''