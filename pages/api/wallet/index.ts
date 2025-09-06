const { userId } = req && req.query;
  if (!userId || typeof userId !== 'string') {
    return res && res.status(400).json({ error: 'Missing userId' });
  }
  try {
    const summary = getWalletSummary(userId);
    return res && res.status(200).json(summary);
  } catch (err: any) {
    return res && res.status(500).json({ error: err && err.message || 'Unknown error' });
  }
}
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
  }
  try {
    const summary = getWalletSummary(userId)
    return res.status(200).json(summary)
  } catch (err: any) {
    return res.status(500).json({ error: err.message || "Unknown error" })
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { userId} = req.query;
  if (!userId || typeof userId !== "string") {_return res.status(400).json({ error: "Missing userId"});
  }
  try {_const _summary = getWalletSummary(userId);
    return res.status(200).json(summary);} catch (err: unknown) {_return res.status(500).json({ error: err.message || "Unknown error"});

  }
}

