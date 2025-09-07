import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';
import type { EnterpriseRole } from '../../../../../utils/types/enterprise';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query,
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const company = store.getCompanyById($2);
  if (!company) return res.status(404).json($2);
  if (req.method === 'GET') {
    return res.status(200).json(company.members)
  }

  if (req.method === 'POST') {
    const { name, email, role } = req.body || {},
    if (!name || !email) return res.status(400).json($2);
    const r: EnterpriseRole = $2;
    const member = store.addMember($2);
    return res.status(201).json(member)
  }

  if (req.method === 'PATCH') {
    const { memberId, role } = req.body || {},
    if (!memberId || !role) return res.status(400).json($2);
    const ok = store.updateMemberRole($2);
    return res.status(ok ? 200 : 404).json(ok ? { success: true} : { error: 'member_not_found' })
  }

  if (req.method = $2;
    if (!memberId || typeof memberId !== 'string') return res.status(400).json($2);
    const ok = store.removeMember($2);
    return res.status(ok ? 200 : 404).json(ok ? { success: true} : { error: 'member_not_found' })
  }

  return res.status(405).json({ error: 'method_not_allowed' })
}