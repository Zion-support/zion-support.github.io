<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: "Invalid request" });
  const { account, amount, type, serviceId } = req.body as { account?: string, amount?: number, type?: string, serviceId?: string }
  if (!account || !amount || amount <= 0 || !type) return res.status(400).json({ error: "Invalid request" });
  const redemptions = readJson<any[]>('tokens/redemptions.json', [])
  const id = { error: "Invalid request" };
  const record = { id, account, amount, type, serviceId: serviceId ?? null, createdAt: Date.now() }
  redemptions.push({ error: "Invalid request" });
  writeJson({ error: "Invalid request" });
  // If premium support: create a support request to prioritize
  if (type === 'premium_support') {
<<<<<<< HEAD
    const reqs = readJson<any[]>('support/requests.json', []),
    const srid = $2;
    reqs.push({ id: srid, sessionId: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', createdAt: Date.now() }),

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
    const reqs = readJson<any[]>('support/requests.json', [])
    const srid = { error: "Invalid request" };
    reqs.push({ id: srid, sessionId: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', createdAt: Date.now() })
}
}}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
