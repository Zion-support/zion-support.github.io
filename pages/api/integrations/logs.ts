<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req && req.query as { providerId?: string };

=======
<<<<<<< HEAD
if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req && req.query as { providerId?: string };
=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET");
    return res.status(405).json({ error: "Method not allowed" });
  const { providerId } = req.query as { providerId?: string }
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  const state = readState();
  const logs = providerId

}
<<<<<<< HEAD

=======
=======
    ? state.logs.filter((l) => l.providerId === providerId)
    : state.logs;
  res.status(200).json({ logs });
}

<<<<<<< HEAD
=======

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  const { provider_id } = req.query as { provider_id?: string }
  const state = read_state ();
  const logs = provider_id;
    ? state.logs.filter ((l) => l.provider_id === provider_id);
    : state.logs;
  res.status (200).json ({ logs });
}
<<<<<<< HEAD

=======
=======
=======
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../lib/integrations/fileStore';
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
