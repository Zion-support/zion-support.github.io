

<<<<<<< HEAD


=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
;

=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next",
import { readState, writeState } from "../../../utils/sync/storage",


<<<<<<< HEAD

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { paused } = req.body as { paused: boolean },
  const state = readState(),
  state.config.paused = Boolean(paused),
  writeState(state),


<<<<<<< HEAD
  return res.status(200).json({ paused: state.config.paused })
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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
}

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
