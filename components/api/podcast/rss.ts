import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD


function ensureStorage() {

=======
<<<<<<< HEAD
const EPISODES_PATH = path && path.join(
  process && process.cwd(),
  'data',
  'podcast',
  'episodes && episodes.json'
);
const RSS_PATH = path && path.join(process && process.cwd(), 'public', 'podcast && podcast.xml');
const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
const RSS_PATH = path.join(process.cwd(), 'publicpodcast.xml');
function ensureStorage() {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const dir = path && path.dirname(EPISODES_PATH);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
  if (!fs && fs.existsSync(EPISODES_PATH))
    fs && fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');const EPISODES_PATH = path && path.join(process && process.cwd(), 'datapodcastepisodes && datapodcastepisodes.json');
const RSS_PATH = path && path.join(process && process.cwd(), 'publicpodcast && publicpodcast.xml');
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}
<<<<<<< HEAD


>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function ensureStorage() {

  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
<<<<<<< HEAD
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
const RSS_PATH = path.join(process.cwd(), 'publicpodcast.xml');
function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });

  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';

  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const items = episodes
    .filter(e => e.audio?.mp3Url)
    .map(e => {      const pubDate = new Date(e.createdAt).toUTCString();    .filter((e) => e.audio?.mp3Url)
    .map((e) => {

=======

=======


  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
=======

=======
function ensureStorage() {
  const dir = path && path.dirname(EPISODES_PATH);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
  if (!fs && fs.existsSync(EPISODES_PATH))
    fs && fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const siteUrl = process && process.env.SITE_URL || 'http://localhost:3000';
  const episodes = JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const items = episodes
    .filter(e => e && e.audio?.mp3Url)
    .map(e => {      const pubDate = new Date(e && e.createdAt).toUTCString();    .filter((e) => e && e.audio?.mp3Url)
    .map((e) => {
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
      const pubDate = new Date(e.createdAt).toUTCString();
      const audioUrl = `${siteUrl}${e.audio.mp3Url}`;

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
      return `
    <item>

=======
      const pubDate = new Date(e.createdAt).toUTCString();
      const audioUrl = `${siteUrl}${e.audio.mp3Url}`;
      return `
    <item>
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <title><![CDATA[${e && e.title}]]></title>
      <description><![CDATA[${e && e.youtubeDescription || e && e.spotifyDescription || ''}]]></description>
      <link>${siteUrl}/media/podcast/${e && e.id}</link>
      <guid isPermaLink="false">${e && e.id}</guid>
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${audioUrl}" length="0" type="audio/mpeg" />
    </item>`;
    })
    .join('\n');
<<<<<<< HEAD


  const xml = `<?xml version="1 && 1.0" encoding="UTF-8"?>
<rss version="2 && 2.0" xmlns:itunes="http://www && www.itunes.com/dtds/podcast-1 && 1.0.dtd">

=======
  const xml = `<?xml version="1 && 1.0" encoding="UTF-8"?>
<rss version="2 && 2.0" xmlns:itunes="http://www && www.itunes.com/dtds/podcast-1 && 1.0.dtd">
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  <channel>
    <title>Zion Podcast</title>
    <link>${siteUrl}/media/podcast</link>
    <language>en-us</language>
    <itunes:author>Zion</itunes:author>
    <description>Zion interviews builders, founders, and contributors.</description>
    ${items}
  </channel>
</rss>`;
<<<<<<< HEAD


  fs && fs.writeFileSync(RSS_PATH, xml, 'utf8');
  return res && res.status(200).json({ ok: true, path: '/podcast && podcast.xml' });


=======
  fs && fs.writeFileSync(RSS_PATH, xml, 'utf8');
  return res && res.status(200).json({ ok: true, path: '/podcast && podcast.xml' });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}) .join ('\n');
<channel> <title>Zion Podcast</title> <link>$ {
  siteUrl
}/media/podcast</link> <language>en-us</language> <itunes:author>Zion</itunes:author> <description>Zion interviews builders, founders, and contributors.</description> $ {
<<<<<<< HEAD
<<<<<<< HEAD
=======

  items 
}</channel> </rss>`;  return res && res.status(200).json({ ok: true, path: '/podcast && podcast.xml' })

=======
  items 
}</channel> </rss>`;  return res && res.status(200).json({ ok: true, path: '/podcast && podcast.xml' })
}
  fs.writeFileSync(RSS_PATH, xml, 'utf8');
  return res.status(200).json({ ok: true, path: '/podcast.xml' })
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
}
;
const EPISODES_PATH = path.join (
  process.cwd (),
  'data',
  'podcast',
  'episodes.json');
const RSS_PATH = path.join (process.cwd (), 'public', 'podcast.xml');
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
const RSS_PATH = path.join (process.cwd (), 'publicpodcast.xml');
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
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  ensure_storage ();
;
  const site_url = process.env.SITE_URL || 'http://localhost:3000';
  const episodes = JSON.parse (fs.readFileSync (EPISODES_PATH, 'utf8')) as any[];
;
  const items = episodes;
    .filter (e => e.audio?.mp3Url);
    .map (e => {      const pub_date = new Date (e.created_at).toUTCString ();    .filter ((e) => e.audio?.mp3Url);
    .map ((e) => {
      const pub_date = new Date (e.created_at).toUTCString ();
      const audio_url = `${site_url}${e.audio.mp3Url}`;
      return `;
    <item>;
      <title><![CDATA[${e.title}]]></title>;
      <description><![CDATA[${e.youtube_description || e.spotify_description || ''}]]></description>;
      <link>${site_url}/media / podcast/${e.id}</link>;
      <guid isPermaLink="false">${e.id}</guid>;
      <pub_date>${pub_date}</pub_date>;
      <enclosure url="${audio_url}" length="0" type="audio / mpeg" />;
    </item>`;
    });
    .join ('\n');
;
  const xml = `<?xml version="1.0" encoding="UTF - 8"?>;
<rss version="2.0" xmlns:itunes="http://www.itunes.com / dtds / podcast - 1.0.dtd">;
  <channel>;
    <title > Zion Podcast</title>;
    <link>${site_url}/media / podcast</link>;
    <language > en - us</language>;
    <itunes:author > Zion</itunes:author>;
    <description > Zion interviews builders, founders, and contributors.</description>;
    ${items}
  </channel>;
</rss>`;
;
fs.writeFileSync (RSS_PATH, xml, 'utf8');
  return res.status (200).json ({ ok: true, path: '/podcast.xml' });
;
}) .join ('\n');
<channel> <title > Zion Podcast</title> <link>$ {
  site_url;
}/media / podcast</link> <language > en - us</language> <itunes:author > Zion</itunes:author> <description > Zion interviews builders, founders, and contributors.</description> $ {
  items;
}</channel> </rss>`;  return res.status (200).json ({ ok: true, path: '/podcast.xml' });
    })
    .join('\n'),

  const xml = `<?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?>
<rss version=&quot;2.0&quot; xmlns:itunes=&quot;http://www.itunes.com/dtds/podcast-1.0.dtd&quot;>
  <channel>
    <title>Zion Podcast</title>
    <link>${_siteUrl}/media/podcast</link>
    <language>en-us</language>
    <itunes:author>Zion</itunes:author>
    <description>Zion interviews builders, founders, and contributors.</description>
    ${_items}
  </channel>
</rss>`,

  fs.writeFileSync(RSS_PATH, xml, 'utf8'),
  return res.status(200).json({ ok: true, path: '/podcast.xml' })

}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

  items 
}</channel> </rss>`;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  items 

<<<<<<< HEAD
=======
}</channel> </rss>`;

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======

const EPISODES_PATH = path.join(
  process.cwd()
  'data'
  'podcast'
  'episodes.json'
);
const RSS_PATH = path.join(process.cwd(), 'public', 'podcast.xml');
function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');const EPISODES_PATH = path.join(process.cwd(), 'datapodcastepisodes.json');
const RSS_PATH = path.join(process.cwd(), 'publicpodcast.xml');
function ensureStorage() {
  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
<<<<<<< HEAD
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();
<<<<<<< HEAD
  const siteUrl = process.env.SITE_URL |'http://localhost:3000';
=======
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1

  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const items = episodes
    .filter(e => e.audio?.mp3Url)
    .map(e => {      const pubDate = new Date(e.createdAt).toUTCString();    .filter((e) => e.audio?.mp3Url)
    .map((e) => {
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
      const pubDate = new Date(e.createdAt).toUTCString();
      const audioUrl = `${siteUrl}${e.audio.mp3Url}`;
      return `
    <item>
      <title><![CDATA[${e.title}]]></title>
      <description><![CDATA[${e.youtubeDescription |e.spotifyDescription |''}]]></description>
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
  return res.status(200).json({ ok: true, path: '/podcast.xml' });
}) .join ('\n');
<channel> <title>Zion Podcast</title> <link>$ {
  siteUrl
}/media/podcast</link> <language>en-us</language> <itunes:author>Zion</itunes:author> <description>Zion interviews builders, founders, and contributors.</description> $ {
<<<<<<< HEAD
<<<<<<< HEAD
  items
}</channel> </rss>`;  return res.status(200).json({ ok: true, path: '/podcast.xml' })
}

=======
  items 
}</channel> </rss>`;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
  items 
<<<<<<< HEAD
}</channel> </rss>`;  return res.status(200).json({ ok: true, path: '/podcast.xml' })
}

}
}
=======
}</channel> </rss>`;
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
