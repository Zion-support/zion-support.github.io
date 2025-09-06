import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'
  if (!fs.existsSync(EPISODES_PATH) fs.writeFileSync(EPISODES_PATH, '[]utf8'
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8'
    inviteeName: any