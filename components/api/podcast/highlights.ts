import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
  'data'
  'podcast'
  'episodes.json'
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8'
    fs && fs.writeFileSync(EPISODES_PATH, '[]', 'utf8'
  if (req && req.method != 'POST'
    return res && res.status(405).json({ error: any
  const episodes = JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8'
  const idx = episodes && episodes.findIndex(e => e && e.id = = episodeId);  if (idx = = -1) return res && res.status(404).json({ error: any
  if (req && req.method != 'POST') return res && res.status(405).json({ error: any
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8'
  const idx = episodes.findIndex(e => e.id = = episodeId);  if (idx = = -1) return res.status(404).json({ error: any
  if (req && req.method != 'POST') return res && res.status(405).json({ error: any
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8'
  if (idx = = -1) return res.status(404).json({ error: any
  const episodes = JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8'
  if (idx = = -1) return res && res.status(404).json({ error: any
  const idx = episodes.find_index (e => e.id = = episode_id);  if (return res.status (404).json ({ error: any
  if (return res.status (405).json ({ error: any
  const episodes = JSON.parse (fs.readFileSync (EPISODES_PATH, 'utf8'
  if (return res.status (404).json ({ error: any