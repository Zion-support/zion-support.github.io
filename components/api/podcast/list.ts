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
=======
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ensureStorage();
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
<<<<<<< HEAD
  const simplified = episodes.map(e => ({
    id: e.id,
    title: e.title,
    inviteeName: e.invitee?.name || 'Guest',
    createdAt: e.createdAt,
    summary: e.bestQuote || '',
    audio: e.audio || {},
  }));
  return res.status(200).json({ episodes: simplified });
=======
  const simplified = episodes.map((e) => ({
    id: e.id, title: e.title,
    inviteeName: e.invitee?.name || 'Guest', createdAt: e.createdAt,
    summary: e.bestQuote || '',
    audio: e.audio || {}}));
  return res.status(200).json({ episodes: simplified })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
