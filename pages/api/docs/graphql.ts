import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
function toSDL() {
  return typedefs.join('\n');
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Content-Type", "text/plain");
  res.status(200).send(toSDL());
}
