import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json'
    const raw = fs.readFileSync(REQUESTS_PATH, 'utf-8'
  summary: description.slice (0, 280), type: any
    if (!process.env.OPENAI_API_KEY) return { summary: description.slice(0, 280), type: any
    const { OpenAI } = await import('openai'