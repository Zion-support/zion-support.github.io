import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
<<<<<<< HEAD
<<<<<<< HEAD

  res.status(200).json(data)

=======

  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data);export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('updates.json', [] as any[]);

  res.status(200).json(data)


=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;


=======
=======
  const data = readJsonFile('updates && updates.json', [] as any[]);
  res && res.status(200).json(data);export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('updates && updates.json', [] as any[]);
  res && res.status(200).json(data)
}
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data)
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import { readJsonFile } from '../../../../utils / api / storage';
import { requireSuperadminApi } from '../../../../utils / api / auth';
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const data = readJsonFile ('updates.json', [] as any[]);
  res.status (200).json (data);export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const data = readJsonFile ('updates.json', [] as any[]);
  res.status (200).json (data);
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======

=======
import { readJsonFile } from '../../../../utils/api/storage';
import { requireSuperadminApi } from '../../../../utils/api/auth';
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  const data = null;
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data);export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('updates.json', [] as any[]);
  res.status(200).json(data)
}
}

}
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
