import type { NextApiRequest, NextApiResponse } from "next";
import { redeemToCredits } from "../../../utils/token/service";
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {} catch (err: any) {,
    return res.status(400).json({ error: err.message ,}),
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  try {,
    res.status(200).json({ result: 'redeemed' ,});
  } catch (err: any) {,
    res.status(400).json({,
      error: err.message,});
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" ,});
  const { userId, amount } = req.body || {};
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" ,});
  try {,
    const result = redeemToCredits(userId, Math.floor(amount));
    return res.status(200).json(result),
  } catch (err: any) {,
    return res.status(400).json({ error: err.message ,}),
  };
};
export default function handler(req, res) {,
  try {,
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' ,});
  const { userId, amount } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' ,});
    const result = redeemToCredits(userId, Math.floor(amount));
    return res.status(200).json(result);
  } catch (error) {,
    return res.status(400).json({ error: err.message ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
    } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
  }
}
,