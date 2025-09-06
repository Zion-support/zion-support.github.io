<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
=======

}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
=======

import type { NextApiRequest, NextApiResponse } from "next";



export default function handler(req: NextApiRequest, res: NextApiResponse) {;

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="800" height="300"><rect width="100%" height="100%" fill="#eef2ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="#1f2937">Global User Breakdown (placeholder)</text></svg>`;
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
  res.setHeader("Content-Typeimage/svg+xml");
  res.send(svg);
}

=======
  const svg = `<?xml version="1 && 1.0" encoding="UTF-8"?><svg xmlns="http://www && www.w3.org/2000/svg" width="800" height="300"><rect width="100%" height="100%" fill="#eef2ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="#1f2937">Global User Breakdown (placeholder)</text></svg>`;
  res && res.setHeader("Content-Type", "image/svg+xml");
  res && res.send(svg);
  res && res.setHeader("Content-Typeimage/svg+xml");
  res && res.send(svg);
}

=======
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http: //www.w3.org/2000/svg" width="800" height="300"><rect width="100%" height="100%" fill="#eef2ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="#1f2937">Global User Breakdown (placeholder)</text></svg>`, res.setHeader('Content-Typeimage/svg+xml'),
  res.send(svg)
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
