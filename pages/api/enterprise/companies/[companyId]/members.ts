import type { NextApiRequest, NextApiResponse } from 'next';
// import { store } from '../../../../../utils/data/enterpriseStore';
import type { EnterpriseRole } from '../../../../../utils/types/enterprise';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' });
  }
  // const company = store.getCompanyById(companyId);
  // if (!company) return res.status(404).json({ error: 'company_not_found' });
  if (req.method === 'GET') {
    return res.status(200).json({ companyId, members: [], mock: true });
  }

  if (req.method === 'POST') {
    const { name, email, role } = req.body || {};
    if (!name || !email) return res.status(400).json({ error: 'name and email required' });
    // const r: EnterpriseRole = role || 'viewer';
    // const member = store.addMember(companyId, name, email, r);
    return res.status(201).json({ name, email, role, mock: true });
  }

  if (req.method === 'PATCH') {
    const { memberId, role } = req.body || {};
    if (!memberId || !role) return res.status(400).json({ error: 'memberId and role required' });
    // const ok = store.updateMemberRole(companyId, memberId, role);
    return res.status(200).json({ success: true, mock: true });
  }

  if (req.method === 'DELETE') {
    const { memberId } = req.query;
    if (!memberId || typeof memberId !== 'string') return res.status(400).json({ error: 'memberId required' });
    // const ok = store.removeMember(companyId, memberId);
    return res.status(200).json({ success: true, mock: true });
  }

  return res.status(405).json({ error: 'method_not_allowed' });
}