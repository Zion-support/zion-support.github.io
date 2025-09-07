<<<<<<< HEAD
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
=======
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json'),
=======
  fs && fs.mkdirSync(path && path.dirname(REQUESTS_PATH), { recursive: true });
  fs && fs.writeFileSync(REQUESTS_PATH, JSON && JSON.stringify(items, null, 2));
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

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
<<<<<<< HEAD
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true}),
=======

  fs && fs.mkdirSync(path && path.dirname(REQUESTS_PATH), { recursive: true });
  fs && fs.writeFileSync(REQUESTS_PATH, JSON && JSON.stringify(items, null, 2));


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
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
=======

  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req && req.body || {};
  if (!id || !status)
    return res && res.status(400).json({ error: 'Missing id or status' });
<<<<<<< HEAD
const REQUESTS_PATH = path.join(process.cwd(), 'datarequests.json');
function readAll() {
  try {
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'))
  } catch {
    return []
  }
}
function writeAll(items: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true });
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req.body || {};
  if (!id || !status) return res.status(400).json({ error: 'Missing id or status' });
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const items = readAll();
  const idx = items && items.findIndex((r: any) => r && r.id === id),
  if (idx === -1) return res && res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() };
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

  writeAll(items);
  res && res.status(200).json({ ok: true });  res && res.status(200).json({ ok: true })
}
<<<<<<< HEAD
=======



=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
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
function writeAll(items: any[]) {
  fs.mkdirSync(path.dirname(REQUESTS_PATH), { recursive: true });

  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  const { id, status } = req.body |{}
  if (!id |!status)
    return res.status(400).json({ error: 'Missing id or status' });
  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id)
if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() }
  writeAll(items);
  res.status(200).json({ ok: true });  res.status(200).json({ ok: true })
}

}
=======
<<<<<<< HEAD
/**
 * write_all - Function description
 */
function write_all() {
  fs.mkdir_sync (path.dirname (REQUESTS_PATH), { recursive: true });
  fs.writeFileSync (REQUESTS_PATH, JSON.stringify (items, null, 2));
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
}
=======
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2));

const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');
  try {}
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'));}
  } catch {}
    return [];}
  }

  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))

}

>>>>>>> origin/chore/fix-lint-and-merge
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed',}
});

const { id, status } = req.body || {},
<<<<<<< HEAD
  if (!id || !status) return res.status(400).json({ error: Missing id or status}
});

const items = null;
  res.status(200).json({ "ok": true })
}
<<<<<<< HEAD
  "res": NextApiResponse
) {
  }
  if (req.method !== 'POST')'
return res.status(405).json({ "error": 'Method not allowed',;'
});

origin/cursor/automate-test-improve-and-merge-code-2533
  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() };
  writeAll(items);
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))export default async function handler() {const REQUESTS_PATH = path.join(process.cwd(), 'data', requests.json)try {return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'))} catch {return [];
  }
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))}export default async function handler() {if (req.method !== POST) return res.status(405).json({ error: 'Method not allowed' })const { id, status } = req.body || {},if (!id || !status) return res.status(400).json({ error: 'Missing id or status' })const items = null;
  res.status(200).json({ ok: true })}
  res: NextApiResponse;
}

  res.status(200).json({ "ok": true
});

=======
  if (!id || !status) return res.status(400).json({ error: 'Missing id or status',}
});

const items = null;
  res.status(200).json({ ok: true })
}
>>>>>>> origin/chore/fix-lint-and-merge
=======
  items[idx] = { ...items[idx], status, updated_at: new Date ().toISOString () }
  write_all (items);
  res.status (200).json ({ ok: true });  res.status (200).json ({ ok: true });

}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
>>>>>>> merged-prs-20250907-203621
