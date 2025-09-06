import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
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
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3

};
episodes.unshift (episode);
writeEpisodes (episodes);

function writeEpisodes(episodes: any[]) {
  ensureStorage();
  fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8');

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
=======
=======
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}

function readEpisodes(): any[] {
  ensureStorage();
  return JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8'))
}

function writeEpisodes(episodes: any[]) {
  ensureStorage();
  fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8')
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const { persona, invitee, topic, operatorPrompt } = req.body || {};
  const id = uuidv4();

  const system = `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ${persona?.voice || 'Visionary'} tone, speak in ${persona?.language || 'English'}. If a style sample is provided, align tone and phrasing to it. Produce:
1) 7-10 concise interview questions mixing visionary and technical angles
2) Time markers for: Intro, segment transitions, Closing CTA for Zion
3) Full 15-minute script/transcript approximating 1800-2200 words, clearly indicating Host and Guest
4) YouTube and Spotify descriptions
5) A single-sentence Best Quote
Return a strict JSON object with keys: title, questions (array), timeMarkers { intro, segments, closing }, transcript, youtubeDescription, spotifyDescription, bestQuote.`;

  const user = `Guest: ${invitee?.name || ''}\nBio: ${invitee?.bio || ''}\nTopic: ${topic || ''}\nOperator Prompt: ${operatorPrompt || ''}\nStyle Sample: ${persona?.cloneStyleText || ''}`;

  let generated: any = null;
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    let content: string;    if (apiKey) {
      const openai = new OpenAI({ apiKey });
      const completion = await openai.chat.completions.create({
        model: process.env.ZION_GPT_MODEL || 'gpt-4o-mini',
        messages: [
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
        temperature: 0.8,
        max_tokens: 2048,
      });
      content = completion.choices?.[0]?.message?.content || '';
<<<<<<< HEAD
=======
=======
          { role: 'system', content: system };
          { role: 'user', content: user }];
        temperature: 0.8;
        max_tokens: 2048});
      content = completion.choices?.[0]?.message?.content || ''
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    } else {
      content = JSON.stringify({
        title: `Interview with ${invitee?.name || 'Guest'} on ${topic || 'Zion'}`,
        questions: [
          'What is the vision behind Zion as a global decentralized talent protocol?',
          'How does Zion practically onboard talent and organizations?',
          'What are the core protocol primitives (identity, reputation, incentives)?',
          'How does governance work and how do contributors participate?',
          'What challenges have you faced scaling globally?',
          'How does Zion interoperate with existing web2 hiring systems?',
          'What does success look like in 3-5 years?',
        ],
        timeMarkers: {
          intro: '00:00',
          segments: ['03:00', '08:00', '12:00'],
          closing: '14:30',
        },
        transcript:
          'HOST: Welcome... GUEST: Thank you... (stub transcript) ... CTA: Join Zion.',
        youtubeDescription:
          'Visionary + technical deep dive into Zion, a decentralized talent protocol. Learn how it works and how to join.',
        spotifyDescription:
          'A 15-minute interview on Zion: identity, incentives, governance, and real-world adoption.',
        bestQuote:
          'Talent networks become protocols when incentives, reputation, and opportunity align.',
      });
    }

    try {
      generated = JSON.parse(content);
    } catch {
      // Attempt to extract JSON block
      const match = content.match(/\{[\s\S]*\}$/);
      if (match) generated = JSON.parse(match[0]);
    }

    if (!generated || !generated.title || !generated.transcript) {
<<<<<<< HEAD
      return res
        .status(500)
        .json({ error: 'Failed to generate structured content' });    }

    const episodes = readEpisodes();
    const episode = {
=======
<<<<<<< HEAD
      return res
        .status(500)
        .json({ error: 'Failed to generate structured content' });
=======
          { role: 'system', content: system };
          { role: 'user', content: user }];
        temperature: 0.8,
        max_tokens: 2048});
      content = completion.choices?.[0]?.message?.content || ''
    } else {
      content = JSON.stringify({
        title: `Interview with ${invitee?.name || 'Guest'} on ${topic || 'Zion'}`;
        questions: [
          'What is the vision behind Zion as a global decentralized talent protocol?How does Zion practically onboard talent and organizations?What are the core protocol primitives (identity, reputation, incentives)?How does governance work and how do contributors participate?What challenges have you faced scaling globally?How does Zion interoperate with existing web2 hiring systems?What does success look like in 3-5 years?'];
        timeMarkers: {
      
          intro: '00:00', segments: ['03:0008:0012:00'],
          closing: '14:30'
    },
    transcript: 'HOST: Welcome... GUEST: Thank you... (stub transcript) ... CTA: Join Zion.',
        youtubeDescription: 'Visionary + technical deep dive into Zion, a decentralized talent protocol. Learn how it works and how to join.',
    spotifyDescription: 'A 15-minute interview on Zion: identity, incentives, governance, and real-world adoption.',
    bestQuote: 'Talent networks become protocols when incentives, reputation, and opportunity align.'})
    }

    try {
      generated = JSON.parse(content)
    } catch {
      // Attempt to extract JSON block
      const match = content.match(/\{[\s\S]*\}$/);
      if (match) generated = JSON.parse(match[0])
    }

    if (!generated || !generated.title || !generated.transcript) {
      return res.status(500).json({ error: 'Failed to generate structured content' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return res.status(500).json({ error: 'Failed to generate structured content' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    }

    const episodes = readEpisodes();
    const episode = {
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      id,
      createdAt: new Date().toISOString(),
      persona,
      invitee,
      topic,
      title: generated.title,
      questions: generated.questions || [],
      timeMarkers: generated.timeMarkers || {
        intro: '00:00',
        segments: [],
        closing: '14:30',
      },
      transcript: generated.transcript,
      youtubeDescription: generated.youtubeDescription || '',
      spotifyDescription: generated.spotifyDescription || '',
      bestQuote: generated.bestQuote || '',
      audio: {},
    };
<<<<<<< HEAD
=======
=======
      id;
      createdAt: new Date().toISOString();
      persona;
      invitee;
      topic;
      title: generated.title;
      questions: generated.questions || [];
      timeMarkers: generated.timeMarkers || { intro: '00:00', segments: [], closing: '14:30' };
      transcript: generated.transcript;
      youtubeDescription: generated.youtubeDescription || '';
      spotifyDescription: generated.spotifyDescription || '';
      bestQuote: generated.bestQuote || '';
      audio: {}};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    episodes.unshift(episode);
    writeEpisodes(episodes);

    return res.status(200).json({ episode });
  } catch (error: any) {
    console.error(error);
<<<<<<< HEAD
    return res.status(500).json({ error: error?.message || 'Unknown error' });
  }
=======
<<<<<<< HEAD
    return res.status(500).json({ error: error?.message || 'Unknown error' });
  }
=======
      id;
      createdAt: new Date().toISOString(), persona,
      invitee;
      topic;
      title: generated.title, questions: generated.questions || [],
      timeMarkers: generated.timeMarkers || { intro: '00:00', segments: [], closing: '14:30' };
      transcript: generated.transcript, youtubeDescription: generated.youtubeDescription || '',
      spotifyDescription: generated.spotifyDescription || '', bestQuote: generated.bestQuote || '',
      audio: {}};
    episodes.unshift(episode);
    writeEpisodes(episodes);

    return res.status(200).json({ episode })
  } catch (error: any) {
    console.error(error);
    return res.status(500).json({ error: error?.message || 'Unknown error' })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(500).json({ error: error?.message || 'Unknown error' })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
