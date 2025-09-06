import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';
import type { EnterpriseRole } from '../../../../../utils/types/enterprise';
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' });
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: 'company_not_found' });

  if (req.method === 'GET') {
<<<<<<< HEAD
    return res.status(200).json(company.members);
=======
    return res.status(200).json(company.members)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (req.method === 'POST') {
    const { name, email, role } = req.body || {};
<<<<<<< HEAD
    if (!name || !email)
      return res.status(400).json({ error: 'name and email required' });
    const r: EnterpriseRole = role || 'viewer';
    const member = store.addMember(companyId, name, email, r);
    return res.status(201).json(member);
=======
    if (!name || !email) return res.status(400).json({ error: 'name and email required' });
    const r: EnterpriseRole = role || 'viewer';
    const member = store.addMember(companyId, name, email, r);
    return res.status(201).json(member)
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (req.method === 'PATCH') {
    const { memberId, role } = req.body || {};
<<<<<<< HEAD
    if (!memberId || !role)
      return res.status(400).json({ error: 'memberId and role required' });
    const ok = store.updateMemberRole(companyId, memberId, role);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: 'member_not_found' });
=======
    if (!memberId || !role) return res.status(400).json({ error: 'memberId and role required' });
    const ok = store.updateMemberRole(companyId, memberId, role);
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' })
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  }

  if (req.method === 'DELETE') {
    const { memberId } = req.query;
<<<<<<< HEAD
    if (!memberId || typeof memberId !== 'string')
      return res.status(400).json({ error: 'memberId required' });
    const ok = store.removeMember(companyId, memberId);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: 'member_not_found' });
  }

  return res.status(405).json({ error: 'method_not_allowed' });
=======
    if (!memberId || typeof memberId !== 'string') return res.status(400).json({ error: 'memberId required' });
    const ok = store.removeMember(companyId, memberId);
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' })
  }

  return res.status(405).json({ error: 'method_not_allowed' })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
