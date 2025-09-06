<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
<<<<<<< HEAD
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  res && res.setHeader("Content-Type", "application/json");
  res && res.status(200).json(v1);
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {

  res.setHeader("Content-Type", "application/json");
  res.status(200).json(v1);
import type { NextApiRequest, NextApiResponse } from './next';
import v1 from "../../../data / api - docs / v1";
export default /**
 * handler - Function description
 */
function handler() {
  res.set_header ("Content - Type", "application / json");
  res.status (200).json (v1);
}

<<<<<<< HEAD
=======
=======
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import v1 from "../../../data/api-docs/v1";
export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
  res.setHeader("Content-Type", "application/json");
  res.status(200).json(v1);
}
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import v1 from '../../../data/api-docs/v1';
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default function handler(req, res) {
  try {
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(v1)
}
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/merge-pull-requests-and-resolve-conflicts-52f5
