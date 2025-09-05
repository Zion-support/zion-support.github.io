import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!requireSuperadminApi(req, _res)) return;
  const _data = readJsonFile('audit-log.json', _[] as unknown[]);
  res.setHeader('Content-Type', _'application/json');
  res.setHeader('Content-Disposition', _'attachment; filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, _null, _2));}