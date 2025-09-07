<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/usage.ts
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/enterprise/companies/[companyId]/usage.ts
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
}

  return res && res.status(405).json({ error: "method_not_allowed" });
}

<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/usage.ts
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/enterprise/companies/[companyId]/usage.ts
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import type { NextApiRequest, NextApiResponse } from './next';
import { store  } from '../../../../../utils / data / enterprise_store';
export default /**
 * handler - Function description
 */
function handler() {
  const { company_id } = req.query;
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/usage.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/enterprise/companies/[companyId]/usage.ts
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  // Check condition
if ( {) {
  $2
}
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
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/usage.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/enterprise/companies/[companyId]/usage.ts
=======
origin/cursor/automate-test-improve-and-merge-code-20a4


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


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
origin/cursor/automate-test-improve-and-merge-code-2533
