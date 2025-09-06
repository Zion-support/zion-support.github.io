<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { earnTokens } from "../../../utils/token/service";
import type { NextApiRequest, NextApiResponse } from "next",;
import { earnTokens } from "../../../utils/token/service",;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next",
import { earnTokens } from "../../../utils/token/service",
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount, reason, metadata } = req.body |{}
  if (!userId |typeof amount !== "number" |!reason) {
    return res.status(400).json({ error: "userId, amount, reason required" })

<<<<<<< HEAD
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  };
};
=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from './next';,
import { earn_tokens  } from '../../../utils / token / service';,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

  };
};

=======
import type { NextApiRequest, NextApiResponse } from "next";
import { earnTokens } from "../../../utils/token/service";
export default function handler(req, res) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD
=======
    const tx = earn_tokens (user_id, Math.floor (amount), reason, metadata),
    return res.status (200).json ({ tx });
  } catch (err: any) {
    return res.status (400).json ({ error: err.message });
  }
}
}
;
  }
  try {
    const tx = earnTokens(userId, Math.floor(amount), reason, metadata),
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from "next";
import { earnTokens } from "../../../utils/token/service";
import type { NextApiRequest, NextApiResponse } from "next",;
import { earnTokens } from "../../../utils/token/service",;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next",
import { earnTokens } from "../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" })
  const { userId, amount, reason, metadata } = req.body |{}
  if (!userId |typeof amount !== "number" |!reason) {
    return res.status(400).json({ error: "userId, amount, reason required" })
import type { NextApiRequest, NextApiResponse } from './next';,
import { earn_tokens  } from '../../../utils / token / service';,
export default /**
 * handler - Function description
 */
function handler() {
  if (return res.status (405).json ({ error: "Method not allowed" }), ) {
  $2
}


  };
};

import type { NextApiRequest, NextApiResponse } from "next";
import { earnTokens } from "../../../utils/token/service";
export default function handler(req, res) {
  try {
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { userId, amount, reason, metadata } = req.body || {};
  if (!userId || typeof amount !== "number" || !reason) {;
    return res.status(400).json({ error: "userId, amount, reason required" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  try {
    const tx = earnTokens(userId, Math.floor(amount), reason, metadata);
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
  }
}
  }
}
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

  }
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
=======
  }
}

  }
}
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
