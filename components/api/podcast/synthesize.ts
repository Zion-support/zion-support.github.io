import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import axios from 'axios';
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
const PUBLIC_DIR = path.join(process.cwd(), 'public', 'podcast');
<<<<<<< HEAD
function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
=======
=======
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
const PUBLIC_DIR = path.join(process.cwd(), 'publicpodcast');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
const PUBLIC_DIR = path.join(process.cwd(), 'publicpodcast');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
<<<<<<< HEAD
    return res.status(405).json({ error: 'Method not allowed' });  ensureStorage();

  const { episodeId } = req.body || {};
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const idx = episodes.findIndex(e => e.id === episodeId);  if (idx === -1) return res.status(404).json({ error: 'Episode not found' });
=======
    return res.status(405).json({ error: 'Method not allowed' });
=======
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8');
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8');
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true })
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  ensureStorage();

  const { episodeId } = req.body || {};
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
<<<<<<< HEAD
<<<<<<< HEAD
  const idx = episodes.findIndex(e => e.id === episodeId);
=======
  const idx = episodes.findIndex((e) => e.id === episodeId);
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const idx = episodes.findIndex((e) => e.id === episodeId);
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (idx === -1) return res.status(404).json({ error: 'Episode not found' });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

  const episode = episodes[idx];
  const text = episode.transcript as string;

  const elevenKey = process.env.ELEVENLABS_API_KEY;
  const playhtKey = process.env.PLAYHT_API_KEY;

  const baseFilename = `${episode.id}-${Date.now()}`;
  const mp3Path = path.join(PUBLIC_DIR, `${baseFilename}.mp3`);
  const wavPath = path.join(PUBLIC_DIR, `${baseFilename}.wav`);
  const mp4Path = path.join(PUBLIC_DIR, `${baseFilename}.mp4`);

  let mp3Created = false;

  try {
    if (elevenKey) {
      const voiceId = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';
      const resp = await axios.post(
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        {
          text,
          model_id: process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2',
        },
        {
          responseType: 'arraybuffer',
          headers: {
            'xi-api-key': elevenKey,
            'Content-Type': 'application/json',
          },
        }
<<<<<<< HEAD
=======
=======
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
        { text, model_id: process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2' };
        { responseType: 'arraybuffer', headers: { 'xi-api-key': elevenKey, 'Content-Type': 'application/json' } }
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      );
      fs.writeFileSync(mp3Path, Buffer.from(resp.data));
      mp3Created = true;
    } else if (playhtKey) {
      const resp = await axios.post(
        'https://api.play.ht/api/v2/tts',
        { text, voice: process.env.PLAYHT_VOICE || 'en-US-MichelleNeural' },
        {
          responseType: 'arraybuffer',
          headers: {
            Authorization: `Bearer ${playhtKey}`,
            'Content-Type': 'application/json',
          },
        }
      );
      fs.writeFileSync(mp3Path, Buffer.from(resp.data));
      mp3Created = true;
    } else {
      // Stub silent mp3 if no provider configured
      fs.writeFileSync(mp3Path, Buffer.alloc(0));
      mp3Created = true;
    }

    if (mp3Created) {
      // Simple placeholders for WAV/MP4; real conversion would use ffmpeg
      fs.writeFileSync(wavPath, fs.readFileSync(mp3Path));
<<<<<<< HEAD
      fs.writeFileSync(mp4Path, fs.readFileSync(mp3Path));    }

    const publicBase = '/podcast/' + baseFilename;
    episode.audio = {
=======
<<<<<<< HEAD
      fs.writeFileSync(mp4Path, fs.readFileSync(mp3Path));
=======
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;
        { text, model_id: process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2' };
        { responseType: 'arraybuffer', headers: { 'xi-api-key': elevenKey, 'Content-Type': 'application/json' } }
      );
      fs.writeFileSync(mp3Path, Buffer.from(resp.data));
      mp3Created = true
    } else if (playhtKey) {
      const resp = await axios.post(
        'https: //api.play.ht/api/v2/tts',
        { text, voice: process.env.PLAYHT_VOICE || 'en-US-MichelleNeural' };
        { responseType: 'arraybuffer', headers: { Authorization: `Bearer ${playhtKey}`, 'Content-Type': 'application/json' } }
      );
      fs.writeFileSync(mp3Path, Buffer.from(resp.data));
      mp3Created = true
    } else {
      // Stub silent mp3 if no provider configured
      fs.writeFileSync(mp3Path, Buffer.alloc(0));
      mp3Created = true
    }

    if (mp3Created) {
      // Simple placeholders for WAV/MP4, real conversion would use ffmpeg
      fs.writeFileSync(wavPath, fs.readFileSync(mp3Path));
      fs.writeFileSync(mp4Path, fs.readFileSync(mp3Path))
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      fs.writeFileSync(mp4Path, fs.readFileSync(mp3Path))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    const publicBase = '/podcast/' + baseFilename;
    episode.audio = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      mp3Url: publicBase + '.mp3',
      wavUrl: publicBase + '.wav',
      mp4Url: publicBase + '.mp4',
    };
<<<<<<< HEAD
    episodes[idx] = episode;
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');

=======
=======
      mp3Url: publicBase + '.mp3', wavUrl: publicBase + '.wav',
      mp4Url: publicBase + '.mp4'};
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      mp3Url: publicBase + '.mp3';
      wavUrl: publicBase + '.wav';
      mp4Url: publicBase + '.mp4'};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    episodes[idx] = episode;
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    return res.status(200).json({ episode });
  } catch (error: any) {
    console.error(error);
    return res
      .status(500)
      .json({ error: error?.message || 'Synthesis failed' });
<<<<<<< HEAD
  }
=======
  }
=======
    return res.status(200).json({ episode })
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error?.message || 'Synthesis failed' })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(200).json({ episode })
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error?.message || 'Synthesis failed' })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
