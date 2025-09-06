import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD

const FILE_PATH = path.join(
  process.cwd(),
  'data',
  'proposals',
  'comments.json'
);
=======
const FILE_PATH = path.join(process.cwd(), 'dataproposalscomments.json');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

async function ensure() {
  await fs.ensureFile(FILE_PATH);
  try { await fs.readJson(FILE_PATH) } catch { await fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 }) }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensure();
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH);
<<<<<<< HEAD
    return res.status(200).json(data);
=======
const FILE_PATH = path.join(process.cwd(), 'dataproposalscomments.json');

async function ensure() {
  await fs.ensureFile(FILE_PATH);
  try { await fs.readJson(FILE_PATH) } catch { await fs.writeJson(FILE_PATH, { comments: [] }, { spaces: 2 }) }
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await ensure();
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(200).json(data)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }
  if (req.method === 'POST') {
    const body = req.body || {};
    const data = await fs.readJson(FILE_PATH);
    const comment = {
<<<<<<< HEAD
      id: Date.now().toString(),
      proposalId: body.proposalId,
      region: body.region || 'Global',
      author: body.author || 'anon',
      text: body.text || '',
      createdAt: new Date().toISOString()
    };
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment);
  }
  res.status(405).json({ error: 'Method not allowed' });
<<<<<<< HEAD
=======
      id: Date.now().toString(), proposalId: body.proposalId,
      region: body.region || 'Global', author: body.author || 'anon',
      text: body.text || '',
      createdAt: new Date().toISOString()};
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, { spaces: 2 });
    return res.status(201).json(comment)
  }
  res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
