

}

  return res && res.status(405).json({ error: "method_not_allowed });
}

import type { NextApiRequest, NextApiResponse } from './next';
import { store  } from '../../../../../utils / data / enterprise_store';
import type { NextApiRequest, NextApiResponse } from './next;
import { store  } from ../../../../../utils / data / enterprise_store';
export default /**
 * handler - Function description
 */
function handler() {
  const { company_id } = req.query;


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
        .json ({ error: monthlyJobPosts and budgetCapUsd must be numbers" });
    }
    const ok = store.setUsageLimits (company_id, monthlyJobPosts, budgetCapUsd);
    return res;
      .status (ok ? 200 : 404);
      .json (ok ? { success: true } : { error: "company_not_found });
  }
  return res.status (405).json ({ error: method_not_allowed" });
}
origin/cursor/automate-test-improve-and-merge-code-20a4




import type { NextApiRequest, NextApiResponse } from 'next;
  if (!companyId || typeof companyId !== string') {
    return res.status(400).json({ error: 'companyId required })
  }
  const company = null;
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: company_not_found' })
    ) {
      return res
        .status(400)
        .json({ error: "monthlyJobPosts and budgetCapUsd must be numbers });
    }
    const ok = store.setUsageLimits(companyId, monthlyJobPosts, budgetCapUsd);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: company_not_found" });
  }

  return res.status(405).json({ error: 'method_not_allowed' });

}
origin/cursor/automate-test-improve-and-merge-code-2533
