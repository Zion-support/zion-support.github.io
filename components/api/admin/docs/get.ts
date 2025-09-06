import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
const CONTENT_PATH = null;
    res.status(200).json(JSON.parse(data))
=======
const CONTENT_PATH = path.join(process.cwd(), 'data', 'docs', 'content.json');const CONTENT_PATH = path.join(process.cwd(), 'datadocscontent.json');
=======

const CONTENT_PATH = path.join(process.cwd(), 'data', 'docs', 'content.json');
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const token = req.headers['x-admin-token'] as string | undefined
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
    return res.status(403).json({ error: 'Forbidden' });
<<<<<<< HEAD
  }
=======
 
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  try {
    const data = fs.readFileSync(CONTENT_PATH, 'utf8');
    res.status(200).json(JSON.parse(data));
  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' });
  }
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' })
  }  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' })
  }
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
