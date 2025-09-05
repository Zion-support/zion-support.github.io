<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { readJson, writeJson } from '../../../utils/fsDb',

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { account, amount, type, serviceId } = req.body as { account?: string, amount?: number, type?: string, serviceId?: string },
  if (!account || !amount || amount <= 0 || !type) return res.status(400).json({ error: 'Invalid input' }),

  const redemptions = readJson<any[]>('tokens/redemptions.json', []),
  const id = `rdm_${Math.random().toString(36).slice(2)}_${Date.now()}`,
  const record = { id, account, amount, type, serviceId: serviceId ?? null, createdAt: Date.now() },
  redemptions.push(record),
  writeJson('tokens/redemptions.json', redemptions),

  // If premium support: create a support request to prioritize
  if (type === 'premium_support') {
    const reqs = readJson<any[]>('support/requests.json', []),
    const srid = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`,
    reqs.push({ id: srid, sessionId: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', createdAt: Date.now() }),
    writeJson('support/requests.json', reqs)
  }

  return res.status(200).json({ ok: true, id })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_account, _amount, _type, _serviceId} = req.body as {_account?: string; amount?: number; type?: string; serviceId?: string};
  if (!account || !amount || amount <= 0 || !type) return res.status(400).json({_error: 'Invalid input'});

  const _redemptions = readJson<any[]>('tokens/redemptions.json', []);
  const _id = `rdm_${_Math.random().toString(36).slice(2)}_${_Date.now()}`;
  const _record = {_id, _account, _amount, _type, _serviceId: serviceId ?? null, _createdAt: Date.now()};
  redemptions.push(record);
  writeJson('tokens/redemptions.json', redemptions);

  // If premium support: create a support request to prioritize
  if (type === 'premium_support') {_const _reqs = readJson<any[]>('support/requests.json', _[]);
    const _srid = `sr_${Math.random().toString(36).slice(2)}_${_Date.now()}`;
    reqs.push({_id: srid, _sessionId: account, _reason: 'Premium support redemption', _tag: 'premium_support', _status: 'open', _createdAt: Date.now()});
    writeJson('support/requests.json', reqs);
  }

  return res.status(200).json({_ok: true, _id});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
}