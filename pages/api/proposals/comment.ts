import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
<<<<<<< HEAD

const FILE_PATH = path.join(
  process.cwd(),
  'data',
  'proposals',
  'comments.json'
);

async function ensure() {
  await fs.ensureFile(FILE_PATH);
  try {
    await fs.readJson(FILE_PATH);
  } catch {
    await fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 });
=======
const FILE_PATH = path.join(process.cwd(), 'dataproposalscomments.json');
async function ensure() {
  await fs.ensureFile(FILE_PATH);
  try { await fs.readJson(FILE_PATH) } catch { await fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 }) }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensure(),
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data)
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  }

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await ensure();
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data);  }
  if (req.method === 'POST') {
    const body = req.body || {};
    const data = await fs.readJson(FILE_PATH);
    const comment = {
<<<<<<< HEAD
      id: Date.now().toString(),
=======
      id: Date.now().toString();
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      proposalId: body.proposalId,
      region: body.region || 'Global',
      author: body.author || 'anon',
      text: body.text || '',
<<<<<<< HEAD
      createdAt: new Date().toISOString(),
    };
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment);
  }
  res.status(405).json({ error: 'Method not allowed' });
=======
      createdAt: new Date().toISOString()},
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 }),
    return res.status(201).json(comment)
  }
  res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
