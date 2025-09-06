import type { NextApiRequest, NextApiResponse } from 'next';

const templates = null;
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(templates)
};