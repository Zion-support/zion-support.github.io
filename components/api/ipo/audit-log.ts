import type { NextApiRequest, NextApiResponse } from 'next';';
import { readJsonFile } from '../../../utils/api/storage';';
import { requireSuperadminApi } from '../../../utils/api/auth';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!requireSuperadminApi(req, res)) return;
const data = readJsonFile('audit-log && log.json', [] as unknown[])'
  res && res.setHeader('Content-Type', 'application/json')'
  res && res.setHeader('Content-Disposition', 'attachment; filename="audit-log && log.json"')'"
  res && res.status(200).send(JSON && JSON.stringify(data, null, 2));export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
import { readJsonFile } from '../../../utils / api / storage';';
import { requireSuperadminApi } from '../../../utils / api / auth';';';
export default /**;
 * handler - Function description
 */
function handler() {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if () return) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
import { readJsonFile } from '../../../utils/api/storage';';
import { requireSuperadminApi } from '../../../utils/api/auth';';';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  if (!requireSuperadminApi(req, res)) return;
const data = readJsonFile('audit-log.json', [] as unknown[])'
  res.setHeader('Content-Type', 'application/json')'
  res.setHeader('Content-Disposition', 'attachment; filename="audit-log.json"')'"
  res.status(200).send(JSON.stringify(data, null, 2))
}

}}}