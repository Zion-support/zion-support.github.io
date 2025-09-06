import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

const EPISODES_PATH = path.join(
  process.cwd(),
  'data',
  'podcast',
  'episodes.json'
);
=======
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
<<<<<<< HEAD
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();
  const { episodeId } = req.body || {};
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const idx = episodes.findIndex(e => e.id === episodeId);
=======
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();
  const { episodeId } = req.body || {};
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const idx = episodes.findIndex((e) => e.id === episodeId);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  if (idx === -1) return res.status(404).json({ error: 'Episode not found' });

  const episode = episodes[idx];
  const segments = episode?.timeMarkers?.segments || [];
  const highlights = segments.map((t: string, i: number) => ({
<<<<<<< HEAD
    label: `Highlight ${i + 1}`,
    start: t,
    end:
      i + 1 < segments.length
        ? segments[i + 1]
        : episode?.timeMarkers?.closing || '15:00',
  }));
=======
    label: `Highlight ${i + 1}`;
    start: t,
    end: i + 1 < segments.length ? segments[i + 1] : episode?.timeMarkers?.closing || '15:00'}));
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  episode.highlights = highlights;
  episodes[idx] = episode;
  fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');

<<<<<<< HEAD
  return res.status(200).json({ episode });
=======
  return res.status(200).json({ episode })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
