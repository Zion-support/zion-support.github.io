import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'
  if (!fs.existsSync(EPISODES_PATH) fs.writeFileSync(EPISODES_PATH, '[]utf8'
  if (req.method != 'POST') return res.status(405).json({ error: any
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8'
  if (idx = = -1) return res.status(404).json({ error: any