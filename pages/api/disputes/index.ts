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
  }

  res.setHeader('Allow', 'GET,POST');
  return res.status(405).end('Method Not Allowed');
}