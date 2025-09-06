<<<<<<< HEAD


}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======
=======
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df

import type { NextApiRequest, NextApiResponse } from "next";



export default function handler(req: NextApiRequest, res: NextApiResponse) {;

<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from "next";

import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="800" height="300"><rect width="100%" height="100%" fill="#eef2ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="#1f2937">Global User Breakdown (placeholder)</text></svg>`;
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
  res.setHeader("Content-Typeimage/svg+xml");
  res.send(svg);
}


<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
