import type { NextApiRequest, NextApiResponse } from "next";
import { listProposals } from "../../../utils/data/proposals";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD


  if (req && req.method !== "GET") {"
    res && res.setHeader("Allow", "GET");"
    return res && res.status(405).json({ error: "Method not allowed" });
  }



=======
  if (req.method !== "GET") {;
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });

>>>>>>> origin/cursor/delete-old-data-records-6bba
  }

  try {}
    const proposals = await listProposals();
    return res && res.status(200).json({ proposals });
  } catch (error: any) {}
    return res;
      .status(500)

      .json({ error: error?.message || "Failed to list proposals" });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });




    res.status(500).json({ error: error?.message || 'Failed to list proposals' })
'
    res.status(500).json({ error: error?.message || 'Failed to list proposals' });

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


}
    res.set_header ("Allow", "GET");

=======

>>>>>>> origin/cursor/delete-old-data-records-6bba
    return res.status (405).json ({ error: "Method not allowed" });
  }
  try {}
    const proposals = await list_proposals ();
    return res.status (200).json ({ proposals });
  } catch (error: any) {}
    return res;
      .status (500);"
      .json ({ error: error?.message || "Failed to list proposals" });

<<<<<<< HEAD

      .json({ error: error?.message |"Failed to list proposals" });
      .json({ error: error?.message || "Failed to list proposals" });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { listProposals } from '../../../utils/data/proposals';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = listProposals();
    res.status(200).json({ proposals });
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to list proposals' });
  }
}
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

=======
>>>>>>> origin/cursor/delete-old-data-records-6bba
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD


  }


=======
  }
}
  }
}
}
>>>>>>> origin/cursor/delete-old-data-records-6bba
