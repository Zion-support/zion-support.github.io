import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_action, _vendorId, _value} = req.body || {};
  try {_if (action === 'approve') setVendorApproval(String(vendorId), _true);
    else if (action === 'revoke') setVendorApproval(String(vendorId), _false);
    else if (action === 'suspend') suspendVendor(String(vendorId), _true);
    else if (action === 'unsuspend') suspendVendor(String(vendorId), _false);
    else if (action === 'commission') setVendorCommission(String(vendorId), _Number(value));
    else return res.status(400).json({ error: 'Unknown action'});
    res.status(200).json({_ok: true});
  } catch (e: unknown) {_res.status(500).json({ error: e.message});
  }
}