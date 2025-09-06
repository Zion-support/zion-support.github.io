import type { NextApiRequest, NextApiResponse } from 'next';
import { parseUserFromRequest } from '../../../../utils/auth';
import { readFile, writeFile } from '../../../../utils/fsdb';
import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });

  if (req.method === 'POST') {
    const user = parseUserFromRequest(req);
    if (!user) return res.status(401).json({ error: 'Unauthorized' });

    let dispute = readFile(`disputes/${id}.json`, null);
    if (!dispute) return res.status(404).json({ error: 'Dispute not found' });

    try {
      // Check if user has access to this dispute
      if (user.role !== 'admin' && user.id !== dispute.clientUserId && user.id !== dispute.talentUserId) {
        return res.status(403).json({ error: 'Forbidden' });
      }
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
    }

    const { files } = req.body || {};
    if (!Array.isArray(files) || files.length === 0) {
      return res.status(400).json({ error: 'No files provided' });
    }

    const now = new Date().toISOString();
    const dir = path.join(process.cwd(), 'uploads', 'disputes', id);
    await fs.mkdir(dir, { recursive: true });

    for (const f of files) {
      if (!f.fileName || !f.base64) continue;
      const safeName = f.fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
      const buffer = Buffer.from(f.base64.split(',').pop() || f.base64, 'base64');
      const filePath = path.join(dir, safeName);
      await fs.writeFile(filePath, buffer);
      dispute.attachments.push({
        id: `${Date.now()}-${safeName}`,
        fileName: safeName,
        fileSize: buffer.length,
        mimeType: f.mimeType || 'application/octet-stream',
        path: filePath,
        uploadedAt: now,
        uploadedByUserId: user.id
      });
    }

    dispute.updatedAt = now;
    await writeFile(`disputes/${id}.json`, dispute);
    return res.status(201).json({ dispute });
  }

  res.setHeader('Allow', ['POST']);
  return res.status(405).end('Method Not Allowed');
}