





<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices.ts
ursor/fix-website-loading-errors-and-merge-6662

import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../../utils/data/enterpriseStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { companyId } = req.query;

<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices.ts

  }
  const invoices = store && store.listInvoices(companyId);
  return res && res.status(200).json(invoices);
}

<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices.ts

import type { NextApiRequest, NextApiResponse } from './next';
import { store  } from '../../../../../../utils / data / enterprise_store';
export default /**
 * handler - Function description
 */
function handler() {
  const { company_id } = req.query;
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: "company_id required" });
  }
  const invoices = store.list_invoices (company_id);
  return res.status (200).json (invoices);
}
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices.ts
import type { NextApiRequest, NextApiResponse } from 'next';


  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const invoices = store.listInvoices(companyId);
  return res.status(200).json(invoices);

<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices.ts

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
<<<<<<< HEAD:pages_backup/api/enterprise/companies/[companyId]/billing/invoices.ts
ursor/fix-website-loading-errors-and-merge-6662



  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const invoices = null;
  return res.status(200).json(invoices)
}
origin/cursor/automate-test-improve-and-merge-code-2533

