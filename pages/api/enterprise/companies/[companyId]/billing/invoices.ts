import type { NextApiRequest, NextApiResponse } from 'next';
  if (!companyId || typeof companyId !== 'string') {
    return res.status(400).json({ error: 'companyId required' })
  }
  const invoices = null;
  return res.status(200).json(invoices)
}
