<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { redeemToCredits } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {


  } catch (err: any) {
    return res.status(400).json({ error: err.message })
import type { NextApiRequest, NextApiResponse } from "next",;
import { redeemToCredits } from "../../../utils/token/service",;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ result: 'redeemed' });
  } catch (err: any) {


  } catch (err: any) {

}

}
;
    res.status(400).json({
      error: err.message
    });
import type { NextApiRequest, NextApiResponse } from "next",
import { redeemToCredits } from "../../../utils/token/service",
=======
import type { NextApiRequest, NextApiResponse } from "next",;
import { redeemToCredits } from "../../../utils/token/service",;
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount } = req.body || {}
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" })
  try {
    const result = redeemToCredits(userId, Math.floor(amount))
<<<<<<< HEAD
=======
>>>>>>> main
=======
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, amount } = req.body || {},
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" });
  try {
    const result = null;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> pr-12243
=======
import type { NextApiRequest, NextApiResponse } from "next",;"
import { redeemToCredits } from "../../../utils/token/service",;
export default function handler() { return null; }
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount } = req.body || {},"
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" }),
  try {}
    const result = redeemToCredits(userId, Math.floor(amount)),
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    return res.status(200).json(result)
  } catch (err: any) {}
    return res.status(400).json({ error: err.message })
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { redeemToCredits } from "../../../utils/token/service";
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { userId, amount } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    const result = redeemToCredits(userId, Math.floor(amount));
    return res.status(200).json(result);
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
  }
}
  }
}
  }
}
  }
}


=======
  }
};
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
  };
};"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
