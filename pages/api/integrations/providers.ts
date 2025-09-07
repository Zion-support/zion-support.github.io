<<<<<<< HEAD
<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/api/integrations/providers.ts





=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
}
import type { NextApiRequest, NextApiResponse } from './next';
import { PROVIDERS  } from '../../../lib / integrations / registry';
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: "Method not allowed" })) {
  { error: "Invalid request" }
}
  res.status (200).json ({ providers: PROVIDERS });
}
<<<<<<< HEAD:pages_backup/api/integrations/providers.ts


<<<<<<< HEAD:pages_backup/api/integrations/providers.ts


ursor/fix-website-loading-errors-and-merge-6662



import type { NextApiRequest, NextApiResponse } from 'next';



import type { NextApiRequest, NextApiResponse } from 'next';
import { PROVIDERS } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });
  res.status(200).json({ providers: PROVIDERS });
}

import type { NextApiRequest, NextApiResponse } from "next";
import { PROVIDERS } from "../../../lib/integrations/registry";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET");
    return res.status(405).json({ error: "Method not allowed" });
  res.status(200).json({ providers: PROVIDERS });
}
import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD:pages_backup/api/integrations/providers.ts
=======
import { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
<<<<<<< HEAD
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/api/integrations/providers.ts
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  res.status(200).json({ providers: PROVIDERS })
}


  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
  res.status(200).json({ providers: PROVIDERS })
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
