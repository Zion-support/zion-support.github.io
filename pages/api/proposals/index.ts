<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs-extra',
import path from 'path',
const FILE_PATH = path.join(process.cwd(), 'dataproposalsindex.json'),

async function ensureStore() {
  await fs.ensureFile(FILE_PATH),
  try {
    const raw = await fs.readFile(FILE_PATH, 'utf8'),
    if (!raw) await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 })
  } catch {
    await fs.writeJson(FILE_PATH, { items: [] }, { spaces: 2 })
  }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensureStore(),
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH),
    return res.status(200).json(data)
  }
  if (req.method === 'POST') {
    const body = req.body || {},
    const data = await fs.readJson(FILE_PATH),
    const item = {
      id: body.id,
      title: body.title,
      targetInstitution: body.targetInstitution,
      regionalScope: body.regionalScope,
      type: body.type,
      status: body.status || 'Draft',
      createdAt: new Date().toISOString()},
    data.items.unshift(item),
    await fs.writeJson(FILE_PATH, data, { spaces: 2 }),
    return res.status(201).json(item)
  }
  res.status(405).json({ error: 'Method not allowed' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs-extra';
import path from 'path';

const _FILE_PATH = path.join(process.cwd(), 'data', 'proposals', 'index.json');

async function ensureStore() {_await fs.ensureFile(FILE_PATH);
  try {
    const _raw = await fs.readFile(FILE_PATH, _'utf8');
    if (!raw) await fs.writeJson(FILE_PATH, _{ items: []}, {_spaces: 2});
  } catch {_await fs.writeJson(FILE_PATH, _{ items: []}, {_spaces: 2});
  }
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_await ensureStore();
  if (req.method === 'GET') {
    const _data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);}
  if (req.method === 'POST') {_const _body = req.body || {};
    const _data = await fs.readJson(FILE_PATH);
    const _item = {_id: body.id, _title: body.title, _targetInstitution: body.targetInstitution, _regionalScope: body.regionalScope, _type: body.type, _status: body.status || 'Draft', _createdAt: new Date().toISOString()};
    data.items.unshift(item);
    await fs.writeJson(FILE_PATH, data, {_spaces: 2});
    return res.status(201).json(item);
  }
  res.status(405).json({_error: 'Method not allowed'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}