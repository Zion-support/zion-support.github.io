<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/usage.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../utils/data/enterpriseStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { companyId } = req.query;
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
  return res.status(405).json({ error: "method_not_allowed" });
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


  return res.status(405).json({ error: "method_not_allowed" });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======


>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/usage.ts
}

  return res && res.status(405).json({ error: "method_not_allowed" });
}

<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/usage.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/usage.ts
import type { NextApiRequest, NextApiResponse } from './next';
import { store  } from '../../../../../utils / data / enterprise_store';
export default /**
 * handler - Function description
 */
function handler() {
  const { company_id } = req.query;
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/usage.ts
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/usage.ts
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/usage.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
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
    return res.status (200).json (company.plan.usage_limits);
<<<<<<< HEAD
=======
const { companyId } = req && req.query;
  if (!companyId || typeof companyId !== "string") {
    return res && res.status(400).json({ error: "companyId required" });
  }
  const company = store && store.getCompanyById(companyId);
  if (!company) return res && res.status(404).json({ error: "Company not found" });
  if (req && req.method === "GET") {
    return res && res.status(200).json(company && company.plan.usageLimits);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/usage.ts
  }
  // Check condition
if ( {) {
  $2
}
    const { monthlyJobPosts, budgetCapUsd } = req.body || {}
    // Check condition
if ( {) {
  $2
}
      return res;
        .status (400);
        .json ({ error: "monthlyJobPosts and budgetCapUsd must be numbers" });
    }
    const ok = store.setUsageLimits (company_id, monthlyJobPosts, budgetCapUsd);
    return res;
      .status (ok ? 200 : 404);
      .json (ok ? { success: true } : { error: "company_not_found" });
  }
  return res.status (405).json ({ error: "method_not_allowed" });
}
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/usage.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
<<<<<<< HEAD

  }
  return res.status(405).json({ error: "method_not_allowed" });
return res.status(405).json({ error: "method_not_allowed" });
}
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ usage: [] });
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';
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
    const { monthlyJobPosts, budgetCapUsd } = req.body || {};
    if (typeof monthlyJobPosts !== 'number' || typeof budgetCapUsd !== 'number') {;
      return res.status(400).json({ error: 'monthlyJobPosts and budgetCapUsd must be numbers' });
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
    const ok = store.setUsageLimits(companyId, monthlyJobPosts, budgetCapUsd);
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'company_not_found' });
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
}
}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

=======


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
=======
origin/cursor/automate-test-improve-and-merge-code-20a4




>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/usage.ts
import type { NextApiRequest, NextApiResponse } from 'next';
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const company = null;
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'company_not_found' })
    ) {
      return res
        .status(400)
        .json({ error: "monthlyJobPosts and budgetCapUsd must be numbers" });
    }
    const ok = store.setUsageLimits(companyId, monthlyJobPosts, budgetCapUsd);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: "company_not_found" });
  }

  return res.status(405).json({ error: 'method_not_allowed' });

}
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/usage.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/usage.ts
