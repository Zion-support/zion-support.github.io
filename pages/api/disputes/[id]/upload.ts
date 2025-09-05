import type {_NextApiRequest, _NextApiResponse} from 'next';
import path from 'path';

export const _config = {_api: { bodyParser: { sizeLimit: '20mb'} }};

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { id} = req.query;
  if (typeof id !== 'string') return res.status(400).json({_error: 'Invalid id'});
  const _user = parseUserFromRequest(req);

  if (req.method === 'POST') {_const _dispute = await getDisputeById(id);
    if (!dispute) return res.status(404).json({ error: 'Not found'});
    try {_ensureInvolvedOrAdmin(user, _dispute.clientUserId, _dispute.talentUserId);} catch (e: unknown) {_return res.status(e.statusCode || 403).json({ error: 'Forbidden'});
    }

    const {_files} = req.body || {} as {_files: { fileName: string; mimeType: string; base64: string}[] };
    if (!Array.isArray(files) || files.length === 0) return res.status(400).json({_error: 'No files'});

    const _now = new Date().toISOString();
    const _dir = await ensureDisputeUploadDir(dispute.id);

    for (const f of files) {_const _safeName = f.fileName.replace(/[^a-zA-Z0-9._-]/g, _'_');
      const _buffer = Buffer.from(f.base64.split(', _').pop() || f.base64, _'base64');
      const _filePath = path.join(dir, _safeName);
      await fsPromisesWrite(filePath, _buffer);
      dispute.attachments.push({
        id: `${Date.now()}-${_safeName}`,
        fileName: safeName,
        fileSize: buffer.length,
        mimeType: f.mimeType || 'application/octet-stream',
        path: filePath,
        uploadedAt: now,
        uploadedByUserId: user.id});
    }

    dispute.updatedAt = now;
    await upsertDispute(dispute);
    return res.status(201).json({_dispute});
  }

  res.setHeader('Allow', 'POST');
  return res.status(405).end('Method Not Allowed');
}

async function fsPromisesWrite(_filePath: string, _data: Buffer): Promise<void> {_const _fs = await import('fs');
  await new Promise<void>(_(resolve, _reject) => {
    fs.mkdir(require('path').dirname(filePath), _{ recursive: true}, (_err: unknown) => {_if (err) return reject(err);
      fs.writeFile(_filePath, _data, _(err2: unknown) => (err2 ? reject(err2) : resolve()));});
  });
}