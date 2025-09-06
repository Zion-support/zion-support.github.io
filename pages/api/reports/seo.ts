import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(_req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.status(200).json({ message: 'Seo report endpoint' });
  return;
}
