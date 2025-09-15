<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req && req.query as { providerId?: string };

  const state = readState();
  const logs = providerId

}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    ? state.logs.filter((l) => l.providerId === providerId)
    : state.logs;
  res.status(200).json({ logs });
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });

}

<<<<<<< HEAD
}

=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
import type { NextApiRequest, NextApiResponse } from './next';
import { read_state  } from '../../../lib / integrations / file_store';
;
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
