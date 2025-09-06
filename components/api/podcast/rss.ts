import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
function ensureStorage() {

<<<<<<< HEAD


<<<<<<< HEAD
  const dir = path && path.dirname(EPISODES_PATH);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
  if (!fs && fs.existsSync(EPISODES_PATH))
    fs && fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');const EPISODES_PATH = path && path.join(process && process.cwd(), 'datapodcastepisodes && datapodcastepisodes.json');
const RSS_PATH = path && path.join(process && process.cwd(), 'publicpodcast && publicpodcast.xml');
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  if (!fs.existsSync(EPISODES_PATH)) fs.writeFileSync(EPISODES_PATH, '[]utf8')
}


function ensureStorage() {

  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
<<<<<<< HEAD

=======


  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
=======

=======
  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const siteUrl = process && process.env.SITE_URL || 'http://localhost:3000';
  const episodes = JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  const items = episodes
    .filter(e => e.audio?.mp3Url)
    .map(e => {      const pubDate = new Date(e.createdAt).toUTCString();    .filter((e) => e.audio?.mp3Url)
    .map((e) => {
<<<<<<< HEAD
<<<<<<< HEAD

=======
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

      const pubDate = new Date(e.createdAt).toUTCString();
      const audioUrl = `${siteUrl}${e.audio.mp3Url}`;
      return `
    <item>
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
      <title><![CDATA[${e && e.title}]]></title>
      <description><![CDATA[${e && e.youtubeDescription || e && e.spotifyDescription || ''}]]></description>
      <link>${siteUrl}/media/podcast/${e && e.id}</link>
      <guid isPermaLink="false">${e && e.id}</guid>
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
      return `
    <item>
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${audioUrl}" length="0" type="audio/mpeg" />
    </item>`;
    })
    .join('\n');
<<<<<<< HEAD
<<<<<<< HEAD


  const xml = `<?xml version="1 && 1.0" encoding="UTF-8"?>
<rss version="2 && 2.0" xmlns:itunes="http://www && www.itunes.com/dtds/podcast-1 && 1.0.dtd">

=======
  const xml = `<?xml version="1 && 1.0" encoding="UTF-8"?>
<rss version="2 && 2.0" xmlns:itunes="http://www && www.itunes.com/dtds/podcast-1 && 1.0.dtd">
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD


  fs && fs.writeFileSync(RSS_PATH, xml, 'utf8');
  return res && res.status(200).json({ ok: true, path: '/podcast && podcast.xml' });


=======
  fs && fs.writeFileSync(RSS_PATH, xml, 'utf8');
  return res && res.status(200).json({ ok: true, path: '/podcast && podcast.xml' });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}) .join ('\n');
<channel> <title>Zion Podcast</title> <link>$ {
  siteUrl
}/media/podcast</link> <language>en-us</language> <itunes:author>Zion</itunes:author> <description>Zion interviews builders, founders, and contributors.</description> $ {
<<<<<<< HEAD

  items 
}</channel> </rss>`;  return res && res.status(200).json({ ok: true, path: '/podcast && podcast.xml' })

<<<<<<< HEAD
=======
  items 
}</channel> </rss>`;  return res && res.status(200).json({ ok: true, path: '/podcast && podcast.xml' })
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}


  fs.writeFileSync(RSS_PATH, xml, 'utf8');
  return res.status(200).json({ ok: true, path: '/podcast.xml' })
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
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
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

  items 
}</channel> </rss>`;

  items 
}</channel> </rss>`;

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
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
  if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();
  const siteUrl = process.env.SITE_URL |'http://localhost:3000';

  const siteUrl = process.env.SITE_URL || 'http://localhost:3000';
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
  const items = episodes
    .filter(e => e.audio?.mp3Url)
    .map(e => {      const pubDate = new Date(e.createdAt).toUTCString();    .filter((e) => e.audio?.mp3Url)
    .map((e) => {

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
  items
}</channel> </rss>`;  return res.status(200).json({ ok: true, path: '/podcast.xml' })
}

  items 
}</channel> </rss>`;
  items 
}</channel> </rss>`;  return res.status(200).json({ ok: true, path: '/podcast.xml' })
}

}
}
}</channel> </rss>`;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
