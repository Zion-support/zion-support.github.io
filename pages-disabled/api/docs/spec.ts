
}

  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(v1)

}

'
import type { NextApiRequest, NextApiResponse } from 'next';'
import v1 from '../../../data/api-docs/v1';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
res.setHeader("Content-Type", "application/json");
  res.status(200).json(v1);
}
"
import type { NextApiRequest, NextApiResponse } from "next";"
import v1 from "../../../data/api-docs/v1";
export default function handler() { return null; }
}'
import type { NextApiRequest, NextApiResponse } from 'next';'
import v1 from '../../../data/api-docs/v1';
export default function handler(req, res) {}
  try {';
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(v1);
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
