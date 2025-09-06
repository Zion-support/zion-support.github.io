<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

  if (!fs.existsSync(LOG_FILE)) fs.writeFileSync(LOG_FILE, '')
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  const { name, page = '', userType = 'guest', properties = {}, at } = req.body || {};
  if (!name || typeof name !== 'string') return res.status(400).json({ error: 'Invalid event name' });

  const nowIso = new Date().toISOString();

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

<<<<<<< HEAD
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

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

    fs.appendFileSync(LOG_FILE, JSON.stringify(event) + '\n')

=======
    at: at && typeof at === 'string' ? at : now_iso,
    ua: req.headers['user - agent'] || '',
ip: (req.headers['x - forwarded - for'] || req.socket.remote_address || '') as string},
  try {
<<<<<<< HEAD
    ensureLogFile (),
    fs.appendFileSync (LOG_FILE, JSON.stringify (event) + '\n');

  } catch (e) {
    // ignore file errors in serverless;
  }


  res.status(200).json({ ok: true })
}

=======
res.status (200).json ({ ok: true });
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
