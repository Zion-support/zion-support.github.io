<<<<<<< HEAD:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../../utils/data/enterpriseStore";
export default function handler($2) {;
  const { companyId } = req.query;

=======
<<<<<<< HEAD
const { companyId } = req && req.query;
  if (!companyId || typeof companyId !== "string") {
    return res && res.status(400).json({ error: "companyId required" });
import { store } from '../../../../../../utils/data/enterpriseStore';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ invoices: [] });
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../../utils/data/enterpriseStore';
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/enterprise/companies/[companyId]/billing/invoices.ts
  }
  const invoices = store && store.listInvoices(companyId);
  return res && res.status(200).json(invoices);
}
<<<<<<< HEAD
=======

<<<<<<< HEAD:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices.ts
=======

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/enterprise/companies/[companyId]/billing/invoices.ts
import type { NextApiRequest, NextApiResponse } from './next';
import { store  } from '../../../../../../utils / data / enterprise_store';
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
  const invoices = store.list_invoices (company_id);
  return res.status (200).json (invoices);
}
<<<<<<< HEAD:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices.ts

=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../../utils/data/enterpriseStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { companyId } = req.query;

  if (!companyId |typeof companyId !== "string") {
    return res.status(400).json({ error: "companyId required" });
  }
  const invoices = store.listInvoices(companyId);
  return res.status(200).json(invoices);
}
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ invoices: [] });
import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '../../../../../../utils/data/enterpriseStore';
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/enterprise/companies/[companyId]/billing/invoices.ts
  } catch (error) {

    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const invoices = store.listInvoices(companyId);
  return res.status(200).json(invoices);
<<<<<<< HEAD
}
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

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
<<<<<<< HEAD:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices.ts
}
=======
}
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/enterprise/companies/[companyId]/billing/invoices.ts
