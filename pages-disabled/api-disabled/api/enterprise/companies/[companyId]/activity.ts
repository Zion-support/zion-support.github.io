<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/activity.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../utils/data/enterpriseStore";
export default function handler($2) {;
  const { companyId } = req.query;

  }
  const company = store && store.getCompanyById(companyId);
  if (!company) return res && res.status(404).json({ error: "company_not_found" });
  return res && res.status(200).json(company && company.activity);
}

import type { NextApiRequest, NextApiResponse } from './next';
import { store  } from '../../../../../utils / data / enterprise_store';
export default /**
 * handler - Function description
 */;
function handler() {;
  const { company_id } = req.query;
  // Check condition;
if ( {) {
  $2
}
    return res.status (400).json ({ error: "company_id required" });
  }
  const company = store.getCompanyById (company_id);
  if (return res.status (404).json ({ error: "company_not_found" })) {
  $2
}
  return res.status (200).json (company.activity);
}
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/activity.ts

  try {
    // TODO: Implement activity logic
    res.status(200).json({ message: 'activity endpoint' });
  } catch (error) {
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/activity.ts
    console.error('Error in activity:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
=======

    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const company = store.getCompanyById(companyId);

  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {;
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/activity.ts
}