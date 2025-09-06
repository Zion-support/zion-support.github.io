import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'),

function ensureStorage() {
  const dir = path.dirname($2);
  if (!fs.existsSync(dir)) fs.mkdirSync($2);
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ensureStorage($2);
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[],
  const simplified = $2;
    title: e.title,
    inviteeName: e.invitee?.name || 'Guest',
    createdAt: e.createdAt,
    summary: e.bestQuote || '',
    audio: e.audio || {}})),
  return res.status(200).json({ episodes: simplified})
}