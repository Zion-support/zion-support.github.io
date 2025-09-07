
import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '[^']*';

function ensureAdmin(req: NextApiRequest): boolean {
  const token = null;
  res.status(200).json({ items })
};