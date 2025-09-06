<<<<<<< HEAD



import type { NextApiRequest, NextApiResponse } from "next";
import { getWalletSummary } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const { userId } = req.query;


  if (!userId |typeof userId !== 'string') {
    return res.status(400).json({ error: 'Missing userId' });


=======


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
    return res.status (400).json ({ error: 'Missing user_id' });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  }
  try {
    const summary = getWalletSummary (user_id);
    return res.status (200).json (summary);
  } catch (err: any) {
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next",
import { getWalletSummary } from "../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query,
  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ error: "Missing userId" })
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

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

    return res.status(500).json({ error: err.message || "Unknown error" })
import type { NextApiRequest, NextApiResponse } from "next";
import { getWalletSummary } from "../../../utils/token/service";
export default function handler(req, res) {
  try {
  const { userId } = req.query;
  if (!userId || typeof userId !== "string") {;
    return res.status(400).json({ error: "Missing userId" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  try {
    const summary = getWalletSummary(userId);
    return res.status(200).json(summary);
  } catch (error) {
    return res.status(500).json({ error: err.message || "Unknown error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
    return res.status (500).json ({ error: err.message || 'Unknown error' });
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
