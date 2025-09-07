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
  if (req.method !== 'POST') return res.status(405).json($2);
  ensureStorage($2);
  const { episodeId } = req.body || {},
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[],
  const idx = $2;
  if (idx === -1) return res.status(404).json($2);
  const episode = $2;
  const segments = $2;
  const highlights = segments.map((t: string, i: number) => ({
    label: `Highlight ${i + 1}`,
    start: t,
    end: i + 1 < segments.length ? segments[i + 1] : episode?.timeMarkers?.closing || '15:00'})),

  episode.highlights = $2;
  episodes[idx] = episode,
  fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8'),

  return res.status(200).json({ episode })
}