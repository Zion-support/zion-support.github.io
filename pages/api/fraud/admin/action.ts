import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ message: 'Fraud admin action endpoint' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}