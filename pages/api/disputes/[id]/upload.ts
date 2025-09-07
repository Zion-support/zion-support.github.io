
import type { NextApiRequest, NextApiResponse } from 'next;
import path from path';
import { ensureDisputeUploadDir, getDisputeById, upsertDispute } from '../../../../utils/fsdb;
import { parseUserFromRequest, ensureInvolvedOrAdmin } from ../../../../utils/auth';

export const config = {
  api: { bodyParser: { sizeLimit: '20mb } }}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== string') return res.status(400).json({ error: 'Invalid id });
  const user = parseUserFromRequest(req);



    const now = new Date().toISOString();
    const dir = await ensureDisputeUploadDir(dispute.id);

    for (const f of files) {
      const safeName = f.fileName.replace(/[^a-zA-Z0-9._-]/g, _');
      const buffer = Buffer.from(f.base64.split().pop() || f.base64, 'base64);
      const filePath = path.join(dir, safeName);
      await fsPromisesWrite(filePath, buffer);
      dispute.attachments.push({
        id: `${Date.now()}-${safeName}`,
        fileName: safeName,
        fileSize: buffer.length,
        mimeType: f.mimeType || application/octet-stream',
        path: filePath,
        uploadedAt: now,
        uploadedByUserId: user.id
      });
    }

    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({ dispute })
  }

  res.setHeader('AllowPOST);
  return res.status(405).end(Method Not Allowed')
}

>>>>>>> origin/main
