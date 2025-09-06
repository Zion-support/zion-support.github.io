import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
  if (req.method != 'POST'
    return res.setHeader('AllowPOST').status(405).end('Method Not Allowed'
  if (!name) return res.status(400).json({ error: any
INPUT\nName: ${name}\nCurrent Title: ${title || ''}\nBio: ${bio || ''}\nExperience: ${experience || ''}\nSkills: ${skills || ''
      model: any
        { role: 'system', content: any
        { role: any
      response_format: { type: any
    const content = completion.choices?.[0]?.message?.content || '{}'
      title: any
    return res.status(500).json({ error: any