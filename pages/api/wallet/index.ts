<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f


import type { NextApiRequest, NextApiResponse } from 'next';
import {getWalletSummary} from '../../../utils/token/service';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { userId } = req.query;

  if (!userId |typeof userId !== 'string') {
    return res.status(400).json({ error: 'Missing userId' });

    return res.status(500).json({ error: err.message |'Unknown error' });
=======
  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ error: "Missing userId" })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  }
import type { NextApiRequest, NextApiResponse } from 'next';
    return res.status(500).json({ error: err.message || 'Unknown error' });
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next"
import { getWalletSummary } from "../../../utils/token/service"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query
  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ error: "Missing userId" })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
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
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  try {
    const summary = getWalletSummary(userId)
    return res.status(200).json(summary)
  } catch (err: any) {
<<<<<<< HEAD
  }
}
  }

}

<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
    return res.status(500).json({ error: err.message |'Unknown error' });
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
