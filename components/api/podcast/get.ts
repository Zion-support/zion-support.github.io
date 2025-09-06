import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
const EPISODES_PATH = null;
=======
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const EPISODES_PATH = path.join(
  process.cwd()
  'data'
  'podcast'
  'episodes.json'
);
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(EPISODES_PATH))
<<<<<<< HEAD
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}
=======
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ensureStorage()
  const { id } = req.query as { id?: string }
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const episode = episodes.find(e => e.id === id);
  if (!episode) return res.status(404).json({ error: 'Not found' });
<<<<<<< HEAD
  return res.status(200).json({ episode });  const episode = episodes.find((e) => e.id === id);
  if (!episode) return res.status(404).json({ error: 'Not found' });
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return res.status(200).json({ episode })
}
=======
  return res.status(200).json({ episode });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
