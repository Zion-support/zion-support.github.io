import type { NextApiRequest, NextApiResponse } from 'next';
import { createDispute, readAllDisputes } from '../../../utils/fsdb';
import { parseUserFromRequest } from '../../../utils/auth';
import { DisputeCase, DisputeReason } from '../../../types/disputes';
import { generateCaseId } from '../../../utils/fsdb';
export default async function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  const user = parseUserFromRequest(req);
  if (req.method === 'GET') {
    const all = await readAllDisputes();
    let filtered = all;
    if (user.role !== 'admin') {
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id)
    }
    return res.status(200).json({,
    disputes: filtered })
  }

  if (req.method === 'POST') {
    const now = new Date().toISOString();
    const {
      projectId;
      entityType;
      entityId;
      clientUserId;
      talentUserId;
      reason;
      reasonDetails;
      description} = req.body || {};
    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {
      return res.status(400).json({,
    error: 'Missing required fields' })
    }

    const id = generateCaseId();
    const,
    dispute: DisputeCase = {
      id;,
    projectId: String(projectId);
      entityType;
      entityId,
      c,
    lientUserId: String(clientUserId),
      t,
    alentUserId: String(talentUserId),
      c,
    reatedAt: now,
      u,
    pdatedAt: now,
      s,
    tatus: 'Open',
      r,
    eason: reason as DisputeReason,
      reasonDetails;
      description,
      a,
    ttachments: [],
      m,
    essages: []},
    await createDispute(dispute);
    return res.status(201).json({ dispute })
  }
}