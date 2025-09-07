import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra',
import path from 'path';
const FILE_PATH = path.join(process.cwd(), 'dataproposalsindex.json'),

async function ensureStore() {
  await fs.ensureFile($2);
  try {
    const raw = await fs.readFile($2);
    if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2})
  } catch {
    await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2})
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensureStore($2);
  if (req.method === 'GET') {
    const data = await fs.readJson($2);
    return res.status(200).json(data)
  }
  if (req.method = $2;
    const data = await fs.readJson($2);
    const item = $2;
      title: body.title,
      targetInstitution: body.targetInstitution,
      regionalScope: body.regionalScope,
      type: body.type,
      status: body.status || 'Draft',
      createdAt: new Date().toISOString()},
    data.items.unshift($2);
    await fs.writeJson($2);
    return res.status(201).json(item)
  }
  res.status(405).json({ error: 'Method not allowed' })
}