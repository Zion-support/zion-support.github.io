import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD

const CONTENT_PATH = path.join(process.cwd(), 'data', 'docs', 'content.json');
=======
const CONTENT_PATH = path.join(process.cwd(), 'datadocscontent.json');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const CONTENT_PATH = path.join(process.cwd(), 'datadocscontent.json');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers['x-admin-token'] as string | undefined;
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });
  }

  try {
    const data = fs.readFileSync(CONTENT_PATH, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
    res.status(200).json(JSON.parse(data));
=======
    res.status(200).json(JSON.parse(data))
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' })
  }
<<<<<<< HEAD
=======
    res.status(200).json(JSON.parse(data))
  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' })
  }
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
