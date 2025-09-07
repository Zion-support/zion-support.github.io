import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc',
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc'),
const FILE = path.join($2);
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync($2);
    return JSON.parse(raw)
  } catch {
    return {}
  }

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { userId, amount, currency } = req.body as { userId?: string, amount?: number, currency?: string },
  if (!userId || typeof amount !== 'number') return res.status(400).json($2);
  const THRESHOLD = Number($2);
  const db = load($2);
  const profile = $2;
  if (amount <= THRESHOLD) return res.status(200).json($2);
  if (!profile) return res.status(200).json($2);
  if (profile.status !== 'approved') return res.status(200).json($2);
  if (profile.amlStatus === 'match' || (profile.flags || []).includes('aml_alert')) return res.status(200).json($2);
  return res.status(200).json({ allowed: true, reason: 'KYC approved and AML clear' })
}