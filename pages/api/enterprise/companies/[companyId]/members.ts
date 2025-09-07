<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/members.ts
}


<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/members.ts
origin/cursor/integrate-build-improve-and-re-verify-2156


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
  $2
}
    return res.status (400).json ({ error: "company_id required" });
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: "Company not found" });
  if (req.method === "GET") {
    return res.status(200).json(company.members);
  }
  if (req && req.method === "POST") {
    const { name, email, role } = req && req.body || {};
    if (!name || !email)
      return res && res.status(400).json({ error: "name and email required" });
    const r: EnterpriseRole = role || "viewer";
    const member = store && store.addMember(companyId, name, email, r);
    return res && res.status(201).json(member);
  }
  if (req && req.method === "PATCH") {
    const { memberId, role } = req && req.body || {};
    if (!memberId || !role)
      return res && res.status(400).json({ error: "memberId and role required" });
    const ok = store && store.updateMemberRole(companyId, memberId, role);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: "member_not_found" });
  }
  if (req && req.method === "DELETE") {
    const { memberId } = req && req.query;
    if (!memberId || typeof memberId !== "string")
      return res && res.status(400).json({ error: "memberId required" });
    const ok = store && store.removeMember(companyId, memberId);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: "member_not_found" });
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== 'string') {;
    return res.status(400).json({ error: 'companyId required' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: 'company_not_found' });
  if (req.method === 'GET') {
    return res.status(200).json(company.members)
  }
  if (req.method === 'POST') {
    const { name, email, role } = req.body || {};
    if (!name || !email) return res.status(400).json({ error: 'name and email required' });
    const r: EnterpriseRole = role || 'viewer';
    const member = store.addMember(companyId, name, email, r);
    return res.status(201).json(member)
  }
  if (req.method === 'PATCH') {
    const { memberId, role } = req.body || {};
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
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/members.ts

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
  $2
}
    const r: EnterpriseRole = role || "viewer";
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/members.ts
    const member = store.add_member (company_id, name, email, r);
    return res.status (201).json (member);
    const member = store.add_member (company_id, name, email, r);
    return res.status (201).json (member);


  }
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/members.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next';
import type { NextApiRequest, NextApiResponse } from 'next';



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ members: [] });
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
  // Check condition
if ( {) {
  $2
}
    const { member_id } = req.query;
    if (
      return res.status (400).json ({ error: "member_id required" })) {
  $2
}
    const ok = store.remove_member (company_id, member_id);
    return res;
      .status (ok ? 200 : 404);
      .json (ok ? { success: true } : { error: "member_not_found" });
  }
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/members.ts
  return res.status (405).json ({ error: "method_not_allowed" });
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
}
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/members.ts
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


;
  if (req.method === 'GET') {
    const { memberId, role } = req.body || {};
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const ok = store.updateMemberRole(companyId, memberId, role);
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/members.ts
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const company = null;
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' })
origin/cursor/automate-test-improve-and-merge-code-2533
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (req.method === 'GET') {
    const { memberId } = req.query;
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/members.ts
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const ok = store.removeMember(companyId, memberId);
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return res.status(405).json({ error: 'method_not_allowed' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/members.ts
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/members.ts
ursor/fix-website-loading-errors-and-merge-6662
}
}



if (!memberId || typeof memberId !== 'string')
      return res.status(400).json({ error: 'memberId required' });
    const ok = store.removeMember(companyId, memberId);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: "member_not_found" });
  }

  return res.status(405).json({ error: 'method_not_allowed' });

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
