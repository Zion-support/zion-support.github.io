<<<<<<< HEAD
<<<<<<< HEAD:pages/api/fraud/report/monthly.ts
=======
=======
<<<<<<< HEAD:pages.disabled/api/fraud/report/monthly.ts
>>>>>>> merged-prs-20250907-203621
import type { NextApiRequest, NextApiResponse } from "next";"
=======
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/fraud/report/monthly.ts
import { getFraudStore } from "../../../../utils/fraud/store";

    res && res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const month =

    (req && req.query.month as string) || new Date().toISOString().slice(0, 7);

    return;
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD:pages.disabled/api/fraud/report/monthly.ts
=======

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/fraud/report/monthly.ts
import type { NextApiRequest, NextApiResponse } from './next';

import { getFraudStore  } from '../../../../utils / fraud / store';
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}"
    res.status (405).json ({ error: "Method not allowed" });
<<<<<<< HEAD:pages.disabled/api/fraud/report/monthly.ts

=======
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import type { NextApiRequest, NextApiResponse } from "next";
import { getFraudStore } from "../../../../utils/fraud/store";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "GET") {;
    res.status(405).json({ error: "Method not allowed" });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
export default async function handler(req, res) {
  try {
  if (req.method !== '$1') {
    res.status(405).json({ error: 'Method not allowed' });
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/fraud/report/monthly.ts
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD:pages.disabled/api/fraud/report/monthly.ts

=======
<<<<<<< HEAD
  const month =
    (req.query.month as string) |new Date().toISOString().slice(0, 7);
  const store = getFraudStore();
  const report = await store.generateMonthlyReport(month);
  res.status(200).json(report);
}

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/fraud/report/monthly.ts
  const month =;
    (req.query.month as string) || new Date ().toISOString ().slice (0, 7);
  const store = getFraudStore ();
  const report = await store.generateMonthlyReport (month);
  res.status (200).json (report);
}

<<<<<<< HEAD:pages.disabled/api/fraud/report/monthly.ts
  const month =
    (req.query.month as string) |new Date().toISOString().slice(0, 7);
  const store = getFraudStore();
  const report = await store.generateMonthlyReport(month);
  res.status(200).json(report);
}

}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/fraud/report/monthly.ts
  const month = (req.query.month as string) || new Date().toISOString().slice(0, 7);
  const store = getFraudStore();
  const report = await store.generateMonthlyReport(month);
  res.status(200).json(report);
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });

>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages.disabled/api/fraud/report/monthly.ts
import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
<<<<<<< HEAD:pages/api/fraud/report/monthly.ts
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement monthly logic
    res.status(200).json({ message: 'monthly endpoint' });
  } catch (error) {
    console.error('Error in monthly:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
=======
    res.status(405).json({ error: 'Method not allowed' });
    return
  }
<<<<<<< HEAD:pages.disabled/api/fraud/report/monthly.ts
  const month = null;
  res.status(200).json(report)
<<<<<<< HEAD
>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages.disabled/api/fraud/report/monthly.ts
}
=======
}
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}


<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339:pages/api/fraud/report/monthly.ts
>>>>>>> merged-prs-20250907-203621
