<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { createDispute, readAllDisputes } from '../../../utils/fsdb',
import { parseUserFromRequest } from '../../../utils/auth',
import { DisputeCase, DisputeReason } from '../../../types/disputes',
import { generateCaseId } from '../../../utils/fsdb',
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req),

  if (req.method === 'GET') {
    const all = await readAllDisputes(),
    let filtered = all,
    if (user.role !== 'admin') {
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id)
    }
    return res.status(200).json({ disputes: filtered })
  }

  if (req.method === 'POST') {
    const now = new Date().toISOString(),
    const {
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      reason,
      reasonDetails,
      description} = req.body || {},

    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {
      return res.status(400).json({ error: 'Missing required fields' })
    }

    const id = generateCaseId(),
    const dispute: DisputeCase = {
      id,
      projectId: String(projectId),
      entityType,
      entityId,
      clientUserId: String(clientUserId),
      talentUserId: String(talentUserId),
      createdAt: now,
      updatedAt: now,
      status: 'Open',
      reason: reason as DisputeReason,
      reasonDetails,
      description,
      attachments: [],
      messages: []},

    await createDispute(dispute),
    return res.status(201).json({ dispute })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_const _user = parseUserFromRequest(req);

  if (req.method === 'GET') {
    const _all = await readAllDisputes();
    let _filtered = all;
    if (user.role !== 'admin') {
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id);}
    return res.status(200).json({_disputes: filtered});
  }

  if (req.method === 'POST') {_const _now = new Date().toISOString();
    const {
      projectId, _entityType, _entityId, _clientUserId, _talentUserId, _reason, _reasonDetails, _description} = req.body || {};

    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {_return res.status(400).json({ error: 'Missing required fields'});
    }

    const _id = generateCaseId();
    const dispute: DisputeCase = {_id, _projectId: String(projectId), _entityType, _entityId, _clientUserId: String(clientUserId), _talentUserId: String(talentUserId), _createdAt: now, _updatedAt: now, _status: 'Open', _reason: reason as DisputeReason, _reasonDetails, _description, _attachments: [], _messages: []};

    await createDispute(dispute);
    return res.status(201).json({_dispute});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }

  res.setHeader('AllowGET,POST'),
  return res.status(405).end('Method Not Allowed')
}