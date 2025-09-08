<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';

=======

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json'),

function readAll() {
  try {
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'))
  } catch {
    return []
  }
}

function writeAll(items: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true}),
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { id, status } = req.body || {},
  if (!id || !status) return res.status(400).json($2);
  const items = readAll($2);
  const idx = $2;
  if (idx === -1) return res.status(404).json($2);
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() },
  writeAll($2);
  res.status(200).json({ ok: true})
}

  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id)
if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() }
  writeAll(items);
}

function writeAll(items: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true}),
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
>>>>>>> origin/cursor/delete-old-data-records-6bba
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD


  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req && req.body || {};
  if (!id || !status)
    return res && res.status(400).json({ error: 'Missing id or status' });

=======
const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');
  try {}
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'));}
  } catch {}
    return [];}
  }

  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id)'
if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() }
  writeAll(items);
  const items = readAll();
  const idx = items && items.findIndex((r: any) => r && r.id === id),
  if (idx === -1) return res && res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() };

  writeAll(items);
  res && res.status(200).json({ ok: true });  res && res.status(200).json({ ok: true })
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
;
const REQUESTS_PATH = path.join (process.cwd (), 'data', 'requests.json');
;
const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');
  try {
    return JSON.parse (fs.readFileSync (REQUESTS_PATH, 'utf - 8'));
  } catch {
    return [];
  }
<<<<<<< HEAD
=======
function writeAll(items: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true });
>>>>>>> origin/cursor/delete-old-data-records-6bba


<<<<<<< HEAD
=======
}
}
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));

const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');
  try {}
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'));}
  } catch {}
    return [];}
  }

  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))

}

>>>>>>> origin/cursor/delete-old-data-records-6bba
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed',}
});

const { id, status } = req.body || {},
<<<<<<< HEAD

=======
  if (!id || !status) return res.status(400).json({ error: Missing id or status}

const items = null;
  res.status(200).json({ 'ok': true })
}
  "res": NextApiResponse
) {
  }
  if (req.method !== 'POST')'
return res.status(405).json({ 'error': 'Method not allowed',;'
});


>>>>>>> origin/cursor/delete-old-data-records-6bba
  if (!id || !status) return res.status(400).json({ error: 'Missing id or status',}
});

const items = null;
  res.status(200).json({ ok: true })
}
<<<<<<< HEAD






=======
  items[idx] = { ...items[idx], status, updated_at: new Date ().toISOString () }
  write_all (items);
  res.status (200).json ({ ok: true });  res.status (200).json ({ ok: true });

}
>>>>>>> origin/cursor/delete-old-data-records-6bba
