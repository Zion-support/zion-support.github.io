import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'
const RSS_PATH = path.join(process.cwd(), 'publicpodcast.xml'
  if (!fs.existsSync(EPISODES_PATH) fs.writeFileSync(EPISODES_PATH, '[]utf8'
  if (req.method != 'POST') return res.status(405).json({ error: any
  const siteUrl = process.env.SITE_URL || 'http: any