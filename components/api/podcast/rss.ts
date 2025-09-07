import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'),
const RSS_PATH = path.join(process.cwd(), 'publicpodcast.xml'),

function ensureStorage() {
  const dir = path.dirname($2);
  if (!fs.existsSync(dir)) fs.mkdirSync($2);
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  ensureStorage($2);
  const siteUrl = $2;
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[],

  const items = episodes
    .filter((e) => e.audio?.mp3Url)
    .map((e) => {
      const pubDate = new Date(e.createdAt).toUTCString($2);
      const audioUrl = $2;
      return `
    <item>
      <title><![CDATA[${e.title}]]></title>
      <description><![CDATA[${e.youtubeDescription || e.spotifyDescription || ''}]]></description>
      <link>${siteUrl}/media/podcast/${e.id}</link>
      <guid isPermaLink="false">${e.id}</guid>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${audioUrl}" length="0" type="audio/mpeg" />
    </item>`
    })
    .join($2);
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns: itunes ="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <channel>
    <title>Zion Podcast</title>
    <link>${siteUrl}/media/podcast</link>
    <language>en-us</language>
    <itunes: author>Zion</itunes: author>
    <description>Zion interviews builders, founders, and contributors.</description>
    ${items}
  </channel>
</rss>`,

  fs.writeFileSync($2);
  return res.status(200).json({ ok: true, path: '/podcast.xml' })
}