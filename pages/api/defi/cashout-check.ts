import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { address } = req.query as { address?: string };
  if (!address) {
    return res.status(400).json({ error: 'Missing address' });
  }

  const profiles = load();
  const profile = profiles[address.toLowerCase()];
  
  if (!profile) {
    return res.status(404).json({ error: 'Profile not found' });
  }

  const canCashout = profile.status === 'verified' && profile.riskLevel === 'low';
  
  res.status(200).json({ canCashout, profile });
}