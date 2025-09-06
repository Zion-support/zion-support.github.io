import type { NextApiRequest, NextApiResponse } from 'next';

import { setVendorApproval, setVendorCommission, suspendVendor } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { action, vendorId, value } = req.body || {},
  try {
    if (action;

    res.status(200).json({ ok: true })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
};
}
