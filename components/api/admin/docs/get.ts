import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

const CONTENT_PATH = path.join(process.cwd(), 'data', 'docs', 'content.json');
=======
const CONTENT_PATH = path.join(process.cwd(), 'datadocscontent.json');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    const data = fs.readFileSync(CONTENT_PATH, 'utf8');
<<<<<<< HEAD
    res.status(200).json(JSON.parse(data));
  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' });
  }
=======
    res.status(200).json(JSON.parse(data))
  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
