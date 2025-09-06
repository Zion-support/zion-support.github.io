import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { companyId } = req.query;
    res.status(200).json({ message: 'Company invoices endpoint', companyId });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}