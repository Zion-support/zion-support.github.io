import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
import {
  setVendorApproval,
  setVendorCommission,
  suspendVendor,;
} from '../../../utils/vendor-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
=======
import { setVendorApproval, setVendorCommission, suspendVendor } from '../../../utils/vendor-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
import { setVendorApproval, setVendorCommission, suspendVendor } from '../../../utils/vendor-store';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const { action, vendorId, value } = req.body || {};
  try {
    if (action === 'approve') setVendorApproval(String(vendorId), true);
    else if (action === 'revoke') setVendorApproval(String(vendorId), false);
    else if (action === 'suspend') suspendVendor(String(vendorId), true);
    else if (action === 'unsuspend') suspendVendor(String(vendorId), false);
<<<<<<< HEAD
<<<<<<< HEAD
    else if (action === 'commission')
      setVendorCommission(String(vendorId), Number(value));
=======
    else if (action === 'commission') setVendorCommission(String(vendorId), Number(value));
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    else return res.status(400).json({ error: 'Unknown action' });
    res.status(200).json({ ok: true })
  } catch (e: any) {
<<<<<<< HEAD
    res.status(500).json({ error: e.message });
  }
=======
    else if (action === 'commission') setVendorCommission(String(vendorId), Number(value));
    else return res.status(400).json({ error: 'Unknown action' });
    res.status(200).json({ ok: true })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  };
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    res.status(500).json({ error: e.message })
  };
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
