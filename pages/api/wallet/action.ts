<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from './next';,
import { handle_action  } from '../../../utils / token / service';,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}
  const { user_id, action, metadata } = req.body || {},
  if (return res.status (400).json ({ error: "user_id and action required" }), ) {
  $2
}
  try {
    const tx = handle_action (user_id, action, metadata),
    return res.status (200).json ({ tx });
  } catch (err: any) {
    return res.status (400).json ({ error: err.message });
  }
}
}
;
  try {
    const tx = handleAction(userId, action, metadata),
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })

  }
}

=======
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { handleAction } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, action, metadata } = req.body |{}
  if (!userId |!action) return res.status(400).json({ error: "userId and action required" })
  try {
    const tx = handleAction(userId, action, metadata)

    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { handleAction } from "../../../utils/token/service",;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ tx: 'transaction-id' });
  } catch (err: any) {
    res.status(400).json({
      error: err.message
    });
import type { NextApiRequest, NextApiResponse } from "next",
import { handleAction } from "../../../utils/token/service",
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, action, metadata } = req.body || {},
  if (!userId || !action) return res.status(400).json({ error: "userId and action required" }),
  try {
    const tx = handleAction(userId, action, metadata),
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
<<<<<<< HEAD
=======
<<<<<<< HEAD
  };
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from "next";
import { handleAction } from "../../../utils/token/service";
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { userId, action, metadata } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const tx = handleAction(userId, action, metadata);
    return res.status(200).json({ tx });
  } catch (error) {
    return res.status(400).json({ error: err.message });
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
=======
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
