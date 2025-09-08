import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { companyId, invoiceId } = req.query;
    res.status(200).json({ message: 'Invoice endpoint', companyId, invoiceId });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}