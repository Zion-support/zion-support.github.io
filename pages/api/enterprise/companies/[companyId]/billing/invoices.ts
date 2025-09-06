<<<<<<< HEAD


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../../utils/data/enterpriseStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== "string") {
    return res.status(400).json({ error: "companyId required" });
  }
  const invoices = store.listInvoices(companyId);
  return res.status(200).json(invoices);
}
=======


  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  }
  const invoices = store && store.listInvoices(companyId);
  return res && res.status(200).json(invoices);
}
<<<<<<< HEAD


=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
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
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  const invoices = store.listInvoices(companyId);
  return res.status(200).json(invoices);
<<<<<<< HEAD
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

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
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
