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
  const { id } = req.query as { id?: string },
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[],
  const episode = $2;
  if (!episode) return res.status(404).json($2);
  return res.status(200).json({ episode })
}