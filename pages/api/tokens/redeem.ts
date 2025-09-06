<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import { readJson, writeJson } from '[^']*';
=======
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85

import { readJson, writeJson } from '../../../utils/fsDb';
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { readJson, writeJson } from '../../../utils/fsDb',;
;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  return res.status(200).json({ ok: true, id })
<<<<<<< HEAD
}
=======
import { readJson, writeJson } from '../../../utils/fsDb';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const { account, amount, type, serviceId } = req.body as {
    account?: string;
    amount?: number;
    type?: string;
    serviceId?: string;
  };
  if (!account || !amount || amount <= 0 || !type)
    return res.status(400).json({ error: 'Invalid input' });

  
}

const redemptions = readJson<any[]>('tokens/redemptions.json', []);
  const id = `rdm_${Math.random().toString(36).slice(2)}_${Date.now()}`;
  const record = {
    id,
    account,
    amount,
    type,
    serviceId: serviceId ?? null,
    createdAt: Date.now(),
  };
  redemptions.push(record);
  writeJson('tokens/redemptions.json', redemptions);

  // If premium support: create a support request to prioritize
  if (type === 'premium_support') {
    const reqs = readJson<any[]>('support/requests.json', []);
    const srid = `sr_${Math.random().toString(36).slice(2)}_${Date.now()}`;
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
=======

  return res.status(200).json({ ok: true, id });
};
=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  return res.status(200).json({ ok: true, id });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
