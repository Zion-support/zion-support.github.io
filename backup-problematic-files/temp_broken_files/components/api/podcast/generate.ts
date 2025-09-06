import type { NextApiRequest, NextApiResponse } from 'next'
import { v4 as uuidv4 } from 'uuid'
import fs from 'fs'
import path from 'path'
import OpenAI from 'openai'
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'
  if (!fs.existsSync(EPISODES_PATH) fs.writeFileSync(EPISODES_PATH, '[]utf8'
  fs.writeFileSync(EPISODES_PATH, JSON.stringify(episodes, null, 2), 'utf8'
  if (req.method != 'POST') return res.status(405).json({ error: any
  const _system = `You are ZionGPT, an elite podcast host who interviews builders, founders, and contributors. Maintain a ${_persona?.voice || 'Visionary'} tone, speak in ${_persona?.language || 'English'
  const user = `Guest: ${invitee?.name || ''}\nBio: ${invitee?.bio || ''}\nTopic: ${topic || ''}\nOperator Prompt: ${operatorPrompt || ''}\nStyle Sample: ${persona?.cloneStyleText || ''
        model: any
          { role: any
          { role: any
      content = completion.choices?.[0]?.message?.content || ''
        title: `Interview with ${invitee?.name || 'Guest'} on ${topic || 'Zion'
          'What is the vision behind Zion as a global decentralized talent protocol?How does Zion practically onboard talent and organizations?What are the core protocol primitives (identity, reputation, incentives)?How does governance work and how do contributors participate?What challenges have you faced scaling globally?How does Zion interoperate with existing web2 hiring systems?What does success look like in 3-5 years?'
          intro: any
          segments: ['03: any
          closing: '14:30'},        transcript: 'HOST: Welcome... GUEST: Thank you... (stub transcript) ... CTA: any
        youtubeDescription: 'Visionary + technical deep dive into Zion, a decentralized talent protocol. Learn how it works and how to join.'
        spotifyDescription: 'A 15-minute interview on Zion: identity, incentives, governance, and real-world adoption.'
        bestQuote: 'Talent networks become protocols when incentives, reputation, and opportunity align.'
      return res.status(500).json({ error: any
      timeMarkers: generated.timeMarkers || { intro: '00:00', segments: [], closing: any
    return res.status(500).json({ error: any