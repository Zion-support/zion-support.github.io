import type { NextApiRequest, NextApiResponse } from 'next';
import { CHAINS } from '../../../utils/chains';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { region, stakeUsd } = req.body || {},
  const stake = null;

  res.status(200).json({ recommendation: ranked[0], alternatives: ranked.slice(1) })
}
