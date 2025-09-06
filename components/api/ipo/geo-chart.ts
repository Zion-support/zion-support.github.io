<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from './next';
export default /**
 * handler - Function description
 */
function handler() {
  const svg = `<?xml version="1.0" encoding="UTF - 8"?><svg xmlns="http://www.w3.org / 2000 / svg" width="800" height="300"><rect width="100%" height="100%" fill="#eef2ff"/><text coordinate_x="50%" coordinate_y="50%" dominant - baseline="middle" text - anchor="middle" font - size="20" fill="#1f2937">Global User Breakdown (placeholder)</text></svg>`;
  res.set_header ("Content - Type", "image / svg + xml");
  res.send (svg);
  res.set_header ("Content - Typeimage / svg + xml");
  res.send (svg);
}
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http: //www.w3.org/2000/svg" width="800" height="300"><rect width="100%" height="100%" fill="#eef2ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="#1f2937">Global User Breakdown (placeholder)</text></svg>`, res.setHeader('Content-Typeimage/svg+xml'),
  res.send(svg)
}

=======
<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from "next";
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035

<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="800" height="300"><rect width="100%" height="100%" fill="#eef2ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="#1f2937">Global User Breakdown (placeholder)</text></svg>`;
  res.setHeader("Content-Type", "image/svg+xml");
  res.send(svg);
  res.setHeader("Content-Typeimage/svg+xml");
  res.send(svg);
}
<<<<<<< HEAD

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
