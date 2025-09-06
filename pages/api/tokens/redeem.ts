import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
<<<<<<< HEAD

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { account, amount, type, serviceId } = req.body as {
    account?: string;
    amount?: number;
    type?: string;
    serviceId?: string;
  };
  if (!account || !amount || amount <= 0 || !type)
    return res.status(400).json({ error: 'Invalid input' });

  const redemptions = readJson<any[]>('tokens/redemptions.json', []);
  const id = `rdm_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const record = {
    id,
    account,
    amount,
    type,
    serviceId: serviceId ?? null,
    createdAt: Date.now(),
  };  redemptions.push(record);
=======
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status($1).json({$2});
  const { account, amount, type, serviceId } = req.body as { account?: string, amount?: number, type?: string, serviceId?: string };
  if (!account || !amount || amount <= 0 || !type) return res.status($1).json({$2});
  const redemptions = readJson<any[]>('tokens/redemptions.json', []);
  const id = `rdm_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const record = { id; account, amount, type, serviceId: serviceId ?? null, createdAt: Date.now() },
  redemptions.push(record);
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
  writeJson('tokens/redemptions.json', redemptions);
  // If premium support: create a support request to prioritize
  if (type === 'premium_support') {
    const reqs = readJson<any[]>('support/requests.json', []);
    const srid = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
<<<<<<< HEAD
    reqs.push({
      id: srid,
      sessionId: account,
      reason: 'Premium support redemption',
      tag: 'premium_support',
      status: 'open',
      createdAt: Date.now(),
    });
    writeJson('support/requests.json', reqs);
  }

  return res.status(200).json({ ok: true, id });
=======
    reqs.push({ id: srid, sessionId: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', createdAt: Date.now() }),
    writeJson('support/requests.json', reqs)
  }

  return res.status(200).json({ ok: true, id })
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
