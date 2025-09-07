<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/billing/invoices.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../../utils/data/enterpriseStore";
export default function handler($2) {;
  const { companyId } = req.query;

  }
  const invoices = store && store.listInvoices(companyId);
  return res && res.status(200).json(invoices);
}

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
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices.ts

  try {
    // TODO: Implement invoices logic
    res.status(200).json({ message: 'invoices endpoint' });
  } catch (error) {
<<<<<<< HEAD:pages/api/enterprise/companies/[companyId]/billing/invoices.ts
    console.error('Error in invoices:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
=======

    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const invoices = store.listInvoices(companyId);
  return res.status(200).json(invoices);

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
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages-disabled/api-disabled/api/enterprise/companies/[companyId]/billing/invoices.ts
}