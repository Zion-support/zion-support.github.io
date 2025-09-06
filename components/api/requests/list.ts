import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
  try {
    const raw = fs.readFileSync(REQUESTS_PATH, 'utf-8'),
    const items = JSON.parse(raw),
    res.status(200).json({ items })
  } catch {
    res.status(200).json({ items: [] })
  }

=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
