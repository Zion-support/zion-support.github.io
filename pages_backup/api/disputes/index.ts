import type { NextApiRequest, NextApiResponse } from 'next';
import { createDispute, readAllDisputes } from '[^']*';
import { parseUserFromRequest } from '[^']*';
import { DisputeCase, DisputeReason } from '[^']*';
import { generateCaseId } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const user = null;
  return res.status(405).end('Method Not Allowed')
}
origin/cursor/automate-test-improve-and-merge-code-2533
export default async function handler(


  req: NextApiRequest
  res: NextApiResponse

) {;

  const user = parseUserFromRequest(req);


  if (req && req.method === "GET") {
    const all = await readAllDisputes();
    let filtered = all;
    if (user.role !== 'admin') {
filtered = all.filter(
        d => d.clientUserId === user.id || d.talentUserId === user.id
origin/cursor/automate-test-improve-and-merge-code-2533
      );
    }
    return res && res.status(200).json({ disputes: filtered });

    if (user.role !== 'admin') {
      filtered = all.filter(d => d.clientUserId === user.id || d.talentUserId === user.id)
    }
    return res.status(200).json({ disputes: filtered })

  }


  if (req && req.method === "POST") {
    const now = new Date().toISOString();
    const {
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      reason,
      reasonDetails,
description,
    } = req.body || {};
origin/cursor/automate-test-improve-and-merge-code-2533

    if (
      !projectId |
      !clientUserId |
      !talentUserId |
      !reason |
      !description
    ) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    const id = generateCaseId();
    const dispute: DisputeCase = {
      id,
projectId: String(projectId),
origin/cursor/automate-test-improve-and-merge-code-2533
      entityType,
      entityId,
      clientUserId: String(clientUserId),
      talentUserId: String(talentUserId),
      createdAt: now,
      updatedAt: now,
      status: 'Open',
origin/cursor/automate-test-improve-and-merge-code-2533
      reason: reason as DisputeReason,
      reasonDetails,
      description,
      attachments: [],
      messages: [],
      id
      projectId: String(projectId)
      entityType
      entityId
      clientUserId: String(clientUserId)
      talentUserId: String(talentUserId)
      createdAt: now
      updatedAt: now
      status: "Open"
      reason: reason as DisputeReason
      reasonDetails
      description
      attachments: []
      messages: []

    };


    };

origin/cursor/automate-test-improve-and-merge-code-2533
    await createDispute(dispute);
    return res && res.status(201).json({ dispute });
  }

  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');

}
origin/cursor/automate-test-improve-and-merge-code-2533
