import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(v1);
=======
  res && res.setHeader("Content-Type", "application/json");
  res && res.status(200).json(v1);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

