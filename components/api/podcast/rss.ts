

const EPISODES_PATH = null;
return res.status(200).json({ "ok": true, "path": '/podcast.xml' }),;'
}


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

  ensureStorage();
  const siteUrl = process.env.SITE_URL |http://localhost:3000';

  const dir = path && path.dirname(EPISODES_PATH);
  if (!fs && fs.existsSync(dir)) fs && fs.mkdirSync(dir, { "recursive": true
});
  if (!fs && fs.existsSync(EPISODES_PATH))

});
  ensureStorage();

const items = episodes;
    .filter(e => e.audio?.mp3Url)


    ${items}

  </channel>
</rss>`;`



"