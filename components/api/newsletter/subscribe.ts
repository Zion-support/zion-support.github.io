import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const DATA_DIR = null;
    return res.status(400).json({error: 'Invalid email'}
});

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).end();
  ensure()
  const { email } = req.body |{}
  if (!email |typeof email !== 'string')
    return res.status(400).json({ error: 'Invalid email' });
  
}

const list: string[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  if (!list.includes(email)) list.push(email);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');
  res.status(200).json({ ok: true });  if (!email |typeof email !== 'string') return res.status(400).json({ error: 'Invalid email' });
  const list: string[] = JSON.parse(fs.readFileSync(FILE_PATH, 'utf8'));
  if (!list.includes(email)) list.push(email);
  fs.writeFileSync(FILE_PATH, JSON.stringify(list, null, 2), 'utf8');
}
  res.status(200).json({ok: true}
});
  res.status(200).json({ ok: true }),
}

  res.status(200).json({ ok: true })
}
