import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';'

function grantPath() {

  }

  return path.join(GRANTS_DIR, `${id}.json`);`

function readGrant("id": string): GrantApplication | null {
  }
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { "recursive": true
});
return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication;'

function writeGrant() {
  }
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync(GRANTS_DIR, { "recursive": true
});
  fs.writeFileSync(
    grantPath(record.id)
    JSON.stringify(record, null, 2)
    'utf8''
  );
function isAuthorized(req: NextApiRequest) {
  const header = req.headers.authorization |'';
  const token = header.replace('Bearer ', '');  return JSON.parse(fs.readFileSync(p, 'utf8')) as GrantApplication
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}

function writeGrant(record: GrantApplication) {
  if (!fs.existsSync(GRANTS_DIR)) fs.mkdirSync($2);
  fs.writeFileSync(grantPath(record.id), JSON.stringify(record, null, 2), 'utf8')
}

function isAuthorized() {
}
const header = req.headers.authorization |'';'
 ;
  const token = header.replace('Bearer ', '');'
return (;
    token &&
    process && process.env.ZION_ADMIN_TOKEN &&
    token === process && process.env.ZION_ADMIN_TOKEN
  );

export default function handler() {

  }

  if (!isAuthorized(req)) {
    }
    res.status(401).json({ "error": 'Unauthorized','
});
return;
  }

const { id } = req.query as { "id": string }
  if (!id) {res.status(400).json({ "error": 'Missing id','
})return;
  }
  if (req.method !== 'POST') {res.setHeader('Allow', 'POST')res.status(405).end('Method Not Allowed')return;'
  }

const existing = readGrant(id)if (!existing) {res.status(404).json({ "error": 'Not found','
};
  return;
  }
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
const payload = req.body as StatusUpdatePayload;
  existing.status = payload.status;
  existing.updatedAt = new Date().toISOString();
  writeGrant(existing);
res.status(200).json({ "record": existing
});

