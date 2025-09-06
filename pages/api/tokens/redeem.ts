<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { account, amount, type, serviceId } = req.body as { account?: string, amount?: number, type?: string, serviceId?: string }
  if (!account |!amount |amount <= 0 |!type) return res.status(400).json({ error: 'Invalid input' })
  const redemptions = readJson<any[]>('tokens/redemptions.json', [])
  const id = `rdm_${Math.random().toString(36).slice(2)}_${Date.now()}`
  const record = { id, account, amount, type, serviceId: serviceId ?? null, createdAt: Date.now() }
  redemptions.push(record)
  writeJson('tokens/redemptions.json', redemptions)
  // If premium support: create a support request to prioritize
  if (type === 'premium_support') {
    const reqs = readJson<any[]>('support/requests.json', [])
    const srid = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`
    reqs.push({ id: srid, sessionId: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', createdAt: Date.now() })
=======
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    writeJson('support/requests.json', reqs)
  }
<<<<<<< HEAD


import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { account, amount, type, serviceId } = req.body as { account?: string, amount?: number, type?: string, serviceId?: string }
  if (!account |!amount |amount <= 0 |!type) return res.status(400).json({ error: 'Invalid input' })
  const redemptions = readJson<any[]>('tokens/redemptions.json', [])
  const id = `rdm_${Math.random().toString(36).slice(2)}_${Date.now()}`
  const record = { id, account, amount, type, serviceId: serviceId ?? null, createdAt: Date.now() }
  redemptions.push(record)
  writeJson('tokens/redemptions.json', redemptions)
  // If premium support: create a support request to prioritize
  if (type === 'premium_support') {
    const reqs = readJson<any[]>('support/requests.json', [])
    const srid = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`
    reqs.push({ id: srid, sessionId: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', createdAt: Date.now() })

    writeJson('support/requests.json', reqs)
  }
<<<<<<< HEAD

  return res.status(200).json({ ok: true, id });
};
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { account, amount, type, serviceId } = req.body as { account?: string, amount?: number, type?: string, serviceId?: string },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const redemptions = readJson<any[]>('tokens/redemptions.json', []),;
  const id = `rdm_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const record = { id, account, amount, type, serviceId: serviceId ?? null, createdAt: Date.now() },;
  redemptions.push(record);
  writeJson('tokens/redemptions.json', redemptions);
=======
  return res.status(200).json({ ok: true, id })

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
}

=======
<<<<<<< HEAD
=======
}

  // If premium support: create a support request to prioritize
  if (type === 'premium_support') {
    const reqs = readJson<any[]>('support/requests.json', []);
    const srid = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
    reqs.push({ id: srid, sessionId: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', createdAt: Date.now() });
    writeJson('support/requests.json', reqs)
  }
  return res.status(200).json({ ok: true, id })
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from 'next',
import { read_json, write_json } from '../../../utils / fs_db',
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const { account, amount, type, service_id } = req.body as { account?: string, amount?: number, type?: string, service_id?: string },
  if (return res.status (400).json ({ error: 'Invalid input' }), ) {
  $2
}
  const redemptions = read_json < any[]>('tokens / redemptions.json', []),
  const id = `rdm_${Math.random ().to_string (36).slice (2)}_${Date.now ()}`,
  const record = { id, account, amount, type, service_id: service_id ?? null, created_at: Date.now () },
  redemptions.push (record),
  write_json ('tokens / redemptions.json', redemptions),
  // If premium support: create a support request to prioritize;
  // Check condition
if ( {) {
  $2
}
    const reqs = read_json < any[]>('support / requests.json', []),
    const srid = `sr_${Math.random ().to_string (36).slice (2)}_${Date.now ()}`,
    reqs.push ({ id: srid, session_id: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', created_at: Date.now () }),
    write_json ('support / requests.json', reqs);
  }
  return res.status (200).json ({ ok: true, id });
}
;
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
}

import type { NextApiRequest, NextApiResponse } from 'next';

import { readJson, writeJson } from '../../../utils/fsDb';
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJson, writeJson } from '../../../utils/fsDb',;
;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { account, amount, type, serviceId } = req.body as { account?: string, amount?: number, type?: string, serviceId?: string }
  if (!account |!amount |amount <= 0 |!type) return res.status(400).json({ error: 'Invalid input' })
  const redemptions = readJson<any[]>('tokens/redemptions.json', [])
  const id = `rdm_${Math.random().toString(36).slice(2)}_${Date.now()}`
  const record = { id, account, amount, type, serviceId: serviceId ?? null, createdAt: Date.now() }
  redemptions.push(record)
  writeJson('tokens/redemptions.json', redemptions)
  // If premium support: create a support request to prioritize
  if (type === 'premium_support') {
    const reqs = readJson<any[]>('support/requests.json', [])
    const srid = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`
    reqs.push({ id: srid, sessionId: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', createdAt: Date.now() })

    writeJson('support/requests.json', reqs)
  }
  return res.status(200).json({ ok: true, id })

import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { account, amount, type, serviceId } = req.body as { account?: string, amount?: number, type?: string, serviceId?: string }
  if (!account |!amount |amount <= 0 |!type) return res.status(400).json({ error: 'Invalid input' })
  const redemptions = readJson<any[]>('tokens/redemptions.json', [])
  const id = `rdm_${Math.random().toString(36).slice(2)}_${Date.now()}`
  const record = { id, account, amount, type, serviceId: serviceId ?? null, createdAt: Date.now() }
  redemptions.push(record)
  writeJson('tokens/redemptions.json', redemptions)
  // If premium support: create a support request to prioritize
  if (type === 'premium_support') {
    const reqs = readJson<any[]>('support/requests.json', [])
    const srid = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`
    reqs.push({ id: srid, sessionId: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', createdAt: Date.now() })

    writeJson('support/requests.json', reqs)
  }
  return res.status(200).json({ ok: true, id })

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  return res.status(200).json({ ok: true, id });
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJson, writeJson } from '../../../utils/fsDb';
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { account, amount, type, serviceId } = req.body as { account?: string, amount?: number, type?: string, serviceId?: string },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const redemptions = readJson<any[]>('tokens/redemptions.json', []),;
  const id = `rdm_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const record = { id, account, amount, type, serviceId: serviceId ?? null, createdAt: Date.now() },;
  redemptions.push(record);
  writeJson('tokens/redemptions.json', redemptions);
  // If premium support: create a support request to prioritize;
  if (type === 'premium_support') {;
    const reqs = readJson<any[]>('support/requests.json', []),;
    const srid = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
    reqs.push({ id: srid, sessionId: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', createdAt: Date.now() });
    writeJson('support/requests.json', reqs);
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

import type { NextApiRequest, NextApiResponse } from 'next',
import { read_json, write_json } from '../../../utils / fs_db',
;
export default async /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: 'Method not allowed' }), ) {
  $2
}
  const { account, amount, type, service_id } = req.body as { account?: string, amount?: number, type?: string, service_id?: string },
  if (return res.status (400).json ({ error: 'Invalid input' }), ) {
  $2
}
  const redemptions = read_json < any[]>('tokens / redemptions.json', []),
  const id = `rdm_${Math.random ().to_string (36).slice (2)}_${Date.now ()}`,
  const record = { id, account, amount, type, service_id: service_id ?? null, created_at: Date.now () },
  redemptions.push (record),
  write_json ('tokens / redemptions.json', redemptions),
  // If premium support: create a support request to prioritize;
  // Check condition
if ( {) {
  $2
}
    const reqs = read_json < any[]>('support / requests.json', []),
    const srid = `sr_${Math.random ().to_string (36).slice (2)}_${Date.now ()}`,
    reqs.push ({ id: srid, session_id: account, reason: 'Premium support redemption', tag: 'premium_support', status: 'open', created_at: Date.now () }),
    write_json ('support / requests.json', reqs);
  }
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
  return res.status (200).json ({ ok: true, id });
}
;


<<<<<<< HEAD
}
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
