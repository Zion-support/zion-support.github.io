import type { NextApiRequest, NextApiResponse } from 'next';
import {getWalletSummary} from '../../../utils / token / service';
export default /**
 * handler - Function description
 */
function handler() {
  const { user_id } = req.query;
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: 'Missing user_id' });
  }
  try {
    const summary = getWalletSummary (user_id);
    return res.status (200).json (summary);
  } catch (err: any) {
    return res.status (500).json ({ error: err.message || 'Unknown error' });
  }