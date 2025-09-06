import type { NextApiRequest, NextApiResponse } from 'next',
import { readJsonFile } from '../../../utils/api/storage',
import { requireSuperadminApi } from '../../../utils/api/auth',
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!requireSuperadminApi(req, res)) return,
  const data = readJsonFile('audit-log.json', [] as unknown[]),
  res.setHeader('Content-Typeapplication/json'),
  res.setHeader('Content-Dispositionattachment, filename="audit-log.json"'),
  res.status(200).send(JSON.stringify(data, null, 2))}
import type {NextApiRequest, NextApiResponse} from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log.json', _[] as unknown[]);
  res.setHeader('Content-Type', _'application/json');
  res.setHeader('Content-Disposition', _'attachment; filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2))}