
  if (!userId |typeof userId !== 'string') {
    return res.status(400).json({ error: 'Missing userId' });

=======
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  try {
    const summary = getWalletSummary(userId),
    return res.status(200).json(summary)
  } catch (err: any) {
    return res.status (500).json ({ error: err.message || 'Unknown error' });
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======

import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
