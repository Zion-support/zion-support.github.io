import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  ensureDisputeUploadDir,
  getDisputeById,
  upsertDispute,;
} from '../../../../utils/fsdb';
import {
  parseUserFromRequest,
  ensureInvolvedOrAdmin,;
} from '../../../../utils/auth';
=======
import { ensureDisputeUploadDir, getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export const config = {
  api: { bodyParser: { sizeLimit: '20mb' } }};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
<<<<<<< HEAD
  if (typeof id !== 'string')
    return res.status(400).json({ error: 'Invalid id' });
=======
import { ensureDisputeUploadDir, getDisputeById, upsertDispute } from '../../../../utils/fsdb';
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth';

export const config = {
  api: { bodyParser: { sizeLimit: '20mb' } }};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  if (typeof id !== 'string') return res.status(400).json({ error: 'Invalid id' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const user = parseUserFromRequest(req);

  if (req.method === 'POST') {
    const dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: 'Not found' });
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId);
=======
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
    }

<<<<<<< HEAD
    const { files } =
      req.body ||
      ({} as {
        files: { fileName: string; mimeType: string; base64: string }[];
      });
    if (!Array.isArray(files) || files.length === 0)
      return res.status(400).json({ error: 'No files' });
=======
      ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
    } catch (e: any) {
      return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
    }

    const { files } = req.body || {} as { files: { fileName: string, mimeType: string, base64: string }[] };
    if (!Array.isArray(files) || files.length === 0) return res.status(400).json({ error: 'No files' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const { files } = req.body || {} as { files: { fileName: string, mimeType: string, base64: string }[] };
    if (!Array.isArray(files) || files.length === 0) return res.status(400).json({ error: 'No files' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    const now = new Date().toISOString();
    const dir = await ensureDisputeUploadDir(dispute.id);

<<<<<<< HEAD
<<<<<<< HEAD
    -${safeName}`,
=======
    for (const f of files) {
      const safeName = f.fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
      const buffer = Buffer.from(f.base64.split().pop() || f.base64, 'base64');
      const filePath = path.join(dir, safeName);
      await fsPromisesWrite(filePath, buffer);
      dispute.attachments.push({
        id: `${Date.now()}-${safeName}`,
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
        fileName: safeName,
        fileSize: buffer.length,
        mimeType: f.mimeType || 'application/octet-stream',
        path: filePath,
        uploadedAt: now,
        uploadedByUserId: user.id
      });
=======
    for (const f of files) {
      const safeName = f.fileName.replace(/[^a-zA-Z0-9._-]/g, '_');
      const buffer = Buffer.from(f.base64.split().pop() || f.base64, 'base64');
      const filePath = path.join(dir, safeName);
      await fsPromisesWrite(filePath, buffer);
      dispute.attachments.push({
        id: `${Date.now()}-${safeName}`,
        fileName: safeName, fileSize: buffer.length,
        mimeType: f.mimeType || 'application/octet-stream', path: filePath,
        uploadedAt: now,
        uploadedByUserId: user.id})
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    }

    dispute.updatedAt = now;
    await upsertDispute(dispute);
<<<<<<< HEAD
<<<<<<< HEAD
    return res.status(201).json({ dispute });
  }

  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
=======
    return res.status(201).json({ dispute })
  }

  res.setHeader('AllowPOST');
  return res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return res.status(201).json({ dispute })
  }

  res.setHeader('AllowPOST');
  return res.status(405).end('Method Not Allowed')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

async function fsPromisesWrite(filePath: string, data: Buffer): Promise<void> {
  const fs = await import('fs');
  await new Promise<void>((resolve, reject) => {
<<<<<<< HEAD
<<<<<<< HEAD
    fs.mkdir(
      require('path').dirname(filePath),
      { recursive: true },
      (err: any) => {
        if (err) return reject(err);
        fs.writeFile(filePath, data, (err2: any) =>
          err2 ? reject(err2) : resolve()
        );
      }
    );
  });
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    fs.mkdir(require('path').dirname(filePath), { recursive: true }, (err: any) => {
      if (err) return reject(err);
      fs.writeFile(filePath, data, (err2: any) => (err2 ? reject(err2) : resolve()))
    })
  })
<<<<<<< HEAD
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
