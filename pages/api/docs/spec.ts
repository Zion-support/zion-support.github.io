<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a


}

  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(v1)
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======

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
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(v1);
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
}
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
}


<<<<<<< HEAD
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
