import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const EPISODES_PATH = null;
  return res.status(200).json({ ok: true, path: '/podcast.xml' })
}
const EPISODES_PATH = path.join(
  process.cwd()
  'data'
  'podcast'
  'episodes.json'
);
const RSS_PATH = path.join(process.cwd(), 'public', 'podcast.xml');
origin/cursor/automate-test-improve-and-merge-code-2533

function ensureStorage() {

  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();
  const siteUrl = process.env.SITE_URL |'http://localhost:3000';
origin/cursor/automate-test-improve-and-merge-code-2533
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];

  const siteUrl = process && process.env.SITE_URL || 'http://localhost:3000';
  const episodes = JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
function ensureStorage() {
  const dir = path && path.dirname(EPISODES_PATH);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
  if (!fs && fs.existsSync(EPISODES_PATH))
    fs && fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();
  const items = episodes
    .filter(e => e.audio?.mp3Url)
    .map(e => {
      const pubDate = new Date(e.createdAt).toUTCString();
      const audioUrl = `${siteUrl}${e.audio.mp3Url}`;
origin/cursor/automate-test-improve-and-merge-code-2533
      return `
    <item>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${audioUrl}" length="0" type="audio/mpeg" />
    </item>`;
    })
    .join('\n');
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
return res.status(200).json({ ok: true, path: '/podcast.xml' });

origin/cursor/automate-test-improve-and-merge-code-2533
}) .join ('\n');
<channel> <title>Zion Podcast</title> <link>$ {
  siteUrl
}/media/podcast</link> <language>en-us</language> <itunes:author>Zion</itunes:author> <description>Zion interviews builders, founders, and contributors.</description> $ {
  items 
}</channel> </rss>`;
origin/cursor/automate-test-improve-and-merge-code-2533
