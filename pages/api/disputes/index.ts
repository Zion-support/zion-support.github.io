import type { NextApiRequest, NextApiResponse } from 'next';
import { parseUserFromRequest } from '../../../utils/auth';
import { readFile, writeFile } from '../../../utils/fsdb';

type DisputeReason = 'payment' | 'quality' | 'communication' | 'timeline' | 'other';

interface DisputeCase {
  id: string;
  projectId: string;
  entityType: string;
  entityId: string;
  clientUserId: string;
  talentUserId: string;
  createdAt: string;
  updatedAt: string;
  status: 'Open' | 'In Progress' | 'Resolved' | 'Closed';
  reason: DisputeReason;
  reasonDetails?: string;
  description: string;
  attachments: any[];
  messages: any[];
}

function generateCaseId(): string {
  return `DISPUTE-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = parseUserFromRequest(req);
  if (!user) return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'GET') {
    const disputes = readFile('disputes.json', []);
    const filtered = disputes.filter((d: DisputeCase) => 
      user.role === 'admin' || d.clientUserId === user.id || d.talentUserId === user.id
    );
    return res.status(200).json({ disputes: filtered });
  }

  if (req.method === 'POST') {
    const now = new Date().toISOString();
    const {
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      reason,
      reasonDetails,
      description
    } = req.body || {};

    if (!projectId || !clientUserId || !talentUserId || !reason || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const id = generateCaseId();
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
      messages: []
    };

    const disputes = readFile('disputes.json', []);
    disputes.push(dispute);
    writeFile('disputes.json', disputes);
    return res.status(201).json({ dispute });
  }

  res.setHeader('Allow', ['GET', 'POST']);
  return res.status(405).end('Method Not Allowed');
}