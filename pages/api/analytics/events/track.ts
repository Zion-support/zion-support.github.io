
const LOG_DIR = path.join(process.cwd(), 'dataanalytics')
const LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl')
function ensureLogFile() {
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const event = {
    name,
    page,
    user_type,
    properties,
    at: at && typeof at === 'string' ? at : nowIso, ua: req.headers['user-agent'] || '',
    ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string};

  try {
    ensureLogFile();
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n')
  } catch (e) {
    // ignore file errors in serverless;
  }
=======
res.status (200).json ({ ok: true });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
