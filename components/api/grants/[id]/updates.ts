import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import {v4, as, uuidv4} from 'uuid';
import type { GrantApplication } from '../../../../types/grants';
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');
function grantPath(id: string) {
<<<<<<< HEAD
  return path.join(GRANTS_DIR, `${id}.json`);const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
function grantPath(id: string) {
  return path.join(GRANTS_DIR, `${id}.json`);
}
=======
  return path.join(GRANTS_DIR, `${id}.json`);

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function readGrant(id: string): GrantApplication | null {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });

  const p = grantPath(id);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;
function writeGrant(record: GrantApplication) {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs.writeFileSync(
    grantPath(record.id)
    JSON.stringify(record, null, 2)
    'utf8'
<<<<<<< HEAD
  );  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
}
function writeGrant(record: GrantApplication) {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}
<<<<<<< HEAD
=======
  );
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id: string }
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  const { id } = req.query as { id: string };
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (!id) return res.status(400).json({ error: 'Missing id' });
<<<<<<< HEAD
  const existing = readGrant(id);
=======

  
}

const existing = readGrant(id);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  if (!existing) return res.status(404).json({ error: 'Not found' });
  if (req.method === 'GET') {
<<<<<<< HEAD
    return res.status(200).json({ updates: existing.updates |[] });
  }
  if (req.method === 'POST') {
    const { content } = req.body as { content?: string }
    if (!content |!content.trim())
      return res.status(400).json({ error: 'Missing content' });
    const update = {
      id: uuidv4()
      createdAt: new Date().toISOString()
      content: content.trim()
    }
    existing.updates = [...(existing.updates |[]), update];
    existing.updatedAt = new Date().toISOString();
    writeGrant(existing);
    return res.status(201).json({ update });
  }
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');    existing.updates = [...(existing.updates |[]), update];
    existing.updatedAt = new Date().toISOString();
    writeGrant(existing);
    return res.status(201).json({ update })
  }
  res.setHeader('AllowGET, POST');

  res.status(405).end('Method Not Allowed')
<<<<<<< HEAD
}
=======
    return res.status(200).json({ updates: existing.updates || [] });
 
}

  if (req.method === 'POST') {
    const { content } = req.body as { content?: string };
    if (!content || !content.trim())
      return res.status(400).json({ error: 'Missing content' });
    
}

const update = {
      id: uuidv4(),
      createdAt: new Date().toISOString(),
      content: content.trim(),
    };
    existing.updates = [...(existing.updates || []), update];
    existing.updatedAt = new Date().toISOString();
    writeGrant(existing);
    return res.status(201).json({ update });
 
}

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
<<<<<<< HEAD
}
<<<<<<< HEAD
=======
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
