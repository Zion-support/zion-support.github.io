<<<<<<< HEAD
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/activity.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
=======
=======
<<<<<<< HEAD:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/activity.ts
>>>>>>> merged-prs-20250907-203621
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../utils/data/enterpriseStore";
export default function handler($2) {;
  const { companyId } = req.query;

=======
<<<<<<< HEAD
const { companyId } = req && req.query;
  if (!companyId || typeof companyId !== "string") {
    return res && res.status(400).json({ error: "companyId required" });
import { store } from '../../../../../utils/data/enterpriseStore';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ activity: [] });
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../utils/data/enterpriseStore';
export default function handler(req, res) {
  try {
  const { companyId } = req.query;




  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/enterprise/companies/[companyId]/activity.ts
  }
  const company = store && store.getCompanyById(companyId);
  if (!company) return res && res.status(404).json({ error: "company_not_found" });
  return res && res.status(200).json(company && company.activity);
}
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/activity.ts
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/enterprise/companies/[companyId]/activity.ts
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
<<<<<<< HEAD
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/activity.ts

  try {
    // TODO: Implement activity logic
    res.status(200).json({ message: 'activity endpoint' });
=======
<<<<<<< HEAD:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/activity.ts

=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../utils/data/enterpriseStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { companyId } = req.query;

  if (!companyId |typeof companyId !== "string") {
    return res.status(400).json({ error: "companyId required" });
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: "company_not_found" });
  return res.status(200).json(company.activity);
}
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ activity: [] });
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
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/enterprise/companies/[companyId]/activity.ts
>>>>>>> merged-prs-20250907-203621
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
<<<<<<< HEAD
  if (!company) return res.status(404).json({ error: "company_not_found" });
  return res.status(200).json(company.activity);
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/activity.ts
}
=======
<<<<<<< HEAD:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/activity.ts
}
=======
}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/enterprise/companies/[companyId]/activity.ts
>>>>>>> merged-prs-20250907-203621
