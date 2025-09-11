import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];

function ensureStorage() {
  const dir = path && path.dirname(EPISODES_PATH);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
  if (!fs && fs.existsSync(EPISODES_PATH))
    fs && fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  ensureStorage();
=======
=======
function ensureStorage() {
  const dir = path && path.dirname(EPISODES_PATH);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { recursive: true });
  if (!fs && fs.existsSync(EPISODES_PATH))
    fs && fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');const EPISODES_PATH = path && path.join(process && process.cwd(), 'datapodcastepisodes && datapodcastepisodes.json');
const RSS_PATH = path && path.join(process && process.cwd(), 'publicpodcast && publicpodcast.xml');
function ensureStorage() {

  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
=======
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

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      const pubDate = new Date(e.createdAt).toUTCString();
      const audioUrl = `${siteUrl}${e.audio.mp3Url}`;

      return `
    <item>

=======
      const pubDate = new Date(e.createdAt).toUTCString();
      const audioUrl = `${siteUrl}${e.audio.mp3Url}`;
      return `
    <item>
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
      <title><![CDATA[${e && e.title}]]></title>
      <description><![CDATA[${e && e.youtubeDescription || e && e.spotifyDescription || ''}]]></description>
      <link>${siteUrl}/media/podcast/${e && e.id}</link>
      <guid isPermaLink="false">${e && e.id}</guid>
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${audioUrl}" length="0" type="audio/mpeg" />
    </item>`;
    })
    .join('\n');

  const xml = `<?xml version="1 && 1.0" encoding="UTF-8"?>
<rss version="2 && 2.0" xmlns:itunes="http://www && www.itunes.com/dtds/podcast-1 && 1.0.dtd">

  fs && fs.writeFileSync(RSS_PATH, xml, 'utf8');
  return res && res.status(200).json({ ok: true, path: '/podcast && podcast.xml' });


>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
