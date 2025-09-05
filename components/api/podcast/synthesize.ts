import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import axios from 'axios';

const _EPISODES_PATH = path.join(process.cwd(), 'data', 'podcast', 'episodes.json');
const _PUBLIC_DIR = path.join(process.cwd(), 'public', 'podcast');

function ensureStorage() {_const _dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, _{ recursive: true});
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, {_recursive: true});
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  ensureStorage();

  const {_episodeId} = req.body || {};
  const _episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const _idx = episodes.findIndex(_(e) => e.id === episodeId);
  if (idx === -1) return res.status(404).json({_error: 'Episode not found'});

  const _episode = episodes[idx];
  const _text = episode.transcript as string;

  const _elevenKey = process.env.ELEVENLABS_API_KEY;
  const _playhtKey = process.env.PLAYHT_API_KEY;

  const _baseFilename = `${_episode.id}-${_Date.now()}`;
  const _mp3Path = path.join(PUBLIC_DIR, `${_baseFilename}.mp3`);
  const _wavPath = path.join(PUBLIC_DIR, `${_baseFilename}.wav`);
  const _mp4Path = path.join(PUBLIC_DIR, `${_baseFilename}.mp4`);

  let _mp3Created = false;

  try {_if (elevenKey) {
      const _voiceId = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';
      const _resp = await axios.post(
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        {_text, _model_id: process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2'},
        {_responseType: 'arraybuffer', _headers: { 'xi-api-key': elevenKey, _'Content-Type': 'application/json'} }
      );
      fs.writeFileSync(mp3Path, Buffer.from(resp.data));
      mp3Created = true;
    } else if (playhtKey) {_const _resp = await axios.post(
        'https://api.play.ht/api/v2/tts', _{ text, _voice: process.env.PLAYHT_VOICE || 'en-US-MichelleNeural'},
        {_responseType: 'arraybuffer', _headers: { Authorization: `Bearer ${playhtKey}`, 'Content-Type': 'application/json' } }
      );
      fs.writeFileSync(mp3Path, Buffer.from(resp.data));
      mp3Created = true;
    } else {_// Stub silent mp3 if no provider configured
      fs.writeFileSync(mp3Path, _Buffer.alloc(0));
      mp3Created = true;}

    if (mp3Created) {_// Simple placeholders for WAV/MP4; real conversion would use ffmpeg
      fs.writeFileSync(wavPath, _fs.readFileSync(mp3Path));
      fs.writeFileSync(mp4Path, _fs.readFileSync(mp3Path));}

    const _publicBase = '/podcast/' + baseFilename;
    episode.audio = {_mp3Url: publicBase + '.mp3', _wavUrl: publicBase + '.wav', _mp4Url: publicBase + '.mp4'};

    episodes[idx] = episode;
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');

    return res.status(200).json({_episode});
  } catch (error: unknown) {_return res.status(500).json({ error: error?.message || 'Synthesis failed'});
  }
}