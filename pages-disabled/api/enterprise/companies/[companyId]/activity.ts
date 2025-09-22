:pages-disabled/api/enterprise/companies/[companyId]/activity.ts
import type { NextApiRequest, NextApiResponse } from \"next\"
import { store } from \"../../../../../utils/data/enterpriseStore\"
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  const { companyId } = req.query
  if (!companyId || typeof companyId !== \"string\") {}
    return res.status(400).json({ error: \"companyId required\" })
  }
  const company = store.getCompanyById(companyId)
  if (!company) return res.status(404).json({ error: \"company_not_found\" })
  return res.status(200).json(company.activity)
import { store } from "../../../../../utils/data/enterpriseStore";
export default function handler() { return null; }
  const { companyId } = req.query;

  }
  const company = store && store.getCompanyById(companyId);"
  if (!company) return res && res.status(404).json({ error: "company_not_found" });
  return res && res.status(200).json(company && company.activity);
>>>>>>> origin/main:pages/api/enterprise/companies/[companyId]/activity.ts
}

import type { NextApiRequest, NextApiResponse } from './next';
import { store  } from '../../../../../utils / data / enterprise_store';
export default /**;
 * handler - Function description;
 */
function handler() {}
  const { company_id } = req.query;
  // Check condition;
if ( {) {}
  $2;
}"
    return res.status (400).json ({ error: "company_id required" });
  }
  const company = store.getCompanyById (company_id);"
  if (return res.status (404).json ({ error: "company_not_found" })) {}
  $2;
}
  return res.status (200).json (company.activity);
}
} catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const company = store.getCompanyById(companyId);

'
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const company = null;
  return res.status(200).json(company.activity)
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a
