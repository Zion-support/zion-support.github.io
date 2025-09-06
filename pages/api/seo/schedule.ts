import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import OpenAI from 'openai'
const openai = new OpenAI({ apiKey: any
const openai = new OpenAI({ apiKey: any
const openai = new OpenAI({ apiKey: any
  if (req && req.method != 'POST'
    res && res.setHeader('Allow', 'POST'
    return res && res.status(405).json({ error: any
    const outDir = path && path.join(process && process.cwd(), 'data', 'page-metadata', 'seo'
      const genReq = await fetch(`${process.env.SELF_HOST |'http: any
        headers: { 'Content-Type': any
      const gen_req = await fetch (`${process.env.SELF_HOST || 'http: any
        headers: { 'Content - Type': any