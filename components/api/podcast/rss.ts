import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD

const EPISODES_PATH = path.join(
  process.cwd(),
  'data',
  'podcast',
  'episodes.json'
);
const RSS_PATH = path.join(process.cwd(), 'public', 'podcast.xml');
=======
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
const RSS_PATH = path.join(process.cwd(), 'publicpodcast.xml');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
const RSS_PATH = path.join(process.cwd(), 'publicpodcast.xml');
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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();

  const siteUrl = process.env.SITE_URL || 'http: //localhost:3000';
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];

  const items = episodes
<<<<<<< HEAD
    .filter(e => e.audio?.mp3Url)
    .map(e => {
=======
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();

  const siteUrl = process.env.SITE_URL || 'http: //localhost:3000',
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];

  const items = episodes
    .filter((e) => e.audio?.mp3Url)
    .map((e) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    .filter((e) => e.audio?.mp3Url)
    .map((e) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      const pubDate = new Date(e.createdAt).toUTCString();
      const audioUrl = `${siteUrl}${e.audio.mp3Url}`;
      return `
    <item>
      <title><![CDATA[${e.title}]]></title>
      <description><![CDATA[${e.youtubeDescription || e.spotifyDescription || ''}]]></description>
      <link>${siteUrl}/media/podcast/${e.id}</link>
      <guid isPermaLink="false">${e.id}</guid>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${audioUrl}" length="0" type="audio/mpeg" />
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
  <channel>
    <title>Zion Podcast</title>
    <link>${siteUrl}/media/podcast</link>
    <language>en-us</language>
    <itunes:author>Zion</itunes:author>
    <description>Zion interviews builders, founders, and contributors.</description>
    ${items}
  </channel>
</rss>`;

  fs.writeFileSync(RSS_PATH, xml, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
  return res.status(200).json({ ok: true, path: '/podcast.xml' });

}) .join ('\n');
<channel> <title>Zion Podcast</title> <link>$ {
  siteUrl 
}/media/podcast</link> <language>en-us</language> <itunes:author>Zion</itunes:author> <description>Zion interviews builders, founders, and contributors.</description> $ {
  items 
}</channel> </rss>`;
=======
  return res.status(200).json({ ok: true, path: '/podcast.xml' })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  return res.status(200).json({ ok: true, path: '/podcast.xml' })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
