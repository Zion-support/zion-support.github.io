import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const CONTENT_PATH = null;
    res.status(200).json(JSON.parse(data))
=======
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
const CONTENT_PATH = path.join(process.cwd(), 'data', 'docs', 'content.json');const CONTENT_PATH = path.join(process.cwd(), 'datadocscontent.json');
=======

const CONTENT_PATH = path.join(process.cwd(), 'data', 'docs', 'content.json');
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  const token = req.headers['x-admin-token'] as string | undefined
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {
=======
  const token = req.headers['x-admin-token'] as string | undefined,
  if (process.env.DOCS_ADMIN_TOKEN && token !== process.env.DOCS_ADMIN_TOKEN) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' })
  }  } catch (e) {
    res.status(500).json({ error: 'Failed to read content' })
  }
}
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
