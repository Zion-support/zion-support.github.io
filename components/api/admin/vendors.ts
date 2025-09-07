import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { setVendorApproval, setVendorCommission, suspendVendor } from '../../../utils/vendor-store';
=======
import {
  setVendorApproval
  setVendorCommission
  suspendVendor;
} from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });  const { action, vendorId, value } = req.body |{};import { setVendorApproval, setVendorCommission, suspendVendor } from '../../../utils/vendor-store';
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { action, vendorId, value } = req.body || {},
  try {
    if (action;
    res.status(200).json({ ok: true })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
}
}