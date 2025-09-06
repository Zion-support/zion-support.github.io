<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readState, writeState } from "../../../utils/sync/storage";
export default function handler(req: NextApiRequest, res: NextApiResponse) {


=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
;

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next",
=======
import type { NextApiRequest, NextApiResponse } from "next",;"
import { readState, writeState } from "../../../utils/sync/storage",;
;


import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler() { return null; }
  res.status(200).json({ message: 'API endpoint' });"
import type { NextApiRequest, NextApiResponse } from "next","
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import { readState, writeState } from "../../../utils/sync/storage",
=======
import type { NextApiRequest, NextApiResponse } from "next"
import { readState, writeState } from "../../../utils/sync/storage"


<<<<<<< HEAD
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
=======

export default function handler() { return null; }
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { paused } = req.body as { paused: boolean },
  const state = readState(),
  state.config.paused = Boolean(paused),
<<<<<<< HEAD
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
}
}


=======
=======
>>>>>>> pr-12243
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { paused } = req.body as { paused: boolean }
  const state = readState()
  state.config.paused = Boolean(paused)
  writeState(state)
<<<<<<< HEAD
=======
>>>>>>> main
=======
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { paused } = req.body as { paused: boolean },
  const state = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> pr-12243
  return res.status(200).json({ paused: state.config.paused })
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  writeState(state),;
  return res.status(200).json({ paused: state.config.paused });
};'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
