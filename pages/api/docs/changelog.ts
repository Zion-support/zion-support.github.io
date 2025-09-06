<<<<<<< HEAD
 export default function handler (req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const content = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, 'utf8'))
        : { content: '' };
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
const filePath = path.join(process.cwd(), 'dataapi-docschangelog.json');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const content = fs.existsSync(filePath) ? JSON.parse(fs.readFileSync(filePath, 'utf8')) : { content: '' };
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      res.status(200).json(content);
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to read changelog' });
    }
<<<<<<< HEAD
    return;  }

  if (req.method === 'POST') {
    try {
      const body =
        typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
=======
    return;
  }

  if (req.method === 'POST') {
    try {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
      const payload = { content: body?.content || '' };
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, JSON.stringify(payload, null, 2));
      res.status(200).json({ ok: true });
    } catch (e: any) {
<<<<<<< HEAD
      res
        .status(500)
        .json({ error: e?.message || 'Failed to write changelog' });
=======
      res.status(500).json({ error: e?.message || 'Failed to write changelog' });
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
    }
    return;
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
=======
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
