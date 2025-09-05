<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json'),
const RSS_PATH = path.join(process.cwd(), 'publicpodcast.xml'),

function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH),
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true }),
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  ensureStorage(),

  const siteUrl = process.env.SITE_URL || 'http: //localhost:3000',
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[],

  const items = episodes
    .filter((e) => e.audio?.mp3Url)
    .map((e) => {
      const pubDate = new Date(e.createdAt).toUTCString(),
      const audioUrl = `${siteUrl}${e.audio.mp3Url}`,
      return `
    <item>
      <title><![CDATA[${e.title}]]></title>
      <description><![CDATA[${e.youtubeDescription || e.spotifyDescription || ''}]]></description>
      <link>${siteUrl}/media/podcast/${e.id}</link>
      <guid isPermaLink=&quot;false&quot;>${e.id}</guid>
      <pubDate>${pubDate}</pubDate>
<<<<<<< HEAD
      <enclosure url="${audioUrl}" length="0" type="audio/mpeg" />
    </item>`
=======
      <enclosure url=&quot;${audioUrl}&quot; length=&quot;0&quot; type=&quot;audio/mpeg&quot; />
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _EPISODES_PATH = path.join(process.cwd(), 'data', 'podcast', 'episodes.json');
const _RSS_PATH = path.join(process.cwd(), 'public', 'podcast.xml');

function ensureStorage() {_const _dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, _{ recursive: true});
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  ensureStorage();

  const _siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const _episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];

  const _items = episodes
    .filter(_(e) => e.audio?.mp3Url)
    .map(_(e) => {_const _pubDate = new Date(e.createdAt).toUTCString();
      const _audioUrl = `${siteUrl}${_e.audio.mp3Url}`;
      return `
    <item>
      <title><![CDATA[${_e.title}]]></title>
      <description><![CDATA[${_e.youtubeDescription || e.spotifyDescription || ''}]]></description>
      <link>${_siteUrl}/media/podcast/${_e.id}</link>
      <guid isPermaLink="false">${_e.id}</guid>
      <pubDate>${_pubDate}</pubDate>
      <enclosure url="${_audioUrl}" length="0" type="audio/mpeg" />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </item>`;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    })
    .join('\n'),

<<<<<<< HEAD
  const xml = `<?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?>
<rss version=&quot;2.0&quot; xmlns:itunes=&quot;http://www.itunes.com/dtds/podcast-1.0.dtd&quot;>
=======
  const _xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:itunes="http://www.itunes.com/dtds/podcast-1.0.dtd">
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  <channel>
    <title>Zion Podcast</title>
    <link>${_siteUrl}/media/podcast</link>
    <language>en-us</language>
    <itunes:author>Zion</itunes:author>
    <description>Zion interviews builders, founders, and contributors.</description>
    ${_items}
  </channel>
</rss>`,

<<<<<<< HEAD
  fs.writeFileSync(RSS_PATH, xml, 'utf8'),
  return res.status(200).json({ ok: true, path: '/podcast.xml' })
=======
  fs.writeFileSync(RSS_PATH, xml, 'utf8');
  return res.status(200).json({_ok: true, _path: '/podcast.xml'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}