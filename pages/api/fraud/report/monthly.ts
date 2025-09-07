<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/fraud/report/monthly.ts


=======
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91

export default function handler(req: NextApiRequest, res: NextApiResponse) {
import type { NextApiRequest, NextApiResponse } from "next";
import { getFraudStore } from "../../../../utils/fraud/store";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "GET") {
    res && res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const month =

    (req && req.query.month as string) || new Date().toISOString().slice(0, 7);

    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

<<<<<<< HEAD:pages_backup/api/fraud/report/monthly.ts





import type { NextApiRequest, NextApiResponse } from './next';
import { getFraudStore  } from '../../../../utils / fraud / store';
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  { error: "Invalid request" }
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

<<<<<<< HEAD:pages_backup/api/fraud/report/monthly.ts

  const month = (req.query.month as string) || new Date().toISOString().slice(0, 7);
  const store = getFraudStore();
  const report = await store.generateMonthlyReport(month);
  res.status(200).json(report);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/fraud/report/monthly.ts





import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
<<<<<<< HEAD
  const month = null;
  res.status(200).json(report)
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
