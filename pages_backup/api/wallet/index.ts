<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/wallet/index.ts
<<<<<<< HEAD:pages/api/wallet/index.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/wallet/index.ts


<<<<<<< HEAD:pages/api/wallet/index.ts
=======
=======


import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
ursor/fix-website-loading-errors-and-merge-6662
    return res.status (500).json ({ error: err.message || 'Unknown error' });
  }

=======




import type { NextApiRequest, NextApiResponse } from 'next';


'
    return res.status (500).json ({ error: err.message || 'Unknown error' });
  }
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/wallet/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';

  }
  try {}
    const summary = getWalletSummary(userId)
    return res.status(200).json(summary)
  } catch (err: any) {}
    return res.status(500).json({ error: err.message || "Unknown error" })"
import type {_NextApiRequest, _NextApiResponse} from "next";

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_const { userId} = req.query;"
  if (!userId || typeof userId !== "string") {_return res.status(400).json({ error: "Missing userId"});
  }
  try {_const _summary = getWalletSummary(userId);"
    return res.status(200).json(summary);} catch (err: unknown) {_return res.status(500).json({ error: err.message || "Unknown error"});

  }
}
"
import type { NextApiRequest, NextApiResponse } from "next";"
import { getWalletSummary } from "../../../utils/token/service";
<<<<<<< HEAD:pages_backup/api/wallet/index.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {


<<<<<<< HEAD
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/wallet/index.ts
import type { NextApiRequest, NextApiResponse } from 'next';
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
';
import type { NextApiRequest, NextApiResponse } from 'next';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/wallet/index.ts
import {getWalletSummary} from '../../../utils/token/service';
export default function handler() { return null; }
  const { userId } = req.query;
'
  if (!userId |typeof userId !== 'string') {'
    return res.status(400).json({ error: 'Missing userId' });
'
    return res.status(500).json({ error: err.message |'Unknown error' });
<<<<<<< HEAD:pages_backup/api/wallet/index.ts
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import {getWalletSummary} from '../../../utils/token/service';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { userId } = req.query;

  if (!userId |typeof userId !== 'string') {
    return res.status(400).json({ error: 'Missing userId' });

    return res.status(500).json({ error: err.message |'Unknown error' });
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ error: "Missing userId" })
origin/cursor/automate-test-improve-and-merge-code-2533
  }
import type { NextApiRequest, NextApiResponse } from 'next';
    return res.status(500).json({ error: err.message || 'Unknown error' });
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from "next"
import { getWalletSummary } from "../../../utils/token/service"
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { userId } = req.query
  if (!userId || typeof userId !== "string") {
    return res.status(400).json({ error: "Missing userId" })
    } catch (error) {
    console.error("Error:", error);
=======
  }'
import type { NextApiRequest, NextApiResponse } from 'next';'
    return res.status(500).json({ error: err.message || 'Unknown error' });
export default function handler() { return null; }
  res.status(200).json({ message: 'API endpoint' });"
import type { NextApiRequest, NextApiResponse } from "next","
import { getWalletSummary } from "../../../utils/token/service",
export default function handler(req: NextApiRequest, res: NextApiResponse) {}
  const { userId } = req.query,"
  if (!userId || typeof userId !== "string") {"
    return res.status(400).json({ error: "Missing userId" });
    } catch (error) {";
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/wallet/index.ts
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }'
import type { NextApiRequest, NextApiResponse } from 'next';'
import {getWalletSummary} from '../../../utils / token / service';
export default /**;
 * handler - Function description;
 */
function handler() {}
  const { user_id } = req.query;
  // Check condition;
if ( {) {}
  $2;
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/api/wallet/index.ts
  try {
    const summary = getWalletSummary(userId)
    return res.status(200).json(summary)
  } catch (err: any) {
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/wallet/index.ts
<<<<<<< HEAD
  }
}
  }

}
=======
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
    return res.status (500).json ({ error: err.message || 'Unknown error' });
  }
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/wallet/index.ts

<<<<<<< HEAD
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from 'next';

=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31


    return res.status(500).json({ error: err.message |'Unknown error' });
  }
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/wallet/index.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/wallet/index.ts
=======
  try {}
    const summary = getWalletSummary(userId),
    return res.status(200).json(summary)
  } catch (err: any) {}
  }
}
  }


}

'
    return res.status (500).json ({ error: err.message || 'Unknown error' });
  }
'
import type { NextApiRequest, NextApiResponse } from 'next';



'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/wallet/index.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
