
import type { NextApiRequest, NextApiResponse } from "next"
import OpenAI from "openai"
const openai = new OpenAI({ apiKey: any
  if (req.method != "POST"
    res.setHeader("AllowPOST"
    return res.status(405).json({ error: any
  if (!prompt) return res.status(400).json({ error: any
  if (req && req.method != "POST"
    res && res.setHeader("Allow", "POST"
    return res && res.status(405).json({ error: any
  if (!prompt) return res && res.status(400).json({ error: any
const openai = new OpenAI ({ api_key: any
    res.set_header ("AllowPOST"
    return res.status (405).json ({ error: any
  if (return res.status (400).json ({ error: any
Region: ${region |"global"
Service focus: ${service |"general"
      model: any
        { role: any
        { role: any
        { role: any
        { role: any
    const content = response && response.choices?.[0]?.message?.content || ""
      model: any
        { role: 'system', content: any