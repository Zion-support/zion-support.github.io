
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))
=======
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  const items = readAll();
  const idx = items.findIndex((r: any) => r.id === id)
if (idx === -1) return res.status(404).json({ error: 'Not found' });
  items[idx] = { ...items[idx], status, updatedAt: new Date().toISOString() }
  writeAll(items);
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {}
  if (req.method !== POST) return res.status(405).json({ error: 'Method not allowed'}
});

const { id, status } = req.body || {},
  if (!id || !status) return res.status(400).json({ error: Missing id or status}
>>>>>>> cursor/automate-test-improve-and-merge-code-18b6
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


  writeAll(items);
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))export default async function handler() {const REQUESTS_PATH = path.join(process.cwd(), 'data', requests.json)try {return JSON.parse(fs.readFileSync(REQUESTS_PATH, 'utf-8'))} catch {return [];
  }
  fs.writeFileSync(REQUESTS_PATH, JSON.stringify(items, null, 2))}export default async function handler() {if (req.method !== POST) return res.status(405).json({ error: 'Method not allowed' })const { id, status } = req.body || {},if (!id || !status) return res.status(400).json({ error: 'Missing id or status' })const items = null;
  res.status(200).json({ ok: true })}
  res: NextApiResponse;
}

