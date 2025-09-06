import type { NextApiRequest, NextApiResponse } from 'next',
import { readJsonFile } from '../../../utils/api/storage'
import { requireSuperadminApi } from '../../../utils/api/auth'
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const data = readJsonFile('audit-log.json', [] as unknown[]),
  res.setHeader('Content-Typeapplication/json'),
  res.setHeader('Content-Dispositionattachment, filename="audit-log.json"'),
  res.status(200).send(JSON.stringify(data, null, 2))
}
}
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  const _data = readJsonFile('audit-log.json', _[] as unknown[]);
  res.setHeader('Content-Type', _'application/json');
  res.setHeader('Content-Disposition', _'attachment; filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, _null, _2));}
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
>>>>>>> fe9f06f7950cff0c8d855f93e475fc9658604231
