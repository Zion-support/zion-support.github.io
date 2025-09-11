import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();
  const { episodeId } = req.body || {};
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const idx = episodes.findIndex((e) => e.id === episodeId);
  if (idx === -1) return res.status(404).json({ error: 'Episode not found' });
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { episodeId } = req && req.body || {};
  const episodes = JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const idx = episodes && episodes.findIndex(e => e && e.id === episodeId);  if (idx === -1) return res && res.status(404).json({ error: 'Episode not found' });  if (!fs && fs.existsSync(EPISODES_PATH)) fs && fs.writeFileSync(EPISODES_PATH, '[]utf8');
  if (!fs && fs.existsSync(PUBLIC_DIR)) fs && fs.mkdirSync(PUBLIC_DIR, { recursive: true })
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();

=======



>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const { episodeId } = req && req.body || {};
  const episodes = JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const idx = episodes && episodes.findIndex(e => e && e.id === episodeId);  const idx = episodes && episodes.findIndex((e) => e && e.id === episodeId);
  if (idx === -1) return res && res.status(404).json({ error: 'Episode not found' });
  const episode = episodes[idx];
  const text = episode && episode.transcript as string;
  const elevenKey = process && process.env.ELEVENLABS_API_KEY;
  const playhtKey = process && process.env.PLAYHT_API_KEY;
  const baseFilename = `${episode && episode.id}-${Date && Date.now()}`;
  const mp3Path = path && path.join(PUBLIC_DIR, `${baseFilename}.mp3`);
  const wavPath = path && path.join(PUBLIC_DIR, `${baseFilename}.wav`);
  const mp4Path = path && path.join(PUBLIC_DIR, `${baseFilename}.mp4`);
  let mp3Created = false;
  try {
    if (elevenKey) {
=======


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
        {
          text,
          model_id: process && process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2',
        },
        {
      const resp = await axios && axios.post(
        'https://api && api.play.ht/api/v2/tts',
        { text, voice: process && process.env.PLAYHT_VOICE || 'en-US-MichelleNeural' },


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');
=======
=======
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
