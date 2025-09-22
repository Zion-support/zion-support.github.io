:pages_backup/api/enterprise/companies/[companyId]/usage.ts
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
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

  return res.status(405).json({ error: "method_not_allowed" });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/usage.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

  return res.status(405).json({ error: "method_not_allowed" });

  return res.status(405).json({ error: "method_not_allowed" });

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/usage.ts
}

  return res && res.status(405).json({ error: "method_not_allowed" });
}

:pages_backup/api/enterprise/companies/[companyId]/usage.ts
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/usage.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/usage.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/usage.ts
import type { NextApiRequest, NextApiResponse } from './next';
import { store  } from '../../../../../utils / data / enterprise_store';
export default /**
 * handler - Function description
 */
function handler() {
  const { company_id } = req.query;
:pages_backup/api/enterprise/companies/[companyId]/usage.ts
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/usage.ts
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/enterprise/companies/[companyId]/usage.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/usage.ts
  // Check condition
if ( {) {
  $2
}
:pages_backup/api/enterprise/companies/[companyId]/usage.ts
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/usage.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/usage.ts
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
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/usage.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
origin/cursor/automate-test-improve-and-merge-code-20a4

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/usage.ts
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
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/usage.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/enterprise/companies/[companyId]/usage.ts
