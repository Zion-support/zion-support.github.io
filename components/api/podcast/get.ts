import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
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
=======
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
<<<<<<< HEAD
<<<<<<< HEAD
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
=======
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ensureStorage();
  const { id } = req.query as { id?: string };
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
<<<<<<< HEAD
<<<<<<< HEAD
  const episode = episodes.find(e => e.id === id);
  if (!episode) return res.status(404).json({ error: 'Not found' });
  return res.status(200).json({ episode });
=======
  const episode = episodes.find((e) => e.id === id);
  if (!episode) return res.status(404).json({ error: 'Not found' });
  return res.status(200).json({ episode })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const episode = episodes.find((e) => e.id === id);
  if (!episode) return res.status(404).json({ error: 'Not found' });
  return res.status(200).json({ episode })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
