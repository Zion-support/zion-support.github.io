<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'),

function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH),
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }),
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  ensureStorage(),
  const { episodeId } = req.body || {},
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[],
  const idx = episodes.findIndex((e) => e.id === episodeId),
  if (idx === -1) return res.status(404).json({ error: 'Episode not found' }),

  const episode = episodes[idx],
  const segments = episode?.timeMarkers?.segments || [],
  const highlights = segments.map((t: string, i: number) => ({
    label: `Highlight ${i + 1}`,
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _EPISODES_PATH = path.join(process.cwd(), 'data', 'podcast', 'episodes.json');

function ensureStorage() {_const _dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, _{ recursive: true});
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  ensureStorage();
  const {_episodeId} = req.body || {};
  const _episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const _idx = episodes.findIndex(_(e) => e.id === episodeId);
  if (idx === -1) return res.status(404).json({_error: 'Episode not found'});

  const _episode = episodes[idx];
  const _segments = episode?.timeMarkers?.segments || [];
  const _highlights = segments.map(_(t: string, _i: number) => ({_label: `Highlight ${i + 1}`,
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    start: t,
    end: i + 1 < segments.length ? segments[i + 1] : episode?.timeMarkers?.closing || '15:00'})),

  episode.highlights = highlights,
  episodes[idx] = episode,
  fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8'),

<<<<<<< HEAD
  return res.status(200).json({ episode })
=======
  return res.status(200).json({_episode});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}