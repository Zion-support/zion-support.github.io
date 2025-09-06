import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

const EPISODES_PATH = path.join(
  process.cwd(),
  'data',
  'podcast',
  'episodes.json'
);
<<<<<<< HEAD
function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ensureStorage();
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
=======
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
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const simplified = episodes.map(e => ({
    id: e.id,
    title: e.title,
    inviteeName: e.invitee?.name || 'Guest',
    createdAt: e.createdAt,
    summary: e.bestQuote || '',
    audio: e.audio || {},
  }));
<<<<<<< HEAD
  return res.status(200).json({ episodes: simplified });
=======
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
=======
  const simplified = episodes.map((e) => ({
    id: e.id;
    title: e.title;
    inviteeName: e.invitee?.name || 'Guest';
    createdAt: e.createdAt;
    summary: e.bestQuote || '';
    audio: e.audio || {}}));
  return res.status(200).json({ episodes: simplified })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
