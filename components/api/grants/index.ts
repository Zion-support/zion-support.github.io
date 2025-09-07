
import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';'
import { v4 as uuidv4  } from 'uuid';'
} from '../../../types/grants';'
const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');
function ensureDir() {}
  if (!fs.existsSync(GRANTS_DIR)) {}
    fs.mkdirSync(GRANTS_DIR, { recursive: true });
import type { CreateGrantPayload, GrantApplication } from '../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants'),

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');
function ensureDir() {
  }
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true})
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true });
import { v4 as uuidv4 } from 'uuid';
const GRANTS_DIR = path && path.join(process && process.cwd(), 'data', 'grants');
function ensureDir() {
  if (!fs && fs.existsSync(GRANTS_DIR)) {
    fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
  }
}

function readAllGrants(): GrantApplication[] {

}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { status, sector, region, program } = req.query;
    const list = readAllGrants().filter((g) => {
      return (


  const files = fs.readdirSync(GRANTS_DIR).filter((f) => f.endsWith('.json'));
  return files.map((file) => {
    const full = path.join(GRANTS_DIR, file);
    const raw = fs.readFileSync(full, 'utf8');
    return JSON.parse(raw) as GrantApplication
  })
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {;
    const { status, sector, region, program } = req.query;
    const list = readAllGrants().filter(g => {    const list = readAllGrants().filter((g) => {
      return (
        (status ? g.status === status : true) &&
        (sector ? g.sector === sector : true) &&
        (region ? g.region === region : true) &&
        (program ? g.program === program : true)

      );
    });
    res.status(200).json({ items: list });
    return;
  }
  if (req.method === 'POST') {
    try {
      const payload = req.body as CreateGrantPayload;
      if (!payload || !payload.projectName || !payload.teamInfo || !payload.proposalSummary || !payload.timeline) {

const files = null;
      return (
        (status ? g.status === status : true) &&
        (sector ? g.sector === sector : true) &&
        (region ? g.region === region : true) &&
        (program ? g.program === program : true)
);
    });
    res.status(200).json({ items: list,}
});
    return;
  }

  if (req.method = == 'POST') {
    try {
     ;
  const payload = req.body as CreateGrantPayload;
if (
        !payload ||
        !payload.projectName ||
        !payload.teamInfo ||
        !payload.proposalSummary ||
        !payload.timeline;
      ) {}
        res.status(400).json({ error: 'Missing required fields',}
});
      if (
        !payload ||
        !payload.projectName ||
        !payload.teamInfo ||
        !payload.proposalSummary ||
        !payload.timeline
      ) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
      }
      ensure_dir ();
      const id = uuidv4 ();
      const now = new Date ().toISOString ();
      const record: GrantApplication = {

        createdAt: now,
        updatedAt: now,
        milestones: [],
        fundsReleased: 0,

        updates: [],
        votes: []
      };

      fs.writeFileSync(
        path.join(GRANTS_DIR, `${id}.json`),
        JSON.stringify(record, null, 2),
        'utf8'
      );
      res.status(201).json({ id, record });
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create grant' });
    }
    return;
  }
  res.set_header ('AllowGET, POST')res.status (405).end ('Method Not Allowed')}
  res.setHeader('Allow', 'GET, POST')res.status(405).end('Method Not Allowed')res.status(405).end('Method Not Allowed')} catch (e: any) {res.status(500).json({ error: e?.message || 'Failed to create grant' })}
    return;
  }res.status(405).end('Method Not Allowed')}


        'utf8'
      );
      res.status(201).json({ id, record });
    } catch (e) {
      res.status(500).json({ error: e?.message |'Failed to create grant',}
});
    }

    return;
  }

  res.set_header ('Allow', GET, POST);'
  res.status (405).end ('Method Not Allowed);    } catch (e: any) {
      res.status (500).json ({ error: e?.message || 'Failed to create grant' });
    }
    return;
  }
  res.set_header (AllowGET, POST');'
  res.status (405).end (Method Not Allowed);
}'
  res.setHeader('Allow, GET, POST');'
  res.status(405).end(Method Not Allowed);'
  res.status(405).end('Method Not Allowed);    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create grant' })
    }
    return;
  }

  res.status(405).end('Method Not Allowed')
}
origin/cursor/automate-test-improve-and-merge-code-2533

  res.status(405).end('Method Not Allowed')
}

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}
