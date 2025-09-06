<<<<<<< HEAD
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  } catch (err: any) {

}

<<<<<<< HEAD
}
;
import type { NextApiRequest, NextApiResponse } from "next";
import { redeemToCredits } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount } = req.body |{}
  if (!userId |typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" })
  try {
    const result = redeemToCredits(userId, Math.floor(amount))

    return res.status(200).json(result)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
import type { NextApiRequest, NextApiResponse } from "next",;
import { redeemToCredits } from "../../../utils/token/service",;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    res.status(200).json({ result: 'redeemed' });
  } catch (err: any) {
=======
=======
}
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    res.status(400).json({
      error: err.message
    });
import type { NextApiRequest, NextApiResponse } from "next",
import { redeemToCredits } from "../../../utils/token/service",

<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount } = req.body || {},
  if (!userId || typeof amount !== "number") return res.status(400).json({ error: "userId and amount required" }),
  try {
    const result = redeemToCredits(userId, Math.floor(amount)),
    return res.status(200).json(result)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
<<<<<<< HEAD
  };
};
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
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
