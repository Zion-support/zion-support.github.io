import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
<<<<<<< HEAD
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(v1)
}
=======
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(v1);
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
}

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(v1);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
