import type { NextApiRequest, NextApiResponse } from './next';
import { getFraudStore  } from '../../../../utils / fraud / store';
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
}
    res.status (405).json ({ error: "Method not allowed" });
    return;
  }
  const month =;
    (req.query.month as string) || new Date ().toISOString ().slice (0, 7);
  const store = getFraudStore ();
  const report = await store.generateMonthlyReport (month);
  res.status (200).json (report);
}