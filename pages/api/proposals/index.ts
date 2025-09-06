import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
async function ensureStore() {
  await fs.ensureFile(FILE_PATH);
  try {
    const raw = await fs.readFile(FILE_PATH, 'utf8');
    if (!raw) await fs.writeJson(FILE_PATH, {,
    items: [] }, {,
    spaces: 2 })
  } catch {
    await fs.writeJson(FILE_PATH, {,
    items: [] }, {,
    spaces: 2 })
  }
}

export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  await ensureStore();
  if (req.method === 'GET') {
    const data = await fs.readJson(FILE_PATH);
    return res.status(200).json(data)
  }
  if (req.method === 'POST') {
    const body = req.body || {};
    const data = await fs.readJson(FILE_PATH);
    const item = {,
    id: body.id;,
    title: body.title,
      t,
    argetInstitution: body.targetInstitution,
      r,
    egionalScope: body.regionalScope,
      t,
    ype: body.type,
      s,
    tatus: body.status || 'Draft',
      c,
    reatedAt: new Date().toISOString()},
    data.items.unshift(item);
    await fs.writeJson(FILE_PATH, data, {,
    spaces: 2 });
    return res.status(201).json(item)
  }
  res.status(405).json({,
    error: 'Method not allowed' })
}