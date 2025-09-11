<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req && req.method !== "GET")
    return res && res.status(405).json({ error: "Method not allowed" });
  const { since } = req && req.query as { since?: string };

  const state = readState();
  const sinceTs = since ? Number(since) : 0;
  const events = state && state.events.filter(
    (e) => e && e.type === "zion && zion.job.posted" && e && e.timestamp > sinceTs,


  );
  res && res.status(200).json({ events });
}


<<<<<<< HEAD


<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState } from "../../../../lib/integrations/fileStore";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET");
    return res.status(405).json({ error: "Method not allowed" });
=======
=======
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
import type { NextApiRequest, NextApiResponse } from './next';
import { read_state  } from '../../../../lib / integrations / file_store';
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
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  const { since } = req.query as { since?: string }
  const state = readState();
  const sinceTs = since ? Number(since) : 0;
const events = state && state.events.filter(
    (e) => e && e.type === "zion && zion.job.posted" && e && e.timestamp > sinceTs,
  );
  res && res.status(200).json({ events });
=======
  const { since } = req.query as { since?: string }
  const state = read_state ();
  const since_ts = since ? Number (since) : 0;
  const events = state.events.filter (
    (e) => e.type === "zion.job.posted" && e.timestamp > since_ts,
  );
  res.status (200).json ({ events });
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
}




<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { readState } from '../../../../lib/integrations/fileStore';
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
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
