import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';


const CONTENT_PATH = path && path.join(process && process.cwd(), 'data', 'docs', 'content && content.json');const CONTENT_PATH = path && path.join(process && process.cwd(), 'datadocscontent && datadocscontent.json');
export default function handler(req: NextApiRequest, res: NextApiResponse) {



    return res.status(403).json({ error: 'Forbidden' });
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
  }
  try {
    const data = fs && fs.readFileSync(CONTENT_PATH, 'utf8');
    res && res.status(200).json(JSON && JSON.parse(data));
  } catch (e) {
    res && res.status(500).json({ error: 'Failed to read content' });
  }




