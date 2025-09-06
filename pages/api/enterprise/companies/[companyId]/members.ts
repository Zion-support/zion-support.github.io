import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
import type { EnterpriseRole } from '../../../../../utils/types/enterprise';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const company = null;
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' })
  }
  if (req.method === "DELETE") {
    const { memberId } = req.query;
if (!memberId || typeof memberId !== 'string')
      return res.status(400).json({ error: 'memberId required' });
    const ok = store.removeMember(companyId, memberId);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: "member_not_found" });
  }

  return res.status(405).json({ error: 'method_not_allowed' });

}