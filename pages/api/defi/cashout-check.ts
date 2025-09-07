<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc'
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc')
const FILE = path.join({ error: "Invalid request" });
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync({ error: "Invalid request" });
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  const { userId, amount, currency } = req.body as { userId?: string, amount?: number, currency?: string }
  if (!userId || typeof amount !== 'number') return res.status(400).json({ error: "Invalid request" });
  const THRESHOLD = Number({ error: "Invalid request" });
  const db = load({ error: "Invalid request" });
  const profile = { error: "Invalid request" };
  if (amount <= THRESHOLD) return res.status(200).json({ error: "Invalid request" });
  if (!profile) return res.status(200).json({ error: "Invalid request" });
  if (profile.status !== 'approved') return res.status(200).json({ error: "Invalid request" });
  if (profile.amlStatus === 'match' || (profile.flags || []).includes('aml_alert')) return res.status(200).json({ error: "Invalid request" });
  return res.status(200).json({ allowed: true, reason: 'KYC approved and AML clear' })
<<<<<<< HEAD
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ canCashout: true });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
