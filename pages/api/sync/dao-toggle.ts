
import type { NextApiRequest, NextApiResponse } from "next",;
import { readState, writeState } from "../../../utils/sync/storage",;
;

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });

<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
  return res.status(200).json({ paused: state.config.paused })
};

