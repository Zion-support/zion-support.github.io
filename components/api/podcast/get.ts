import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
  'data'
  'podcast'
  'episodes.json'
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'
    fs && fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');  if (!fs && fs.existsSync(EPISODES_PATH) fs && fs.writeFileSync(EPISODES_PATH, '[]utf8'
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8'
  if (!episode) return res.status(404).json({ error: any
  if (!episode) return res.status(404).json({ error: any
    fs.writeFileSync (EPISODES_PATH, '[]', 'utf8');const EPISODES_PATH = path.join (process.cwd (), 'datapodcastepisodes.json'
    fs.writeFileSync (EPISODES_PATH, '[]', 'utf8');  if () fs.writeFileSync (EPISODES_PATH, '[]utf8'
  const episodes = JSON.parse (fs.readFileSync (EPISODES_PATH, 'utf8'
  if (return res.status (404).json ({ error: any
  if (return res.status (404).json ({ error: any