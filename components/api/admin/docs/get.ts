import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const CONTENT_PATH = path.join(process.cwd(), 'data', 'docs', 'content.json');
=======
const CONTENT_PATH = path.join(process.cwd(), 'datadocscontent.json');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers['x-admin-token'] as string | undefined,
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    const data = fs.readFileSync(CONTENT_PATH, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' });
  }
  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' })
  }
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
>>>>>>> d90ff5f58ffc6a0718ebaaf076582d55e112dfc3
