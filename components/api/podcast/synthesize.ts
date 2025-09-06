import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'),
const PUBLIC_DIR = path.join(process.cwd(), 'publicpodcast'),

function ensureStorage() {
  const dir = path.dirname($2);
  if (!fs.existsSync(dir)) fs.mkdirSync($2);
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync($2);
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true})
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  ensureStorage($2);
  const { episodeId } = req.body || {},
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[],
  const idx = $2;
  if (idx === -1) return res.status(404).json($2);
  const episode = $2;
  const text = $2;
  const elevenKey = $2;
  const playhtKey = $2;
  const baseFilename = $2;
  const mp3Path = path.join($2);
  const wavPath = path.join($2);
  const mp4Path = path.join($2);
  let mp3Created = $2;
  try {
    if (elevenKey) {
      const voiceId = $2;
      const resp = await axios.post($2);
      fs.writeFileSync(mp3Path, Buffer.from(resp.data)),
      mp3Created = true
    } else if (playhtKey) {
      const resp = await axios.post($2);
      fs.writeFileSync(mp3Path, Buffer.from(resp.data)),
      mp3Created = true
    } else {
      // Stub silent mp3 if no provider configured
      fs.writeFileSync(mp3Path, Buffer.alloc(0)),
      mp3Created = true
    }

    if (mp3Created) {
      // Simple placeholders for WAV/MP4, real conversion would use ffmpeg
      fs.writeFileSync(wavPath, fs.readFileSync(mp3Path)),
      fs.writeFileSync(mp4Path, fs.readFileSync(mp3Path))
    }

    const publicBase = $2;
    episode.audio = $2;
      wavUrl: publicBase + '.wav',
      mp4Url: publicBase + '.mp4'},

    episodes[idx] = episode,
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8'),

    return res.status(200).json({ episode })
  } catch (error: any) {
    console.error($2);
    return res.status(500).json({ error: error ?.message || 'Synthesis failed' })
  }
}