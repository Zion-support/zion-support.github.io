import type { NextApiRequest, NextApiResponse } from 'next';'
import fs from 'fs';'
import path from 'path';'
import { v4 as uuidv4  } from 'uuid';'
} from '../../../types/grants';'

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');'
function ensureDir() {
<<<<<<< HEAD
  }
  if (!fs.existsSync(GRANTS_DIR)) {
    }
    fs.mkdirSync(GRANTS_DIR, { "recursive": true
});
=======
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true})
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
  }
function readAllGrants(): GrantApplication[] {
  }
  ensureDir();
  const files = fs.readdirSync(GRANTS_DIR).filter(f => f.endsWith('.json'));
  return files.map(file => {
    const full = path.join(GRANTS_DIR, file);
    const raw = fs.readFileSync(full, 'utf8');
    return JSON.parse(raw) as GrantApplication;
  });
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method === 'GET') {;
    const { status, sector, region, program } = req.query;
    const list = readAllGrants().filter(g => {      return (function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true })
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
  }
}

const files = fs.readdirSync(GRANTS_DIR).filter(f => { return f.endsWith('.json')); }'
  return files.map(file = > {
   ;
  }
  const full = path.join(GRANTS_DIR, file);

const raw = fs.readFileSync(full, 'utf8');'
    return JSON.parse(raw) as GrantApplication;
  });

const files = null;
return (;
        (status ? g.status === status : true) &&
        (sector ? g.sector === sector : true) &&
        (region ? g.region === region : true) &&
        (program ? g.program === program : true)
);
    });
    res.status(200).json({ "items": list
});
    return;
  }

  if (req.method = == 'POST') {'
    }
    try {
     ;
  }
  const payload = req.body as CreateGrantPayload;
if (
        !payload ||
        !payload.projectName ||
        !payload.teamInfo ||
        !payload.proposalSummary ||
        !payload.timeline
      ) {
        }
        res.status(400).json({ "error": 'Missing required fields','
});
        return;
      }
      ensure_dir ();

const id = uuidv4 ();

const now = new Date ().toISOString ();

const "record": GrantApplication = {

}

id,
        "program": payload.program || 'grant','
        "projectName": payload.projectName,
        "teamInfo": payload.teamInfo,
        "proposalSummary": payload.proposalSummary,
        "timeline": payload.timeline,
        "budgetAmount": payload.budgetAmount || 0,
        "budgetCurrency": payload.budgetCurrency || 'USDC','
        "supportingLinks": payload.supportingLinks || [],
        "pitchDeckUrl": payload.pitchDeckUrl,
        "region": payload.region,
        "sector": payload.sector,
        "status": payload.submit ? 'Submitted' : 'Draft','
        "createdAt": now,
        "updatedAt": now,
        "milestones": [],
        "fundsReleased": 0,
        "updates": [],
        "votes": []
      };
      fs.writeFileSync(
        path.join(GRANTS_DIR, `${id}.json`)`
        JSON.stringify(record, null, 2)
        'utf8''
      );
      res.status(201).json({ id, record });
    } catch ("e": any) {
      }
      res.status(500).json({ "error": e?.message |'Failed to create grant','
});
=======
  if (req.method === 'GET') {
    const { status, sector, region, program } = req.query,
    const list = $2;
    res.status(200).json($2);
    return
  }

  if (req.method = $2;
      if (!payload || !payload.projectName || !payload.teamInfo || !payload.proposalSummary || !payload.timeline) {
        res.status(400).json($2);
        return
      }
      ensureDir($2);
      const id = uuidv4($2);
      const now = new Date().toISOString($2);
      const record: GrantApplication = $2;
        program: payload.program || 'grant',
        projectName: payload.projectName,
        teamInfo: payload.teamInfo,
        proposalSummary: payload.proposalSummary,
        timeline: payload.timeline,
        budgetAmount: payload.budgetAmount || 0,
        budgetCurrency: payload.budgetCurrency || 'USDC',
        supportingLinks: payload.supportingLinks || [],
        pitchDeckUrl: payload.pitchDeckUrl,
        region: payload.region,
        sector: payload.sector,
        status: payload.submit ? 'Submitted' : 'Draft',
        createdAt: now,
        updatedAt: now,
        milestones: [],
        fundsReleased: 0,
        updates: [],
        votes: []},
      fs.writeFileSync(path.join(GRANTS_DIR, `${id}.json`), JSON.stringify(record, null, 2), 'utf8'),
      res.status(201).json({ id, record })
    } catch (e: any) {
      res.status(500).json({ error: e ?.message || 'Failed to create grant' })
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
    }
    return;
  }
  res.set_header ('Allow', 'GET, POST')res.status (405).end ('Method Not Allowed')} catch ("e": any) {res.status (500).json ({ "error": e?.message || 'Failed to create grant' },'
}
    return;
  }

  res.set_header ('AllowGET, POST');'
  res.status (405).end ('Method Not Allowed');'
}
  res.setHeader('Allow', 'GET, POST');'
  res.status(405).end('Method Not Allowed');'

  res.status(405).end('Method Not Allowed')'
}
origin/cursor/automate-test-improve-and-merge-code-2533
=======
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
=======

  res.status(405).end('Method Not Allowed')
}