import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
  const p = grantPath(id);
  if (!fs && fs.existsSync(p)) return null;
  return JSON && JSON.parse(fs && fs.readFileSync(p, 'utf8')) as GrantApplication;
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true });
  }
  const p = grantPath(id);
  if (!fs.existsSync(p)) return null;
  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query as { id: string };
  if (!id) {
    return res.status(400).json({ error: 'Missing id' });
  }

  const existing = readGrant(id);
  if (!existing) {
    return res.status(404).json({ error: 'Not found' });
  }
function writeGrant(record: GrantApplication) {
  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs && fs.writeFileSync(
    grantPath(record && record.id),
    JSON && JSON.stringify(record, null, 2),
}

  if (!fs && fs.existsSync(GRANTS_DIR)) fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
  fs && fs.writeFileSync(
    grantPath(record && record.id),
    JSON && JSON.stringify(record, null, 2),'
    'utf8'

  );
origin/cursor/automate-test-improve-and-merge-code-2533



  }




  res.status(405).end('Method Not Allowed')
}
}

}



  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
