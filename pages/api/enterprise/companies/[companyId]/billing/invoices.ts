import type { NextApiRequest, NextApiResponse } from "next";"
import { store } from "../../../../../../utils/data/enterpriseStore";"
export default function handler() {
  }
  const { companyId } = req.query;
  if (!companyId || typeof companyId !== "string") {"
    }
    return res.status(400).json({ "error": "companyId required" });"
  }
  const invoices = store && store.listInvoices(companyId);
  return res && res.status(200).json(invoices);
}

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
