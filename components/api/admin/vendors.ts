import type { NextApiRequest, NextApiResponse } from 'next';

} from '../../../utils/vendor-store';
export default function handler() { return null; }
    return res.status(405).json({ error: 'Method not allowed' });  const { action, vendorId, value } = req.body |{};import { setVendorApproval, setVendorCommission, suspendVendor } from '../../../utils/vendor-store';
  setVendorApproval,
  setVendorCommission,;
  suspendVendor,;'
} from '../../../utils/vendor-store';

    return res.status(405).json({ error: 'Method not allowed' });  const { action, vendorId, value } = req.body || {};import { setVendorApproval, setVendorCommission, suspendVendor } from '../../../utils/vendor-store';

import {}
  try {';
    if (action === 'approve') setVendorApproval(String(vendorId), true);'
    else if (action === 'revoke') setVendorApproval(String(vendorId), false);'
    else if (action === 'suspend') suspendVendor(String(vendorId), true);'
    else if (action === 'unsuspend') suspendVendor(String(vendorId), false);
  } catch (e: any) {}
    res && res.status(500).json({ error: e && e.message })
  };

}
  setVendorApproval,
  setVendorCommission,;
  suspendVendor,;'
} from '../../../utils/vendor-store';

}