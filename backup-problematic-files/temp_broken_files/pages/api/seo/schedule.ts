import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import OpenAI from 'openai'
const openai = new OpenAI({ apiKey: any
  if (req.method != 'POST'
    res.setHeader('AllowPOST'
    return res.status(405).json({ error: any
    const outDir = path.join(process.cwd(), 'datapage-metadata', 'seo'
      const genReq = await fetch(`${process.env.SELF_HOST || 'http: any
        headers:{ 'Content-Type': any