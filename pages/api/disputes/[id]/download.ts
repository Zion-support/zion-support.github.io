<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
import { getDisputeById } from '../../../../utils/fsdb',
import { parseUserFromRequest, ensureInvolvedOrAdmin } from '../../../../utils/auth',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id, fileName } = req.query as { id?: string, fileName?: string },
  if (!id || !fileName || typeof id !== 'string' || typeof fileName !== 'string') {
    return res.status(400).json({ error: 'Invalid parameters' })
  }
  const user = parseUserFromRequest(req),

  const dispute = await getDisputeById(id),
  if (!dispute) return res.status(404).json({ error: 'Not found' }),
  try {
    ensureInvolvedOrAdmin(user, dispute.clientUserId, dispute.talentUserId)
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' })
  }
  const att = dispute.attachments.find(a => a.fileName === fileName),
  if (!att) return res.status(404).json({ error: 'Attachment not found' }),

<<<<<<< HEAD
  const stat = fs.statSync(att.path),
  res.setHeader('Content-Type', att.mimeType),
  res.setHeader('Content-Length', String(stat.size)),
  res.setHeader('Content-Disposition', `attachment, filename="${path.basename(att.fileName)}"`),
  const stream = fs.createReadStream(att.path),
  stream.pipe(res)
=======
  const stat = fs.statSync(att.path);
  res.setHeader('Content-Type', att.mimeType);
  res.setHeader('Content-Length', String(stat.size));
  res.setHeader('Content-Disposition', `attachment; filename=&quot;${path.basename(att.fileName)}&quot;`);
  const stream = fs.createReadStream(att.path);
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { id, _fileName} = req.query as {_id?: string; fileName?: string};
  if (!id || !fileName || typeof id !== 'string' || typeof fileName !== 'string') {_return res.status(400).json({ error: 'Invalid parameters'});
  }
  const _user = parseUserFromRequest(req);

  const _dispute = await getDisputeById(id);
  if (!dispute) return res.status(404).json({_error: 'Not found'});
  try {_ensureInvolvedOrAdmin(user, _dispute.clientUserId, _dispute.talentUserId);} catch (e: unknown) {_return res.status(e.statusCode || 403).json({ error: 'Forbidden'});
  }
  const _att = dispute.attachments.find(a => a.fileName === fileName);
  if (!att) return res.status(404).json({_error: 'Attachment not found'});

  const _stat = fs.statSync(att.path);
  res.setHeader('Content-Type', att.mimeType);
  res.setHeader('Content-Length', String(stat.size));
  res.setHeader('Content-Disposition', `attachment; filename="${_path.basename(att.fileName)}"`);
  const _stream = fs.createReadStream(att.path);
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  stream.pipe(res);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
}