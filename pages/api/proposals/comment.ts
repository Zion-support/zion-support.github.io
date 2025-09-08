import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
async function ensure() {
  await fs.ensureFile(FILE_PATH);
  try { await fs.readJson(FILE_PATH) } catch { await fs.writeJson(FILE_PATH, {,
    comments: [] }, {,
    spaces: 2 }) }
}

export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  await ensure();
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data)
  }
  if (req.method === 'POST') {
    const body = req.body || {};
    const data = await fs.readJson(FILE_PATH);
    const comment = {,
    id: Date.now().toString();,
    proposalId: body.proposalId,
      r,
    egion: body.region || 'Global',
      a,
    uthor: body.author || 'anon',
      t,
    ext: body.text || '',
      c,
    reatedAt: new Date().toISOString()},
    data.comments.push(comment);
    await fs.writeJson(FILE_PATH, data, {,
    spaces: 2 });
    return res.status(201).json(comment)
  }
  res.status(405).json({,
    error: 'Method not allowed' })
}