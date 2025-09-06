import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
=======
import type { GrantApplication, StatusUpdatePayload } from '../../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants'),
function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`),
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true }),
  const p = grantPath(id),
  if (!fs.existsSync(p)) return null,

=======
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
}

function writeGrant(record: GrantApplication) {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true }),
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

function isAuthorized(req: NextApiRequest) {
  const header = req.headers.authorization || '',
  const token = header.replace('Bearer ', ''),

=======
  return token && process.env.ZION_ADMIN_TOKEN && token === process.env.ZION_ADMIN_TOKEN
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!isAuthorized(req)) {
    res.status(401).json({ error: 'Unauthorized' }),

=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const { id } = req.query as { id: string },
  if (!id) {
    res.status(400).json({ error: 'Missing id' }),

  }

  if (req.method !== 'POST') {
    res.setHeader('AllowPOST'),
    res.status(405).end('Method Not Allowed'),

=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const existing = readGrant(id),
  if (!existing) {
    res.status(404).json({ error: 'Not found' }),

=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  const payload = req.body as StatusUpdatePayload,
  existing.status = payload.status,
  existing.updatedAt = new Date().toISOString(),
  writeGrant(existing),

=======
  res.status(200).json({ record: existing })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
