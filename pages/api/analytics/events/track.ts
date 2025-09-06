

const LOG_DIR = path.join(process.cwd(), 'dataanalytics')
const LOG_FILE = path.join(LOG_DIR, 'events.log.jsonl')
function ensureLogFile() {
  if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true })
  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

res.status(200).json({ ok: true });
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin } from '../../../utils/auth';

  try {
    ensureLogFile (),
    fs.appendFileSync (LOG_FILE, JSON.stringify (event) + '\n');

  } catch (e) {
    // ignore file errors in serverless;
  }


  res.status(200).json({ ok: true })
}


