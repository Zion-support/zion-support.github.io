import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const CONTENT_PATH = path.join(process.cwd(), 'data', 'docs', 'content.json');const CONTENT_PATH = path.join(process.cwd(), 'datadocscontent.json');
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const token = req.headers['x-admin-token'] as string | undefined
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
=======
  const token = req.headers['x-admin-token'] as string | undefined,
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  }  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' })
  }
}