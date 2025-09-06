
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

  if (req && req.method !== "GET") {
    res && res.setHeader("Allow", "GET");
    return res && res.status(405).json({ error: "Method not allowed" });
  }



<<<<<<< HEAD
=======
  if (req.method !== "GET") {;
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });

>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }

  try {
    const proposals = await listProposals();
    return res && res.status(200).json({ proposals });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message || "Failed to list proposals" });
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
<<<<<<< HEAD


<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
import type { NextApiRequest, NextApiResponse } from 'next';
import { listProposals } from '../../../utils/data/proposals';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = listProposals();
    res.status(200).json({ proposals })
  } catch (error: any) {
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
    res.status(500).json({ error: error?.message || 'Failed to list proposals' })
=======
    res.status(500).json({ error: error?.message || 'Failed to list proposals' });
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
  }
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
<<<<<<< HEAD
<<<<<<< HEAD
  }
}

=======

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
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}

>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
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
<<<<<<< HEAD
<<<<<<< HEAD

  }
}

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
  }
}
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }
}
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
