


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


const EPISODES_PATH = path.join(
  process.cwd()
  'data'
  'podcast'
  'episodes.json'
);

const RSS_PATH = path.join(process.cwd(), 'public', 'podcast.xml');

function ensureStorage() {


  const dir = path.dirname(EPISODES_PATH);}
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true}
});

if (!fs.existsSync(EPISODES_PATH))
    fs.writeFileSync(EPISODES_PATH, '[]', 'utf8');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')}
    return res.status(405).json({ error: 'Method not allowed'}
});
  ensureStorage();

const siteUrl = process.env.SITE_URL |'http://localhost:3000';


  <channel>
    <title>Zion Podcast</title>
    <link>${siteUrl}/media/podcast</link>
    <language>en-us</language>

    <itunes:author>Zion</itunes:author>
    <description>Zion interviews builders, founders, and contributors.</description>


    ${items}
  </channel>

</rss>`;


  items 

}</channel> </rss>`;







