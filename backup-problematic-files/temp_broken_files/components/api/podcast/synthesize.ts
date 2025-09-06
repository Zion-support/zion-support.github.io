import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
import axios from 'axios'
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'
const PUBLIC_DIR = path.join(process.cwd(), 'publicpodcast'
  if (!fs.existsSync(EPISODES_PATH) fs.writeFileSync(EPISODES_PATH, '[]utf8'
  if (req.method != 'POST') return res.status(405).json({ error: any
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8'
  if (idx = = -1) return res.status(404).json({ error: any
      const voiceId = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM'
        { text, model_id: any
        { responseType: 'arraybuffer', headers: { 'xi-api-key': elevenKey, 'Content-Type': any
        { responseType: 'arraybuffer', headers: { Authorization: `Bearer ${playhtKey}`, 'Content-Type': any
    const publicBase = '/podcast/