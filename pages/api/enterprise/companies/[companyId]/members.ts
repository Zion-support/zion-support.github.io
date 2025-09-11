<<<<<<< HEAD
<<<<<<< HEAD
const { companyId } = req && req.query;
  if (!companyId || typeof companyId !== "string") {
    return res && res.status(400).json({ error: "companyId required" });
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
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  if (!companyId |typeof companyId !== "string") {
    return res.status(400).json({ error: "companyId required" });
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: "Company not found" });
  if (req.method === "GET") {
    return res.status(200).json(company.members);
  }
<<<<<<< HEAD
  if (req.method === "POST") {
    const { name, email, role } = req.body |{}
    if (!name |!email)
      return res.status(400).json({ error: "name and email required" });
    const r: EnterpriseRole = role |"viewer";
    const r: EnterpriseRole = role || "viewer";
    const member = store.addMember(companyId, name, email, r);
    return res.status(201).json(member);
  }

  if (req.method === "PATCH") {
    const { memberId, role } = req.body || {};
    if (!memberId || !role)
      return res.status(400).json({ error: "memberId and role required" });
    const ok = store.updateMemberRole(companyId, memberId, role);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: "member_not_found" });
  }

  if (req.method === "DELETE") {
    const { memberId } = req.query;
    if (!memberId || typeof memberId !== "string")
      return res.status(400).json({ error: "memberId required" });
    const ok = store.removeMember(companyId, memberId);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: "member_not_found" });
  }

  return res.status(405).json({ error: "method_not_allowed" });
}
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ members: [] });
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';
import type { EnterpriseRole } from '../../../../../utils/types/enterprise';
export default function handler(req, res) {
  try {
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
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const company = store.getCompanyById(companyId);
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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
  if (req.method === 'GET') {
    const { name, email, role } = req.body || {};
    if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36


}

  return res && res.status(405).json({ error: "method_not_allowed" });
}

<<<<<<< HEAD
    const member = store.addMember(companyId, name, email, r);
    return res.status(201).json(member);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  if (req.method === "PATCH") {
    const { memberId, role } = req.body |{}
    if (!memberId |!role)
      return res.status(400).json({ error: "memberId and role required" });
    const ok = store.updateMemberRole(companyId, memberId, role);
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' })
  }
  if (req.method === 'DELETE') {
    const { memberId } = req.query;
    if (!memberId || typeof memberId !== 'string') return res.status(400).json({ error: 'memberId required' });
    const ok = store.removeMember(companyId, memberId);
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' })
  }
  return res.status(405).json({ error: "method_not_allowed" });
=======
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
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
  $2
}
    return res.status (400).json ({ error: "company_id required" });
  }
  const company = store.getCompanyById (company_id);
  if (return res.status (404).json ({ error: "Company not found" })) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    return res.status (200).json (company.members);
  }
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  // Check condition
if ( {) {
  $2
}
    const { name, email, role } = req.body || {}
    if (
      return res.status (400).json ({ error: "name and email required" })) {
  $2
}
    const r: EnterpriseRole = role || "viewer";
    const member = store.add_member (company_id, name, email, r);
    return res.status (201).json (member);
  }
  // Check condition
if ( {) {
  $2
}
    const { member_id, role } = req.body || {}
    if (
      return res.status (400).json ({ error: "member_id and role required" })) {
  $2
}
    const ok = store.updateMemberRole (company_id, member_id, role);
    return res;
      .status (ok ? 200 : 404);
      .json (ok ? { success: true } : { error: "member_not_found" });
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
  return res.status (405).json ({ error: "method_not_allowed" });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a


    const member = store.addMember(companyId, name, email, r);
    return res.status(201).json(member);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

<<<<<<< HEAD
}

}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
  if (req.method === "PATCH") {
    const { memberId, role } = req.body |{}
    if (!memberId |!role)
      return res.status(400).json({ error: "memberId and role required" });
    const ok = store.updateMemberRole(companyId, memberId, role);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: "member_not_found" });
  }
  if (req.method === "DELETE") {
    const { memberId } = req.query;
    if (!memberId |typeof memberId !== "string")
      return res.status(400).json({ error: "memberId required" });
    const ok = store.removeMember(companyId, memberId);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: "member_not_found" });

  }
  return res.status(405).json({ error: "method_not_allowed" });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}
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
<<<<<<< HEAD
<<<<<<< HEAD
}
}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
