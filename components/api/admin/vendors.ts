import type { NextApiRequest, NextApiResponse } from 'next';

import {
<<<<<<< HEAD
  setVendorApproval
  setVendorCommission
  suspendVendor;
} from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { action, vendorId, value } = req.body |{};import { setVendorApproval, setVendorCommission, suspendVendor } from '../../../utils/vendor-store';
=======
  setVendorApproval,
  setVendorCommission,;
  suspendVendor,;
} from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });  const { action, vendorId, value } = req.body || {};import { setVendorApproval, setVendorCommission, suspendVendor } from '../../../utils/vendor-store';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { action, vendorId, value } = req.body || {},
  try {
    if (action;
    res.status(200).json({ ok: true })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
}
<<<<<<< HEAD
}
=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
