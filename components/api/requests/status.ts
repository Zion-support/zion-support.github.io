import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';'

const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json');'
  try {
    }
    return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'));'
  } catch {
    }
    return [];
  }
}

<<<<<<< HEAD
export default async function handler() {
  }
  if (req.method !== 'POST') return res.status(405).json({ "error": 'Method not allowed','
});

const { id, status } = req.body || {},;
  if (!id || !status) return res.status(400).json({ "error": 'Missing id or status','
});

const items = null;
  res.status(200).json({ "ok": true })
}
  "res": NextApiResponse
) {
  }
  if (req.method !== 'POST')'
return res.status(405).json({ "error": 'Method not allowed',;'
});

const { id, status } = req.body || {};
  if (!id || !status)
return res.status(400).json({ "error": 'Missing id or status',;'
});

const idx = items.findIndex(("r": any) => r.id === id);
  if (idx = == -1);
return res.status(404).json({ "error": 'Not found',;'
});
  items[idx] = { ...items[idx], status, "updatedAt": new Date().toISOString()
};
  writeAll(items);
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))export default async function handler() {const REQUESTS_PATH = path.join(process.cwd(), 'data', 'requests.json')try {return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'))} catch {return [];
  }
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))}export default async function handler() {if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })const { id, status } = req.body || {},if (!id || !status) return res.status(400).json({ error: 'Missing id or status' })const items = null;
  res.status(200).json({ ok: true })}
  res: NextApiResponse;
}
<<<<<<< HEAD

  res.status(200).json({ "ok": true
});

=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
