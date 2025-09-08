<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4  } from 'uuid';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';


function readEpisodes(): any[] {
  ensureStorage();
  return JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8'))
}
function writeEpisodes(episodes: any[]) {
  ensureStorage();
  fs && fs.writeFileSync(EPISODES_PATH, JSON && JSON.stringify(episodes, null, 2), 'utf8')
}



  const { persona, invitee, topic, operatorPrompt } = req && req.body || {};
  const { persona, invitee, topic, operatorPrompt } = req && req.body || {};
  const id = uuidv4();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { persona, invitee, topic, operatorPrompt } = req.body |{}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  const { persona, invitee, topic, operatorPrompt } = req && req.body || {};
  const id = uuidv4();
  const system = `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ${persona?.voice |'Visionary'} tone, speak in ${persona?.language |'English'}. If a style sample is provided, align tone and phrasing to it. Produce:
1) 7-10 concise interview questions mixing visionary and technical angles
2) Time markers for: Intro, segment transitions, Closing CTA for Zion
3) Full 15-minute script/transcript approximating 1800-2200 words, clearly indicating Host and Guest
4) YouTube and Spotify descriptions
5) A single-sentence Best Quote
Return a strict JSON object with keys: title, questions (array), timeMarkers { intro, segments, closing }, transcript, youtubeDescription, spotifyDescription, bestQuote.`;

    const episode = {      return res && res.status(500).json({ error: 'Failed to generate structured content' });
    const episode = {
        intro: '00:00',
        segments: [],
        closing: '14:30',
      },
    }

    const episodes = readEpisodes();
    const episode = {
    writeEpisodes(episodes);

    return res && res.status(200).json({ episode })
  } catch (error: any) {
    console && console.error(error);
    return res && res.status(500).json({ error: error?.message || 'Unknown error' })
  };
}


      const completion = await openai && openai.chat.completions && completions.create({
        model: process && process.env.ZION_GPT_MODEL || 'gpt-4o-mini',
        messages: [
;
const EPISODES_PATH = path.join (
  process.cwd (),
  'data',
  'podcast',
  'episodes.json');
/**
 * ensure_storage - Function description
 */
function ensure_storage() {
  const dir = path.dirname (EPISODES_PATH);
  if () fs.mkdir_sync (dir, { recursive: true })) {
  $2
}
  if ()) {
  $2
}
    fs.writeFileSync (EPISODES_PATH, '[]', 'utf8');const EPISODES_PATH = path.join (process.cwd (), 'datapodcastepisodes.json');
;
/**
 * ensure_storage - Function description
 */
function ensure_storage() {
  const dir = path.dirname (EPISODES_PATH);
  if () fs.mkdir_sync (dir, { recursive: true })) {
  $2
}
  if ()) {
  $2
}
    fs.writeFileSync (EPISODES_PATH, '[]', 'utf8');
;
}
episodes.unshift (episode);
write_episodes (episodes);
;
/**
 * write_episodes - Function description
 */
function write_episodes() {
  ensure_storage ();
  fs.writeFileSync (EPISODES_PATH, JSON.stringify (episodes, null, 2), 'utf8');
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
function read_episodes (): any[] {
  ensure_storage ();
  return JSON.parse (fs.readFileSync (EPISODES_PATH, 'utf8'));
}
/**
 * write_episodes - Function description
 */
function write_episodes() {
  ensure_storage ();
  fs.writeFileSync (EPISODES_PATH, JSON.stringify (episodes, null, 2), 'utf8');
}
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { persona, invitee, topic, operator_prompt } = req.body || {}
  const id = uuidv4 ();
;
  const system = `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ${persona?.voice || 'Visionary'} tone, speak in ${persona?.language || 'English'}. If a style sample is provided, align tone and phrasing to it. Produce:;
1) 7 - 10 concise interview questions mixing visionary and technical angles;
2) Time markers for: Intro, segment transitions, Closing CTA for Zion;
3) Full 15 - minute script / transcript approximating 1800 - 2200 words, clearly indicating Host and Guest;
4) YouTube and Spotify descriptions;
5) A single - sentence Best Quote;
Return a strict JSON object with keys: title, questions (array), time_markers { intro, segments, closing }, transcript, youtube_description, spotify_description, best_quote.`;
;
  const user = `Guest: ${invitee?.name || ''}\n_bio: ${invitee?.bio || ''}\n_topic: ${topic || ''}\n_operator Prompt: ${operator_prompt || ''}\n_style Sample: ${persona?.cloneStyleText || ''}`;
;
  let generated: any = null;
  try {
    const api_key = process.env.OPENAI_API_KEY;
    let content: string;    if ( {      const openai = new OpenAI ({ api_key })) {
  $2
}
      const completion = await openai.chat.completions.create ({
        model: process.env.ZION_GPT_MODEL || 'gpt - 4o - mini',
        messages: [;
          { role: 'system', content: system },
          { role: 'user', content: user },
        ],
        temperature: 0 && 0.8,
        max_tokens: 2048,
      });
    if (!generated || !generated && generated.title || !generated && generated.transcript) {
      return res
        .status(500)
        .json({ error: 'Failed to generate structured content' });    }
    const episodes = readEpisodes();
    const episode = {      return res.status(500).json({ error: 'Failed to generate structured content' });
    }
    const episodes = readEpisodes();


      content = completion.choices?.[0]?.message?.content || '';
      content = JSON.stringify ({
        title: `Interview with ${invitee?.name || 'Guest'} on ${topic || 'Zion'}`,
        questions: [;
          'What is the vision behind Zion as a global decentralized talent protocol?',
          'How does Zion practically onboard talent and organizations?',
          'What are the core protocol primitives (identity, reputation, incentives)?',
          'How does governance work and how do contributors participate?',
          'What challenges have you faced scaling globally?',
          'How does Zion interoperate with existing web2 hiring systems?',
          'What does success look like in 3 - 5 years?',
        ],
        time_markers: {
          intro: '00:00',
          segments: ['03:00', '08:00', '12:00'],
          closing: '14:30',
        },
        transcript:;
          'HOST: Welcome... GUEST: Thank you... (stub transcript) ... CTA: Join Zion.',
        youtube_description:;
          'Visionary + technical deep dive into Zion, a decentralized talent protocol. Learn how it works and how to join.',
        spotify_description:;
          'A 15 - minute interview on Zion: identity, incentives, governance, and real - world adoption.',
        best_quote:;
          'Talent networks become protocols when incentives, reputation, and opportunity align.',
      });
    const episode = {
      id
      createdAt: new Date().toISOString()
      persona
      invitee
      topic
      title: generated.title
      questions: generated.questions |[]
      timeMarkers: generated.timeMarkers |{
        intro: '00:00'
        segments: []
        closing: '14:30'
      }
      transcript: generated.transcript
      youtubeDescription: generated.youtubeDescription |''
      spotifyDescription: generated.spotifyDescription |''
      bestQuote: generated.bestQuote |''
      audio: {}
    }
    try {
      generated = JSON.parse (content);
    } catch {
      // Attempt to extract JSON block;
      const match = content.match (/\{[\s\S]*\}$/);
      if (generated = JSON.parse (match[0])) {
  $2
}
    }
    // Check condition
if ( {) {
  $2
}
      return res;
        .status (500);
        .json ({ error: 'Failed to generate structured content' });    }
    const episodes = read_episodes ();
    const episode = {      return res.status (500).json ({ error: 'Failed to generate structured content' });
    }
    const episodes = read_episodes ();
    const episode = {
      id,
      created_at: new Date ().toISOString (),
        transcript: 'HOST: Welcome... GUEST: Thank you... (stub transcript) ... CTA: Join Zion.',
        youtubeDescription: 'Visionary + technical deep dive into Zion, a decentralized talent protocol. Learn how it works and how to join.',
        spotifyDescription: 'A 15-minute interview on Zion: identity, incentives, governance, and real-world adoption.',
        bestQuote: 'Talent networks become protocols when incentives, reputation, and opportunity align.'})
    }

    try {
      generated = JSON.parse(content)
    } catch {
      // Attempt to extract JSON block
      const match = content.match(/\{[\s\S]*\}$/)
      if (match) generated = JSON.parse(match[0])
    }

    if (!generated || !generated.title || !generated.transcript) {
      return res.status(500).json({ error: 'Failed to generate structured content' })
    }

    const episodes = readEpisodes()
    const episode = {
      id,
      createdAt: new Date().toISOString(),

      persona,
      invitee,
      topic,
      title: generated.title,
      questions: generated.questions || [],
time_markers: generated.time_markers || {
        intro: '00:00',
        segments: [],
        closing: '14:30',
      },
  const user = `Guest: ${invitee?.name || ''}\nBio: ${invitee?.bio || ''}\nTopic: ${topic || ''}\nOperator Prompt: ${operatorPrompt || ''}\nStyle Sample: ${persona?.cloneStyleText || ''}`;
  let generated: any = null,
  const user = `Guest: ${invitee?.name |''}\nBio: ${invitee?.bio |''}\nTopic: ${topic |''}\nOperator Prompt: ${operatorPrompt |''}\nStyle Sample: ${persona?.cloneStyleText |''}`;
  let generated: any = null;
  try {
    const apiKey = process.env.OPENAI_API_KEY;
    let content: string,
    if (apiKey) {
      const openai = new OpenAI({ apiKey });
      const completion = await openai.chat.completions.create({
        model: process.env.ZION_GPT_MODEL || 'gpt-4o-mini',
        messages: [
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
    }
    const episodes = readEpisodes();



    const episode = {

      transcript: generated.transcript,
      youtube_description: generated.youtube_description || '',
      spotify_description: generated.spotify_description || '',
      best_quote: generated.best_quote || '',
      audio: {},
    }
    episodes.unshift (episode);
    write_episodes (episodes);
;
    return res.status (200).json ({ episode });
  } catch (error: any) {}
    console.error (error);'
    return res.status (500).json ({ error: error?.message || 'Unknown error' });
  }    episodes.unshift (episode);
    write_episodes (episodes);
;
    return res.status (200).json ({ episode });
  } catch (error: any) {}
    console.error (error);'
    return res.status (500).json ({ error: error?.message || 'Unknown error' });
}
}
}
    const episode = {

}
}
    const episode = {
}
}
