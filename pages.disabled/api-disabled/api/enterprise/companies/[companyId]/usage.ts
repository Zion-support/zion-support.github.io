:pages_backup/api/enterprise/companies/[companyId]/usage.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../utils/data/enterpriseStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { companyId } = req.query;

  return res.status(405).json({ error: "method_not_allowed" });




  return res.status(405).json({ error: "method_not_allowed" });

  return res.status(405).json({ error: "method_not_allowed" });

}

  return res && res.status(405).json({ error: "method_not_allowed" });
}

:pages_backup/api/enterprise/companies/[companyId]/usage.ts

import type { NextApiRequest, NextApiResponse } from './next';
import { store  } from '../../../../../utils / data / enterprise_store';
export default /**
 * handler - Function description
 */
function handler() {
  const { company_id } = req.query;
:pages_backup/api/enterprise/companies/[companyId]/usage.ts


  // Check condition
if ( {) {
  $2
}
:pages_backup/api/enterprise/companies/[companyId]/usage.ts
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
:pages_backup/api/enterprise/companies/[companyId]/usage.ts
const { companyId } = req && req.query;
  if (!companyId || typeof companyId !== "string") {
    return res && res.status(400).json({ error: "companyId required" });
  }
  const company = store && store.getCompanyById(companyId);
  if (!company) return res && res.status(404).json({ error: "Company not found" });
  if (req && req.method === "GET") {
    return res && res.status(200).json(company && company.plan.usageLimits);
:pages_backup/api/enterprise/companies/[companyId]/usage.ts
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
:pages_backup/api/enterprise/companies/[companyId]/usage.ts


origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/automate-test-improve-and-merge-code-20a4

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
:pages_backup/api/enterprise/companies/[companyId]/usage.ts
origin/cursor/automate-test-improve-and-merge-code-2533
