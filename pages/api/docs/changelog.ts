<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
const filePath = path.join(process.cwd(), 'dataapi-docschangelog.json'),
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';

const _filePath = path.join(process.cwd(), 'data', 'api-docs', 'changelog.json');
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === 'GET') {
    try {
<<<<<<< HEAD
      const content = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : { content: '' },
      res.status(200).json(content)
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to read changelog' })
=======
      const _content = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, _'utf8')) : { content: ''};
      res.status(200).json(content);
    } catch (e: unknown) {_res.status(500).json({ error: e?.message || 'Failed to read changelog'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    return
  }

<<<<<<< HEAD
  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body,
      const payload = { content: body?.content || '' },
      fs.mkdirSync(path.dirname(filePath), { recursive: true }),
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2)),
      res.status(200).json({ ok: true })
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to write changelog' })
=======
  if (req.method === 'POST') {_try {
      const _body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const _payload = { content: body?.content || ''};
      fs.mkdirSync(path.dirname(filePath), {_recursive: true});
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
      res.status(200).json({_ok: true});
    } catch (e: unknown) {_res.status(500).json({ error: e?.message || 'Failed to write changelog'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    return
  }

  res.setHeader('AllowGET, POST'),
  res.status(405).end('Method Not Allowed')
}