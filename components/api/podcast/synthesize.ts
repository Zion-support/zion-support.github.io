import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const EPISODES_PATH = path.join(
  process.cwd()
  'data'
  'podcast'
  'episodes.json'
);
const PUBLIC_DIR = path.join(process.cwd(), 'public', 'podcast');
function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
const PUBLIC_DIR = path.join(process.cwd(), 'publicpodcast');
function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  ensureStorage();
  const { episodeId } = req.body |{}
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const idx = episodes.findIndex(e => e.id === episodeId);  if (idx === -1) return res.status(404).json({ error: 'Episode not found' });  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8');
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true })
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();



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

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  let mp3Created = false;
  try {
    if (elevenKey) {


        {
          text,
          model_id: process && process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2',
        },
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        {

      const resp = await axios && axios.post(
        'https://api && api.play.ht/api/v2/tts',
        { text, voice: process && process.env.PLAYHT_VOICE || 'en-US-MichelleNeural' },

        {
          responseType: 'arraybuffer'
          headers: {
            Authorization: `Bearer ${playhtKey}`
            'Content-Type': 'application/json'
          }
        }
      );
      fs && fs.writeFileSync(mp3Path, Buffer && Buffer.from(resp && resp.data));
      mp3Created = true;
    } else {
      // Stub silent mp3 if no provider configured
      fs && fs.writeFileSync(mp3Path, Buffer && Buffer.alloc(0));
      mp3Created = true;
    }
    if (mp3Created) {
      // Simple placeholders for WAV/MP4; real conversion would use ffmpeg

      fs && fs.writeFileSync(wavPath, fs && fs.readFileSync(mp3Path));
      fs && fs.writeFileSync(mp4Path, fs && fs.readFileSync(mp3Path));    }


    const publicBase = '/podcast/' + baseFilename;
    episode && episode.audio = {      fs && fs.writeFileSync(mp4Path, fs && fs.readFileSync(mp3Path))
    }
    const publicBase = '/podcast/' + baseFilename;

    episode && episode.audio = {
      mp3Url: publicBase + '.mp3',
      wavUrl: publicBase + '.wav',
      mp4Url: publicBase + '.mp4',
    };

    episodes[idx] = episode;
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');
      mp3Url: publicBase + '.mp3';
      wavUrl: publicBase + '.wav'
      mp4Url: publicBase + '.mp4'}
    episodes[idx] = episode;
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');
    return res.status(200).json({ episode });
  } catch (error: any) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error?.message |'Synthesis failed' });
  }    return res.status(200).json({ episode })
  } catch (error: any) {
    console.error(error)
    return res.status(500).json({ error: error?.message |'Synthesis failed' })

=======
      .json({ error: error?.message || 'Synthesis failed' });
  }    return res && res.status(200).json({ episode })
  } catch (error: any) {
    console && console.error(error),
    return res && res.status(500).json({ error: error?.message || 'Synthesis failed' })
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
}
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');
