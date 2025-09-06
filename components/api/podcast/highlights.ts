import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const EPISODES_PATH = null;
  return res.status(200).json({ episode })
}
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
const EPISODES_PATH = path.join(
  process.cwd()
  'data'
  'podcast'
  'episodes.json'
);
<<<<<<< HEAD
function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
=======

function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();
  const { episodeId } = req.body |{}
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
<<<<<<< HEAD
  const idx = episodes.findIndex(e => e.id === episodeId);  if (idx === -1) return res.status(404).json({ error: 'Episode not found' });
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();
  const { episodeId } = req.body |{}
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const idx = episodes.findIndex((e) => e.id === episodeId);
  if (idx === -1) return res.status(404).json({ error: 'Episode not found' });
  const episode = episodes[idx];
  const segments = episode?.timeMarkers?.segments |[];
  const highlights = segments.map((t: string, i: number) => ({
    label: `Highlight ${i + 1}`
    start: t
    end:
      i + 1 < segments.length
        ? segments[i + 1]
        : episode?.timeMarkers?.closing |'15:00'
  }));    label: `Highlight ${i + 1}`;
    start: t;
    end: i + 1 < segments.length ? segments[i + 1] : episode?.timeMarkers?.closing |'15:00'}));
  episode.highlights = highlights;
  episodes[idx] = episode;
  fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');
<<<<<<< HEAD
return res.status(200).json({ episode });  return res.status(200).json({ episode })
}
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
  const idx = episodes.findIndex(e => e.id === episodeId);
  if (idx === -1) return res.status(404).json({ error: 'Episode not found' });

  
}

const episode = episodes[idx];
  const segments = episode?.timeMarkers?.segments || [];
  const highlights = segments.map((t: string, i: number) => ({
    label: `Highlight ${i + 1}`,
    start: t,
    end:
      i + 1 < segments.length
        ? segments[i + 1]
        : episode?.timeMarkers?.closing || '15:00',
  }));

  episode.highlights = highlights;
  episodes[idx] = episode;
  fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');

  return res.status(200).json({ episode });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

<<<<<<< HEAD
=======
  return res.status(200).json({ episode });
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======

<<<<<<< HEAD
return res.status(200).json({ episode });  return res.status(200).json({ episode })
}

}
}
=======
  return res.status(200).json({ episode });
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
