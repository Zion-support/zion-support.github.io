import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ members: [] });
import type { NextApiRequest, NextApiResponse } from 'next',;
import { store } from '../../../../../utils/data/enterpriseStore',;
import type { EnterpriseRole } from '../../../../../utils/types/enterprise',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { companyId } = req.query,;
  if (!companyId || typeof companyId !== 'string') {;
    return res.status(400).json({ error: 'companyId required' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const company = store.getCompanyById(companyId),;
  if (!company) return res.status(404).json({ error: 'company_not_found' }),;
  if (req.method === 'GET') {;
    return res.status(200).json(company.members);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (req.method === 'POST') {;
    const { name, email, role } = req.body || {},;
    if (!name || !email) return res.status(400).json({ error: 'name and email required' }),;
    const r: EnterpriseRole = role || 'viewer',;
    const member = store.addMember(companyId, name, email, r),;
    return res.status(201).json(member);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (req.method === 'PATCH') {;
    const { memberId, role } = req.body || {},;
    if (!memberId || !role) return res.status(400).json({ error: 'memberId and role required' }),;
    const ok = store.updateMemberRole(companyId, memberId, role),;
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (req.method === 'DELETE') {;
    const { memberId } = req.query,;
    if (!memberId || typeof memberId !== 'string') return res.status(400).json({ error: 'memberId required' });
    const ok = store.removeMember(companyId, memberId);
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'member_not_found' });
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
  }
}