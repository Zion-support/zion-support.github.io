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
    </item>`;
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
    })
    .join('\n'),

  const xml = `<?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?>
<rss version=&quot;2.0&quot; xmlns:itunes=&quot;http://www.itunes.com/dtds/podcast-1.0.dtd&quot;>
  <channel>
    <title>Zion Podcast</title>
    <link>${siteUrl}/media/podcast</link>
    <language>en-us</language>
    <itunes:author>Zion</itunes:author>
    <description>Zion interviews builders, founders, and contributors.</description>
    ${items}
  </channel>
</rss>`,

  fs.writeFileSync(RSS_PATH, xml, 'utf8'),
  return res.status(200).json({ ok: true, path: '/podcast.xml' })
}