



<<<<<<< HEAD:pages_backup/api/integrations/providers.ts
=======



>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/integrations/providers.ts
}
import type { NextApiRequest, NextApiResponse } from './next';
import { PROVIDERS  } from '../../../lib / integrations / registry';
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  $2
}
  res.status (200).json ({ providers: PROVIDERS });
}


<<<<<<< HEAD:pages_backup/api/integrations/providers.ts
ursor/fix-website-loading-errors-and-merge-6662



import type { NextApiRequest, NextApiResponse } from 'next';
=======




ursor/fix-website-loading-errors-and-merge-6662


import type { NextApiRequest, NextApiResponse } from 'next';
import { PROVIDERS } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/integrations/providers.ts


<<<<<<< HEAD:pages_backup/api/integrations/providers.ts
=======
import type { NextApiRequest, NextApiResponse } from "next";
import { PROVIDERS } from "../../../lib/integrations/registry";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET");
    return res.status(405).json({ error: "Method not allowed" });
  res.status(200).json({ providers: PROVIDERS });
}
import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/integrations/providers.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { PROVIDERS } from '../../../lib/integrations/registry';
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
<<<<<<< HEAD:pages_backup/api/integrations/providers.ts
}


=======


}


}


}
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/integrations/providers.ts

  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  res.status(200).json({ providers: PROVIDERS })
}
origin/cursor/automate-test-improve-and-merge-code-2533
