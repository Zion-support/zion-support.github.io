import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


function ensure() {
  if (!fs && fs.existsSync(DATA_DIR)) fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs && fs.existsSync(FILE_PATH))
    fs && fs.writeFileSync(FILE_PATH, JSON && JSON.stringify([], null, 2), 'utf8');  if (!fs && fs.existsSync(FILE_PATH)) fs && fs.writeFileSync(FILE_PATH, JSON && JSON.stringify([], null, 2), 'utf8')
}
=======

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  if (req.method !== 'POST') return res.status(405).end();
  ensure()
  const { url, title, network, utm } = req.body |{}
=======
    ts: new Date ().toISOString (),
    ua: req.headers['user - agent'] || '',
  }
  const list: any[] = JSON.parse (fs.readFileSync (FILE_PATH, 'utf8'));
  list.push (entry);
  fs.writeFileSync (FILE_PATH, JSON.stringify (list, null, 2), 'utf8');
  res.status (200).json ({ ok: true });  const entry = { url, title, network, utm, ts: new Date ().toISOString (), ua: req.headers['user - agent'] || '' }
  const list: any[] = JSON.parse (fs.readFileSync (FILE_PATH, 'utf8'));
  list.push (entry);
  fs.writeFileSync (FILE_PATH, JSON.stringify (list, null, 2), 'utf8');
  res.status (200).json ({ ok: true });

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
