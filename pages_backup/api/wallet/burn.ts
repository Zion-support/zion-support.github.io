<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/wallet/burn.ts
<<<<<<< HEAD:pages/api-disabled/api/wallet/burn.ts
<<<<<<< HEAD:pages/api/wallet/burn.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:pages/api-disabled/api/wallet/burn.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { burnTokens, burnForFeature } from "../../../utils/token/service";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
import type { NextApiRequest, NextApiResponse } from "next",;
import { burnTokens, burnForFeature } from "../../../utils/token/service",;
=======
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f:pages/api/wallet/burn.ts


  try {
<<<<<<< HEAD
  } catch (err: any) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
;
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next",
import { burnTokens, burnForFeature } from "../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" }),
  const { userId, amount, reason, feature, metadata } = req.body || {},
  if (!userId) return res.status(400).json({ error: "userId required" }),
  try {
    const tx = feature
      ? burnForFeature(userId, feature, metadata)
      : burnTokens(userId, Math.floor(amount), reason || "burn", metadata),
=======
========
>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/wallet/burn.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });
  const { userId, amount, reason, feature, metadata } = req.body || {},
  if (!userId) return res.status(400).json({ error: "userId required" });
  try {
    const tx = null;
origin/cursor/automate-test-improve-and-merge-code-2533
    return res.status(200).json({ tx })
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  };
};
import type { NextApiRequest, NextApiResponse } from "next";
import { burnTokens, burnForFeature } from "../../../utils/token/service";
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { userId, amount, reason, feature, metadata } = req.body || {};
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
      ? burnForFeature(userId, feature, metadata);
      : burnTokens(userId, Math.floor(amount), reason || "burn", metadata);
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
  }
}
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
    const tx = feature;
      ? burnForFeature (user_id, feature, metadata);
      : burn_tokens (user_id, Math.floor (amount), reason || "burn", metadata),
    return res.status (200).json ({ tx });
  } catch (err: any) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31

}

}
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/wallet/burn.ts
=======
========
=======
;
    return res.status(400).json({ error: err.message })


import type { NextApiRequest, NextApiResponse } from "next",;
import { burnTokens, burnForFeature } from "../../../utils/token/service"
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
;
    return res.status(400).json({ error: err.message })


>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/wallet/burn.ts
import type { NextApiRequest, NextApiResponse } from "next",;
import { burnTokens, burnForFeature } from "../../../utils/token/service",
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { burnTokens, burnForFeature } from "../../../utils/token/service"
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/wallet/burn.ts
;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return res.status(400).json({ error: err.message })
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  }
};
<<<<<<< HEAD
<<<<<<<< HEAD:pages/api-disabled/api/wallet/burn.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5:pages/api/wallet/burn.ts
========

>>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/wallet/burn.ts
=======

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
