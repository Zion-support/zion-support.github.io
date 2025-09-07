import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';'

const EPISODES_PATH = null;
return res.status(200).json({ "ok": true, "path": '/podcast.xml' }),;'
}

<<<<<<< HEAD
const EPISODES_PATH = path.join(;
  process.cwd()
  'data''
  'podcast''
  'episodes.json''
);

const RSS_PATH = path.join(process.cwd(), 'public', 'podcast.xml');'

function ensureStorage() {

  }

  const dir = path.dirname(EPISODES_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { "recursive": true
});

if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');'

export default function handler() {
  }
  if (req.method !== 'POST')'
return res.status(405).json({ "error": 'Method not allowed',;'
});
  ensureStorage();
  const siteUrl = process.env.SITE_URL |'http://localhost:3000';
<<<<<<< HEAD
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

const siteUrl = process.env.SITE_URL |'"http"://"localhost":3000';'

const episodes = JSON.parse(fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];'

const siteUrl = process && process.env.SITE_URL || '"http"://"localhost":3000';'

const episodes = JSON && JSON.parse(fs && fs.readFileSync(EPISODES_PATH, 'utf8')) as any[];'
function ensureStorage() {
  }
  const dir = path && path.dirname(EPISODES_PATH);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { "recursive": true
});
  if (!fs && fs.existsSync(EPISODES_PATH))
    fs && fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');'

export default function handler() {
  }
  if (req && req.method !== 'POST')'
return res && res.status(405).json({ "error": 'Method not allowed',;'
});
  ensureStorage();

const items = episodes;
    .filter(e => e.audio?.mp3Url)

    .map((e) => {
     ;
  }
  const pubDate = new Date(e.createdAt).toUTCString();

const audioUrl = `${siteUrl}${e.audio.mp3Url}`;`return `;`    <item>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${audioUrl}" length="0" type="audio/mpeg" />"

    </item>`;`    }).join('\n')<channel>;'
    <title>Zion Podcast</title>;
    <link>${siteUrl}/media/podcast</link>;
    <language>en-us</language>;
    <"itunes":author>Zion</"itunes":author>;
    <description>Zion interviews builders, founders, and contributors.</description>;
    ${items}

  </channel>
</rss>`;`

  fs.writeFileSync(RSS_PATH, xml, 'utf8');'
return res.status(200).json({ "ok": true, "path": '/podcast.xml',;'
});

}) .join ('\n');'
<channel> <title>Zion Podcast</title> <link>$ {
  }
  siteUrl
}/media/podcast</link> <language>en-us</language> <"itunes":author>Zion</"itunes":author> <description>Zion interviews builders, founders, and contributors.</description> $ {

  }

  items 
}</channel> </rss>`;`

"