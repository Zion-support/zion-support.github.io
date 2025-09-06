import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';
import type { EnterpriseRole } from '../../../../../utils/types/enterprise';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' });  }
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: 'Company not found' });
  if (req.method === 'GET') {
<<<<<<< HEAD
    return res.status(200).json(company.members);  }

  if (req.method === 'POST') {
    const { name, email, role } = req.body || {};
    if (!name || !email)
      return res.status(400).json({ error: 'name and email required' });
    const r: EnterpriseRole = role || 'viewer';
    const member = store.addMember(companyId, name, email, r);
    return res.status(201).json(member);  }

  if (req.method === 'PATCH') {
    const { memberId, role } = req.body || {};
    if (!memberId || !role)
      return res.status(400).json({ error: 'memberId and role required' });
    const ok = store.updateMemberRole(companyId, memberId, role);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: 'member_not_found' });  }

  if (req.method === 'DELETE') {
    const { memberId } = req.query;
    if (!memberId || typeof memberId !== 'string')
      return res.status(400).json({ error: 'memberId required' });
    const ok = store.removeMember(companyId, memberId);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: 'member_not_found' });
  }

  return res.status(405).json({ error: 'method_not_allowed' });
=======
    return res.status(200).json(company.members)
  }

  if (req.method === 'POST') {
    const { name, email, role } = req.body || {};
    if (!name || !email) return res.status($1).json({$2});
    const r: EnterpriseRole = role || 'viewer';
    const member = store.addMember(companyId, name, email, r);
    return res.status(201).json(member)
  }

  if (req.method === 'PATCH') {
    const { memberId, role } = req.body || {};
    if (!memberId || !role) return res.status($1).json({$2});
    const ok = store.updateMemberRole(companyId, memberId, role);
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' })
  }

  if (req.method === 'DELETE') {
    const { memberId } = req.query;
    if (!memberId || typeof memberId !== 'string') return res.status($1).json({$2});
    const ok = store.removeMember(companyId, memberId);
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' })
  }

  return res.status(405).json({ error: 'method_not_allowed' })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
