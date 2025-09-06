<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD:pages_backup/api/proposals/list.ts
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from "next";
import { listProposals } from "../../../utils/data/proposals";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/list.ts


  if (req && req.method !== "GET") {"
    res && res.setHeader("Allow", "GET");"
    return res && res.status(405).json({ error: "Method not allowed" });
  }









  }

  try {}
    const proposals = await listProposals();
    return res && res.status(200).json({ proposals });
  } catch (error: any) {}
    return res;
      .status(500)
<<<<<<< HEAD:pages_backup/api/proposals/list.ts
<<<<<<< HEAD
      .json({ error: error?.message |"Failed to list proposals" });
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      .json({ error: error?.message || "Failed to list proposals" });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
<<<<<<< HEAD
=======
<<<<<<< HEAD


<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from 'next';
=======

import type { NextApiRequest, NextApiResponse } from 'next';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/list.ts
import { listProposals } from '../../../utils/data/proposals';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {}
  try {};
    const proposals = listProposals();
    res.status(200).json({ proposals })
<<<<<<< HEAD:pages_backup/api/proposals/list.ts
  } catch (error: any) {
<<<<<<< HEAD
    res.status(500).json({ error: error?.message || 'Failed to list proposals' });
  }
}
=======
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  } catch (error: any) {}
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/list.ts
    res.status(500).json({ error: error?.message || 'Failed to list proposals' })
'
    res.status(500).json({ error: error?.message || 'Failed to list proposals' });

  }
<<<<<<< HEAD:pages_backup/api/proposals/list.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}
    res.set_header ("Allow", "GET");
=======
}"
    res.set_header ("Allow", "GET");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/list.ts
    return res.status (405).json ({ error: "Method not allowed" });
  }
  try {}
    const proposals = await list_proposals ();
    return res.status (200).json ({ proposals });
  } catch (error: any) {}
    return res;
      .status (500);"
      .json ({ error: error?.message || "Failed to list proposals" });
'
import type { NextApiRequest, NextApiResponse } from 'next';'
import { listProposals } from '../../../utils/data/proposals';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {}
  try {};
    const proposals = listProposals();
    res.status(200).json({ proposals });
  } catch (error: any) {'
    res.status(500).json({ error: error?.message || 'Failed to list proposals' });


  }

  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });


  }
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======



}


<<<<<<< HEAD:pages_backup/api/proposals/list.ts
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { listProposals } from '[^']*';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = null;
    res.status(200).json({ proposals })
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to list proposals' })
  }
  try {
    const proposals = await listProposals();
    return res.status(200).json({ proposals });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message |"Failed to list proposals" });
  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/proposals/list.ts
