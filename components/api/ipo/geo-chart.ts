import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

=======
  res.setHeader('Content-Typeimage/svg+xml'),
  res.send(svg)
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
