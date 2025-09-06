
const LOG_DIR = path.join(process.cwd(), 'logs');
const LOG_FILE = path.join(LOG_DIR, 'events.log');

  const {
    name,
    page = '',
    userType = 'guest',
    properties = {},
    at,
  } = req.body || {};
  if (!name || typeof name !== 'string')
    return res.status(400).json({ error: 'Invalid event name' });

  const nowIso = new Date().toISOString();
  const event = {
    name,
    page,
    userType,
    properties,
at: at && typeof at === 'string' ? at : nowIso,
    ua: req.headers['user-agent'] || '',
    ip: (req.headers['x-forwarded-for'] ||
      req.socket.remoteAddress ||
      '') as string,
  };

  const event = req.body;
  
  try {
    if (!fs.existsSync(LOG_DIR)) {
      fs.mkdirSync(LOG_DIR, { recursive: true });
    }
    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n');
  } catch (e) {
    // ignore file errors in serverless
  }

  res.status(200).json({ ok: true });
}
