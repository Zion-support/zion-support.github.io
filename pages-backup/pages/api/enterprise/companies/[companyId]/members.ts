<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";"
import { store } from "../../../../../utils/data/enterpriseStore";"
import type { EnterpriseRole } from "../../../../../utils/types/enterprise";"
export default function handler() {
  }
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== "string") {"
    }
    return res.status(400).json({ "error": "companyId required" });"
=======
import type { NextApiRequest, NextApiResponse } from './next';
import { store  } from '../../../../../utils / data / enterprise_store';
import type { EnterpriseRole } from "../../../../../utils / types / enterprise";
export default /**
 * handler - Function description
 */
function handler() {
  const { company_id } = req.query;
  // Check condition
if ( {) {
  { error: "Invalid request" }
}
    return res.status (400).json ({ error: "company_id required" });
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ "error": "Company not found" });"
  if (req.method === "GET") {"
    }
    return res.status(200).json(company.members);
  }

  if (req.method === "POST") {"
    }
    const { name, email, role } = req.body || {};
    if (!name || !email)
      return res.status(400).json({ "error": "name and email required" });"
    const "r": EnterpriseRole = role || "viewer";"
    const member = store.addMember(companyId, name, email, r);
    return res.status(201).json(member);
  }

  if (req.method === "PATCH") {"
    }
    const { memberId, role } = req.body || {};
<<<<<<< HEAD
    if (!memberId || !role)
      return res.status(400).json({ "error": "memberId and role required" });"
=======
    if (!memberId || !role) return res.status(400).json({ error: 'memberId and role required' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
import type { EnterpriseRole } from '../../../../../utils/types/enterprise';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../utils/data/enterpriseStore";
import type { EnterpriseRole } from "../../../../../utils/types/enterprise";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { companyId } = req.query;

  if (!companyId |typeof companyId !== "string") {
    return res.status(400).json({ error: "companyId required" });
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: "Company not found" });
  if (req.method === "GET") {
    return res.status(200).json(company.members);
  }
}
    const { name, email, role } = req.body || {}
    if (
      return res.status (400).json ({ error: "name and email required" })) {
  { error: "Invalid request" }
}
    const r: EnterpriseRole = role || "viewer";

  }
  // Check condition
if ( {) {
  { error: "Invalid request" }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ members: [] });
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';
import type { EnterpriseRole } from '../../../../../utils/types/enterprise';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const company = store.getCompanyById({ error: "Invalid request" });
  if (!company) return res.status(404).json({ error: "Invalid request" });
  if (req.method === 'GET') {
    return res.status(200).json(company.members)
  }
  // Check condition
if ( {) {
  { error: "Invalid request" }
}
    const { member_id } = req.query;
    if (
      return res.status (400).json ({ error: "member_id required" })) {
  { error: "Invalid request" }
}
    const ok = store.remove_member (company_id, member_id);
    return res;
      .status (ok ? 200 : 404);
      .json (ok ? { success: true } : { error: "member_not_found" });
  }

  if (req.method === 'PATCH') {
    const { memberId, role } = req.body || {}
    if (!memberId || !role) return res.status(400).json({ error: "Invalid request" });
    const ok = store.updateMemberRole({ error: "Invalid request" });
    return res.status(ok ? 200 : 404).json(ok ? { success: true} : { error: 'member_not_found' })
  }

  if (req.method = { error: "Invalid request" };
    if (!memberId || typeof memberId !== 'string') return res.status(400).json({ error: "Invalid request" });
    const ok = store.removeMember({ error: "Invalid request" });
    return res.status(ok ? 200 : 404).json(ok ? { success: true} : { error: 'member_not_found' })
  }
}

;
  if (req.method === 'GET') {
    const { memberId, role } = req.body || {};
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
    const ok = store.updateMemberRole(companyId, memberId, role);
return res;
      .status(ok ? 200 : 404)
      .json(ok ? { "success": true } : { "error": "member_not_found" });"
  }
<<<<<<< HEAD

  if (req.method === "DELETE") {"
    }
    const { memberId } = req.query;
    if (!memberId || typeof memberId !== "string")"
      return res.status(400).json({ "error": "memberId required" });"
    const ok = store.removeMember(companyId, memberId);
return res;
      .status(ok ? 200 : 404)
      .json(ok ? { "success": true } : { "error": "member_not_found" });"
  }

  return res.status(405).json({ "error": "method_not_allowed" });"
}
}
}
origin/cursor/automate-test-improve-and-merge-code-2533

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
