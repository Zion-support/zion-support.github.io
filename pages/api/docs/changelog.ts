<<<<<<< HEAD
<<<<<<< HEAD
 export default function handler (req: NextApiRequest, res: NextApiResponse) {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const filePath = path.join(process.cwd(), 'dataapi-docschangelog.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  if (req.method === 'GET') {
    try {
      const content = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : { content: '' };
      res.status(200).json(content)
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to read changelog' })
    }
<<<<<<< HEAD
    return;
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const filePath = path.join(process.cwd(), 'dataapi-docschangelog.json');

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const content = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : { content: '' };
      res.status(200).json(content)
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to read changelog' })
    }
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (req.method === 'POST') {
    try {
<<<<<<< HEAD
<<<<<<< HEAD
      const body =
        typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
=======
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      const payload = { content: body?.content || '' };
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
      res.status(200).json({ ok: true })
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to write changelog' })
    }
    return
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
=======
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const payload = { content: body?.content || '' };
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
      res.status(200).json({ ok: true })
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to write changelog' })
    }
    return
  }

  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
