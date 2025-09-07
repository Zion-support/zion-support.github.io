<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getAllProviders } from '../../../lib/integrations/registry';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET) {
    res.setHeader(Allow', ['GET]);
    return res.status(405).end(Method Not Allowed');
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
  }

  const providers = getAllProviders();
  res.status(200).json({ providers });
}