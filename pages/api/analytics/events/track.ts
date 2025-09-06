
    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n')
  } catch (e) {
    // ignore file errors in serverless
  }

res.status(200).json({ ok: true });
};
import type { NextApiRequest, NextApiResponse } from 'next';
import { ensureAdmin } from '../../../utils/auth';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    ensureLogFile();
    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n')
  } catch (e) {
    // ignore file errors in serverless
  }

  res.status(200).json({ ok: true })
}
