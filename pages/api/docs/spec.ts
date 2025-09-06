<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res && res.setHeader("Content-Type", "application/json");
  res && res.status(200).json(v1);
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
<<<<<<< HEAD

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(v1);
=======
  res && res.setHeader("Content-Type", "application/json");
  res && res.status(200).json(v1);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
import type { NextApiRequest, NextApiResponse } from './next';
import v1 from "../../../data / api - docs / v1";
export default /**
 * handler - Function description
 */
function handler() {
  res.set_header ("Content - Type", "application / json");
  res.status (200).json (v1);
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
}

=======
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(v1)
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
