import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { userId, amount, currency } = req.body as {
    userId?: string;
    amount?: number;
    currency?: string;
  };
  if (!userId || typeof amount !== 'number')
    return res.status(400).json({ error: 'Missing userId or amount' });

  const THRESHOLD = Number(process.env.ZION_CASHOUT_KYC_THRESHOLD || '1000');
  const db = load();
  const profile = db[userId];

  if (amount <= THRESHOLD)
    return res.status(200).json({ allowed: true, reason: 'Below threshold' });
  if (!profile)
    return res.status(200).json({ allowed: false, reason: 'KYC not started' });
  if (profile.status !== 'approved')
    return res.status(200).json({ allowed: false, reason: 'KYC not approved' });
  if (
    profile.amlStatus === 'match' ||
    (profile.flags || []).includes('aml_alert')
  )
    return res.status(200).json({ allowed: false, reason: 'AML alert' });

  return res
    .status(200)
    .json({ allowed: true, reason: 'KYC approved and AML clear' });
}
=======
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ canCashout: true });
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
