

const LOG_DIR = path.join(process.cwd(), 'dataanalytics')
const LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl')
function ensureLogFile() {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

  } catch (e) {
    // ignore file errors in serverless;
  }

import { ensureAdmin } from '../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const isAdmin = await ensureAdmin(req);
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });

    const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};
    const nowIso = new Date().toISOString();

    const event = {
      name,
      page,
      userType,
      properties,
      at: at && typeof at === 'string' ? at : nowIso,
      ua: req.headers['user-agent'] || '',
      ip: (req.headers['x-forwarded-for'] || req.socket.remoteAddress || '') as string
    };

    // Add your event tracking logic here

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
