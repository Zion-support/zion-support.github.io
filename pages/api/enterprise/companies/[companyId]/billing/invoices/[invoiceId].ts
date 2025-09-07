import type { NextApiRequest, NextApiResponse } from "next";
import { store } from "../../../../../../../utils/data/enterpriseStore";

export const config = {
  api: {
    responseLimit: false
  }
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { companyId, invoiceId } = req.query as { companyId?: string; invoiceId?: string };
  if (!companyId || !invoiceId) {
    return res.status(400).json({ error: 'Missing company ID or invoice ID' });
  }

  try {
    const invoice = store.getInvoiceById(companyId, invoiceId);
    if (!invoice) {
      return res.status(404).json({ error: 'Invoice not found' });
    }

    return res.status(200).json(invoice);
  } catch (error) {
    console.error('Error fetching invoice:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}