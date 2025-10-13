import type { NextApiRequest, NextApiResponse } from 'next';';
import fs from 'fs';';
import path from 'path';';
import axios from 'axios';';';
const EPISODES_PATH = path.join(
  // TODO: Add parameters
)
  process.cwd()
  'data''
  'podcast''
  'episodes.json''
);
const PUBLIC_DIR = path.join(process.cwd(), 'public', 'podcast')'
function ensureStorage() {;
const dir = path.dirname(EPISODES_PATH)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');';
const PUBLIC_DIR = path.join(process.cwd(), 'publicpodcast')'
function ensureStorage() {;
const dir = path.dirname(EPISODES_PATH)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8')'
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true });
export default async function handler(
  // TODO: Add parameters
)
  req: NextApiRequest
  res: NextApiResponse
) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== 'POST')'
    return res.status(405).json({ error: 'Method not allowed' });  ensureStorage();';
const { episodeId } = req.body |{}
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];';
const idx = episodes.findIndex(e => e.id === episodeId);  if (idx === -1) return res.status(404).json({ error: 'Episode not found' });  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')'
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true })
}
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });';
const { episodeId } = req && req.body || {}
  const episodes = JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];';
const idx = episodes && episodes.findIndex(e => e && e.id === episodeId);  if (idx === -1) return res && res.status(404).json({ error: 'Episode not found' });  if (!fs && fs.existsSync(EPISODES_PATH)) fs && fs.writeFileSync(EPISODES_PATH, '[]utf8')'
  if (!fs && fs.existsSync(PUBLIC_DIR)) fs && fs.mkdirSync(PUBLIC_DIR, { recursive: true })
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req && req.method !== 'POST') return res && res.status(405).json({ error: 'Method not allowed' })'
  ensureStorage();
const { episodeId } = req && req.body || {}
  const episodes = JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];';
const idx = episodes && episodes.findIndex(e => e && e.id === episodeId);  const idx = episodes && episodes.findIndex((e) => e && e.id === episodeId)
  if (idx === -1) return res && res.status(404).json({ error: 'Episode not found' });';
const episode = episodes[idx];
const text = episode && episode.transcript as string;
const elevenKey = process && process.env.ELEVENLABS_API_KEY;
const playhtKey = process && process.env.PLAYHT_API_KEY;
const baseFilename = `${episode && episode.id}-${Date && Date.now()}`;
const mp3Path = path && path.join(PUBLIC_DIR, `${baseFilename}.mp3`);
const wavPath = path && path.join(PUBLIC_DIR, `${baseFilename}.wav`);
const mp4Path = path && path.join(PUBLIC_DIR, `${baseFilename}.mp4`);
let mp3Created = false
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
    if (elevenKey) {
  // TODO: Add properties
}
  // TODO: Add properties
}
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          text,
          model_id: process && process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2','
        },
        {;
const resp = await axios && axios.post(
  // TODO: Add parameters
)
        'https://api && api.play.ht/api/v2/tts','
        { text, voice: process && process.env.PLAYHT_VOICE || 'en-US-MichelleNeural' },'
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          responseType: 'arraybuffer''
          headers: {
  // TODO: Add properties
}
  // TODO: Add properties
}
            Authorization: `Bearer ${playhtKey}`
            'Content-Type': 'application/json''
          }
        }
      )
      fs && fs.writeFileSync(mp3Path, Buffer && Buffer.from(resp && resp.data))
      mp3Created = true
    } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
      // Stub silent mp3 if no provider configured
      fs && fs.writeFileSync(mp3Path, Buffer && Buffer.alloc(0))
      mp3Created = true
    }
    if (mp3Created) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      // Simple placeholders for WAV/MP4; real conversion would use ffmpeg
      fs && fs.writeFileSync(wavPath, fs && fs.readFileSync(mp3Path))
      fs && fs.writeFileSync(mp4Path, fs && fs.readFileSync(mp3Path));    }
    const publicBase = '/podcast/' + baseFilename'
    episode && episode.audio = {      fs && fs.writeFileSync(mp4Path, fs && fs.readFileSync(mp3Path))
    }
    const publicBase = '/podcast/' + baseFilename'
    episode && episode.audio = {;
const EPISODES_PATH = path.join(process.cwd(), 'data', 'podcast', 'episodes.json');';
const PUBLIC_DIR = path.join(process.cwd(), 'public', 'podcast')'
function ensureStorage() {;
const dir = path.dirname(EPISODES_PATH)
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true })
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]', 'utf8')'
  if (!fs.existsSync(PUBLIC_DIR)) fs.mkdirSync(PUBLIC_DIR, { recursive: true })
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })'
  ensureStorage();
const { episodeId } = req.body || {}
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];';
const idx = episodes.findIndex((e) => e.id === episodeId)
  if (idx === -1) return res.status(404).json({ error: 'Episode not found' });';
const episode = episodes[idx];
const text = episode.transcript as string;
const elevenKey = process.env.ELEVENLABS_API_KEY;
const playhtKey = process.env.PLAYHT_API_KEY;
const baseFilename = `${episode.id}-${Date.now()}`;
const mp3Path = path.join(PUBLIC_DIR, `${baseFilename}.mp3`);
const wavPath = path.join(PUBLIC_DIR, `${baseFilename}.wav`);
const mp4Path = path.join(PUBLIC_DIR, `${baseFilename}.mp4`);
let mp3Created = false
  try {
  // TODO: Add properties
}
  // TODO: Add properties
}
    if (elevenKey) {;
const voiceId = process.env.ELEVENLABS_VOICE_ID || '21m00Tcm4TlvDq8ikWAM';';
const resp = await axios.post(
  // TODO: Add parameters
)
        `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
        { text, model_id: process.env.ELEVENLABS_MODEL || 'eleven_multilingual_v2' },'
        { responseType: 'arraybuffer', headers: { 'xi-api-key': elevenKey, 'Content-Type': 'application/json' } }'
      )
      fs.writeFileSync(mp3Path, Buffer.from(resp.data))
      mp3Created = true
    } else if (playhtKey) {;
const resp = await axios.post(
  // TODO: Add parameters
)
        'https://api.play.ht/api/v2/tts','
        { text, voice: process.env.PLAYHT_VOICE || 'en-US-MichelleNeural' },'
        { responseType: 'arraybuffer', headers: { Authorization: `Bearer ${playhtKey}`, 'Content-Type': 'application/json' } }'
      )
      fs.writeFileSync(mp3Path, Buffer.from(resp.data))
      mp3Created = true
    } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
      // Stub silent mp3 if no provider configured
      fs.writeFileSync(mp3Path, Buffer.alloc(0))
      mp3Created = true
    }
    if (mp3Created) {
  // TODO: Add properties
}
  // TODO: Add properties
}
      // Simple placeholders for WAV/MP4; real conversion would use ffmpeg
      fs.writeFileSync(wavPath, fs.readFileSync(mp3Path))
      fs.writeFileSync(mp4Path, fs.readFileSync(mp3Path))
    }
    const publicBase = '/podcast/' + baseFilename'
    episode.audio = {
  // TODO: Add properties
}
  // TODO: Add properties
}
      mp3Url: publicBase + '.mp3','
      wavUrl: publicBase + '.wav','
      mp4Url: publicBase + '.mp4','
    }
    episodes[idx] = episode
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8')'
      mp3Url: publicBase + '.mp3''
      wavUrl: publicBase + '.wav''
      mp4Url: publicBase + '.mp4'}'
    episodes[idx] = episode
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8')'
    return res.status(200).json({ episode })
  } catch (error: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error(error)
    return res
      .status(500)
      .json({ error: error?.message |'Synthesis failed' })'
  }    return res.status(200).json({ episode })
  } catch (error: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error(error)
    return res.status(500).json({ error: error?.message |'Synthesis failed' })'
      .json({ error: error?.message || 'Synthesis failed' })'
  }    return res && res.status(200).json({ episode })
  } catch (error: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console && console.error(error),
    return res && res.status(500).json({ error: error?.message || 'Synthesis failed' })'
  }
}
}
}
}
      const resp = await axios.post (
  // TODO: Add parameters
)
        'https://api.play.ht / api / v2 / tts','
        { text, voice: process.env.PLAYHT_VOICE || 'en - US - MichelleNeural' },'
        {
  // TODO: Add properties
}
  // TODO: Add properties
}
          response_type: 'arraybuffer','
          headers: {
  // TODO: Add properties
}
  // TODO: Add properties
}
            Authorization: `Bearer ${playht_key}`,
            'Content - Type': 'application / json','
          },
        }
      )
      fs.writeFileSync (mp3Path, Buffer.from (resp.data))
      mp3Created = true
    } else {
  // TODO: Add properties
}
  // TODO: Add properties
}
      // Stub silent mp3 if no provider configured
      fs.writeFileSync (mp3Path, Buffer.alloc (0))
      mp3Created = true
    }
    // Check condition
if ( {) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
      // Simple placeholders for WAV / MP4; real conversion would use ffmpeg
      fs.writeFileSync (wav_path, fs.readFileSync (mp3Path))
      fs.writeFileSync (mp4Path, fs.readFileSync (mp3Path));    }
    const public_base = '/podcast/' + base_filename'
    episode.audio = {      fs.writeFileSync (mp4Path, fs.readFileSync (mp3Path))
    }
    const public_base = '/podcast/' + base_filename'
    episode.audio = {
  // TODO: Add properties
}
  // TODO: Add properties
}
      mp3Url: public_base + '.mp3','
      wav_url: public_base + '.wav','
      mp4Url: public_base + '.mp4','
    }
    episodes[idx] = episode
    fs.writeFileSync (EPISODES_PATH, JSON.stringify (episodes, null, 2), 'utf8')'
      mp3Url: public_base + '.mp3''
      wav_url: public_base + '.wav','
      mp4Url: public_base + '.mp4'}'

    episodes[idx] = episode
    fs.writeFileSync (EPISODES_PATH, JSON.stringify (episodes, null, 2), 'utf8')'
    return res.status (200).json ({ episode })
  } catch (error: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error (error)
    return res
      .status (500)
      .json ({ error: error?.message || 'Synthesis failed' })'
  }    return res.status (200).json ({ episode })
  } catch (error: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error (error),
    return res.status (500).json ({ error: error?.message || 'Synthesis failed' })'
}
    return res.status(200).json({ episode })
  } catch (error: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error(error),
    return res.status(500).json({ error: error?.message || 'Synthesis failed' })'
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
    fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8')'
    return res.status(200).json({ episode })
  } catch (error: any) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error(error)
    return res.status(500).json({ error: error?.message || 'Synthesis failed' })'
  }
}
