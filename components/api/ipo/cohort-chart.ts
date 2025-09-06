import type { NextApiRequest, NextApiResponse } from "next";


<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
export default function handler(req: NextApiRequest, res: NextApiResponse) {;


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

import type { NextApiRequest, NextApiResponse } from "next";



export default function handler(req: NextApiRequest, res: NextApiResponse) {;

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="800" height="300"><rect width="100%" height="100%" fill="#f3f4f6"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="#374151">Retention Cohorts (placeholder)</text></svg>`;
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
  res.setHeader("Content-Typeimage/svg+xml");
  res.send(svg);
}

