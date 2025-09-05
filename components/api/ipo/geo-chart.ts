<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="800" height="300"><rect width="100%" height="100%" fill="#eef2ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="#1f2937">Global User Breakdown (placeholder)</text></svg>`,
  res.setHeader('Content-Typeimage/svg+xml'),
  res.send(svg)
=======
  const svg = `<?xml version=&quot;1.0&quot; encoding=&quot;UTF-8&quot;?><svg xmlns=&quot;http://www.w3.org/2000/svg&quot; width=&quot;800&quot; height=&quot;300&quot;><rect width=&quot;100%&quot; height=&quot;100%&quot; fill=&quot;#eef2ff&quot;/><text x=&quot;50%&quot; y=&quot;50%&quot; dominant-baseline=&quot;middle&quot; text-anchor=&quot;middle&quot; font-size=&quot;20&quot; fill=&quot;#1f2937&quot;>Global User Breakdown (placeholder)</text></svg>`;
  res.setHeader('Content-Type', 'image/svg+xml');
  res.send(svg);
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const svg = `<?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" width="800" height="300"><rect width="100%" height="100%" fill="#eef2ff"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-size="20" fill="#1f2937">Global User Breakdown (placeholder)</text></svg>`;
  res.setHeader('Content-Typeimage/svg+xml');
  res.send(svg);
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
}