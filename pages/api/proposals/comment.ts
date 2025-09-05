<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs-extra',
import path from 'path',
const FILE_PATH = path.join(process.cwd(), 'dataproposalscomments.json'),

async function ensure() {
  await fs.ensureFile(FILE_PATH),
  try { await fs.readJson(FILE_PATH) } catch { await fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 }) }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensure(),
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH),
    return res.status(200).json(data)
  }
  if (req.method === 'POST') {
    const body = req.body || {},
    const data = await fs.readJson(FILE_PATH),
    const comment = {
      id: Date.now().toString(),
      proposalId: body.proposalId,
      region: body.region || 'Global',
      author: body.author || 'anon',
      text: body.text || '',
      createdAt: new Date().toISOString()},
    data.comments.push(comment),
    await fs.writeJson(FILE_PATH, data, { spaces: 2 }),
    return res.status(201).json(comment)
  }
  res.status(405).json({ error: 'Method not allowed' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs-extra';
import path from 'path';

const _FILE_PATH = path.join(process.cwd(), 'data', 'proposals', 'comments.json');

async function ensure() {_await fs.ensureFile(FILE_PATH);
  try { await fs.readJson(FILE_PATH);} catch {_await fs.writeJson(FILE_PATH, _{ comments: []}, {_spaces: 2}); }
}

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_await ensure();
  if (req.method === 'GET') {
    const _data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);}
  if (req.method === 'POST') {_const _body = req.body || {};
    const _data = await fs.readJson(FILE_PATH);
    const _comment = {_id: Date.now().toString(), _proposalId: body.proposalId, _region: body.region || 'Global', _author: body.author || 'anon', _text: body.text || '', _createdAt: new Date().toISOString()};
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, {_spaces: 2});
    return res.status(201).json(comment);
  }
  res.status(405).json({_error: 'Method not allowed'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}