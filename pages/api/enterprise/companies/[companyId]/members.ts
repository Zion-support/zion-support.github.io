<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { store } from '../../../../../utils/data/enterpriseStore',
import type { EnterpriseRole } from '../../../../../utils/types/enterprise',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query,
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const company = store.getCompanyById(companyId),
  if (!company) return res.status(404).json({ error: 'company_not_found' }),

  if (req.method === 'GET') {
    return res.status(200).json(company.members)
  }

  if (req.method === 'POST') {
    const { name, email, role } = req.body || {},
    if (!name || !email) return res.status(400).json({ error: 'name and email required' }),
    const r: EnterpriseRole = role || 'viewer',
    const member = store.addMember(companyId, name, email, r),
    return res.status(201).json(member)
  }

  if (req.method === 'PATCH') {
    const { memberId, role } = req.body || {},
    if (!memberId || !role) return res.status(400).json({ error: 'memberId and role required' }),
    const ok = store.updateMemberRole(companyId, memberId, role),
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' })
  }

  if (req.method === 'DELETE') {
    const { memberId } = req.query,
    if (!memberId || typeof memberId !== 'string') return res.status(400).json({ error: 'memberId required' }),
    const ok = store.removeMember(companyId, memberId),
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' })
  }

  return res.status(405).json({ error: 'method_not_allowed' })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_EnterpriseRole} from '../../../../../utils/types/enterprise';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { companyId} = req.query;
  if (!companyId || typeof companyId !== 'string') {_return res.status(400).json({ error: 'companyId required'});
  }
  const _company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({_error: 'company_not_found'});

  if (req.method === 'GET') {_return res.status(200).json(company.members);}

  if (req.method === 'POST') {_const { name, _email, _role} = req.body || {};
    if (!name || !email) return res.status(400).json({_error: 'name and email required'});
    const r: EnterpriseRole = role || 'viewer';
    const _member = store.addMember(companyId, name, email, r);
    return res.status(201).json(member);
  }

  if (req.method === 'PATCH') {_const { memberId, _role} = req.body || {};
    if (!memberId || !role) return res.status(400).json({_error: 'memberId and role required'});
    const _ok = store.updateMemberRole(companyId, memberId, role);
    return res.status(ok ? 200 : 404).json(ok ? {_success: true} : {_error: 'member_not_found'});
  }

  if (req.method === 'DELETE') {_const { memberId} = req.query;
    if (!memberId || typeof memberId !== 'string') return res.status(400).json({_error: 'memberId required'});
    const _ok = store.removeMember(companyId, memberId);
    return res.status(ok ? 200 : 404).json(ok ? {_success: true} : {_error: 'member_not_found'});
  }

  return res.status(405).json({_error: 'method_not_allowed'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}