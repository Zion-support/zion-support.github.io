<<<<<<< HEAD


=======
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
}

  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(v1)
<<<<<<< HEAD
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

=======
>>>>>>> cursor/automate-test-improve-and-merge-code-ac88
}

}

import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(v1);
}

import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(v1);
}
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
export default function handler(req, res) {
  try {
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(v1);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}