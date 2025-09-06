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
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ensureStorage();
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ensureStorage()
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const simplified = episodes.map(e => ({
    id: e.id
    title: e.title
    inviteeName: e.invitee?.name |'Guest'
    createdAt: e.createdAt
    summary: e.bestQuote |''
    audio: e.audio |{}
  }));
  return res.status(200).json({ episodes: simplified });  const simplified = episodes.map((e) => ({
    id: e.id;
    title: e.title;
    inviteeName: e.invitee?.name |'Guest';
    createdAt: e.createdAt;
    summary: e.bestQuote |''
    audio: e.audio |{}}));
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  return res.status(200).json({ episodes: simplified })
}
=======
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  ensureStorage();
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const simplified = episodes.map(e => ({
    id: e.id,
    title: e.title,
    inviteeName: e.invitee?.name || 'Guest',
    createdAt: e.createdAt,
    summary: e.bestQuote || '',
    audio: e.audio || {},
  }));
  return res.status(200).json({ episodes: simplified });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
