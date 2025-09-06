import type { NextApiRequest, NextApiResponse } from 'next'
 from '../../../utils/
    return res.status(405).json({ error: 'Method not allowed' });  const { action, vendorId, value } = req.body |{};import { setVendorApproval, setVendorCommission, suspendVendor } from '../../../utils/
 from '../../../utils /
  const { action, vendor_id, value } = req.body || {}import { setVendorApproval, setVendorCommission, suspend_vendor } from '../../../utils /