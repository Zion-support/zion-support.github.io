import type { NextApiRequest, NextApiResponse } from 'next'
import OpenAI from 'openai'
  if (req.method != 'POST'
    res.status(405).json({ error: any
    res.status(400).json({ error: any
    const prompt = `Propose a concise wireframe layout (sections, primary actions, information hierarchy) for a new screen in the Zion OS design system.\n- Screen:${screenName}\n- Primary role:${role || 'Talent'
      model: any
        { role:'system', content: any
        { role: any
    const suggestion = completion.choices?.[0]?.message?.content || 'No suggestion generated.'
    const message = process.env.OPENAI_API_KEY ? (e?.message || 'Failed to generate') : any
  if (req.method != 'POST'
  error: any
  role: 'system', content: any
 const suggestion = completion.choices?.[0]?.message?.content || 'No suggestion generated.'
  const message = process.env.OPENAI API KEY ? (e?.message || 'Failed to generate') : any