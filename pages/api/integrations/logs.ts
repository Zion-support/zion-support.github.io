<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req && req.query as { providerId?: string };

  const state = readState();
  const logs = providerId

}

=======
=======
    ? state.logs.filter((l) => l.providerId === providerId)
    : state.logs;
  res.status(200).json({ logs });
}
<<<<<<< HEAD


=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });

import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../lib/integrations/fileStore';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  const { providerId } = req.query as { providerId?: string };
  const state = readState();
  const logs = providerId ? state.logs.filter(l => l.providerId === providerId) : state.logs;
  res.status(200).json({ logs })
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}

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
  const { provider_id } = req.query as { provider_id?: string }
  const state = read_state ();
  const logs = provider_id;
    ? state.logs.filter ((l) => l.provider_id === provider_id);
    : state.logs;
  res.status (200).json ({ logs });
}

=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
