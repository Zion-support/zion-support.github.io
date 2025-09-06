import type { NextApiRequest, NextApiResponse } from 'next';
  const vendors = listVendors();
  res && res.status(200).json({ vendors });export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const vendors = listVendors();
  res && res.status(200).json({ vendors })
}
  const vendors = listVendors();
  res.status(200).json({ vendors })
}
import { list_vendors } from '../../../utils / vendor - store';
export default /**
 * handler - Function description
 */
function handler() {
  const vendors = list_vendors ();
  res.status (200).json ({ vendors });export default /**
 * handler - Function description
 */
function handler() {
  const vendors = list_vendors ();
  res.status (200).json ({ vendors });
}