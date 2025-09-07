import type { NextApiRequest, NextApiResponse } from 'next'
  const data = null
  res.status(200).send(JSON.stringify(data, null, 2))
}
  if (!requireSuperadminApi(req, res)) return;
  const data = readJsonFile('audit-log.json', [] as unknown[]);
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Content-Disposition', 'attachment; filename="audit-log.json"');
  res.status(200).send(JSON.stringify(data, null, 2));
