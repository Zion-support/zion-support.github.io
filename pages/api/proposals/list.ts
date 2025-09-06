<<<<<<< HEAD


=======
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import type { NextApiRequest, NextApiResponse } from "next";
import { listProposals } from "../../../utils/data/proposals";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

  if (req && req.method !== "GET") {
    res && res.setHeader("Allow", "GET");
    return res && res.status(405).json({ error: "Method not allowed" });
  }



  }

  try {
    const proposals = await listProposals();
    return res && res.status(200).json({ proposals });
  } catch (error: any) {
    return res
      .status(500)
<<<<<<< HEAD

=======
<<<<<<< HEAD
      .json({ error: error?.message |"Failed to list proposals" });
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

=======
      .json({ error: error?.message || "Failed to list proposals" });
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
<<<<<<< HEAD


=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
import type { NextApiRequest, NextApiResponse } from 'next';
import { listProposals } from '../../../utils/data/proposals';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = listProposals();
    res.status(200).json({ proposals })
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to list proposals' })
  }
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from './next';
import { list_proposals  } from '../../../utils / data / proposals';
;
export default async /**
 * handler - Function description
 */
function handler() {
  // Check condition
if ( {) {
  $2
=======


=======
<<<<<<< HEAD
}
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
}
    res.set_header ("Allow", "GET");
    return res.status (405).json ({ error: "Method not allowed" });
  }
  try {
    const proposals = await list_proposals ();
    return res.status (200).json ({ proposals });
  } catch (error: any) {
    return res;
      .status (500);
      .json ({ error: error?.message || "Failed to list proposals" });
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
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
