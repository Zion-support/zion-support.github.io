<<<<<<< HEAD
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
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
import { v4 as uuidv4  } from 'uuid';
} from '../../../types/grants';
>>>>>>> origin/chore/fix-lint-and-merge

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');
function ensureDir() {
<<<<<<< HEAD
  }
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true})
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true });
=======
  if (!fs.existsSync(GRANTS_DIR)) {}
    fs.mkdirSync(GRANTS_DIR, { recursive: true,}
});
>>>>>>> origin/chore/fix-lint-and-merge
=======
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
const GRANTS_DIR = path && path.join(process && process.cwd(), 'data', 'grants');
function ensureDir() {
  if (!fs && fs.existsSync(GRANTS_DIR)) {
    fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
  }
function readAllGrants(): GrantApplication[] {
  ensureDir();
  const files = fs.readdirSync(GRANTS_DIR).filter(f => f.endsWith('.json'));
  return files.map(file => {
    const full = path.join(GRANTS_DIR, file);
    const raw = fs.readFileSync(full, 'utf8');
    return JSON.parse(raw) as GrantApplication;
  });
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {;
    const { status, sector, region, program } = req.query;
    const list = readAllGrants().filter(g => {      return (function ensureDir() {


  if (!fs && fs.existsSync(GRANTS_DIR)) {
    fs && fs.mkdirSync(GRANTS_DIR, { recursive: true })
import type { CreateGrantPayload, GrantApplication } from '../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
function ensureDir() {
import type {
  CreateGrantPayload
  GrantApplication;
  CreateGrantPayload,;
  GrantApplication,;
} from '../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');
function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true });
  }
function readAllGrants(): GrantApplication[] {
  ensureDir();
  const files = fs.readdirSync(GRANTS_DIR).filter(f => f.endsWith('.json'));
  return files.map(file => {
    const full = path.join(GRANTS_DIR, file);
    const raw = fs.readFileSync(full, 'utf8');
    return JSON.parse(raw) as GrantApplication;
  });
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {;
    const { status, sector, region, program } = req.query;
    const list = readAllGrants().filter(g => {      return (function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true })
=======


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  }
function readAllGrants(): GrantApplication[] {
  ensureDir();
<<<<<<< HEAD
<<<<<<< HEAD
  const files = fs.readdirSync(GRANTS_DIR).filter(f => f.endsWith('.json'));
  return files.map(file => {
    const full = path.join(GRANTS_DIR, file);
    const raw = fs.readFileSync(full, 'utf8');
    return JSON.parse(raw) as GrantApplication;
  });
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {;
    const { status, sector, region, program } = req.query;
    const list = readAllGrants().filter(g => {      return (function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true })
  }
}
=======

  })
}
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

function readAllGrants(): GrantApplication[] {
  ensureDir($2);
  const files = $2;
  return files.map((file) => {
    const full = path.join($2);
    const raw = fs.readFileSync($2);
    return JSON.parse(raw) as GrantApplication
  })
}

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { status, sector, region, program } = req.query,
    const list = $2;
    res.status(200).json($2);
    return
  }

  }
function readAllGrants(): GrantApplication[] {}
  ensureDir();'
  const files = fs.readdirSync(GRANTS_DIR).filter(f => f.endsWith('.json'));
  return files.map(file => {}
    const full = path.join(GRANTS_DIR, file);'
    const raw = fs.readFileSync(full, 'utf8');
    return JSON.parse(raw) as GrantApplication;
=======

const files = fs.readdirSync(GRANTS_DIR).filter(f => f.endsWith('.json'));
  return files.map(file = > {
   ;
  const full = path.join(GRANTS_DIR, file);

const raw = fs.readFileSync(full, 'utf8');}
    return JSON.parse(raw) as GrantApplication;}
>>>>>>> origin/chore/fix-lint-and-merge
  });
export default function handler() { return null; }
    const { status, sector, region, program } = req.query;
    const list = readAllGrants().filter(g => {      return (function ensureDir() {}
  if (!fs.existsSync(GRANTS_DIR)) {}
    fs.mkdirSync(GRANTS_DIR, { recursive: true })

<<<<<<< HEAD
  }
}
function readAllGrants(): GrantApplication[] {}
  ensureDir();'
=======
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { status, sector, region, program } = req.query;
    const list = readAllGrants().filter((g) => {
      return (
<<<<<<< HEAD


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
=======
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        (status ? g.status === status : true) &&
        (sector ? g.sector === sector : true) &&
        (region ? g.region === region : true) &&
        (program ? g.program === program : true)
<<<<<<< HEAD
=======
      )

    });
    res && res.status(200).json({ items: list });
    return



  if (req && req.method === 'POST') {
    try {
      const payload = req && req.body as CreateGrantPayload;
      if (

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
  }
  if (req.method === 'POST') {
    try {
      const payload = req.body as CreateGrantPayload;
      if (!payload || !payload.projectName || !payload.teamInfo || !payload.proposalSummary || !payload.timeline) {
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
        res.status(400).json({ error: 'Missing required fields' });
        !payload ||
        !payload && payload.projectName ||
        !payload && payload.teamInfo ||
        !payload && payload.proposalSummary ||
        !payload && payload.timeline;
      ) {'
        res && res.status(400).json({ error: 'Missing required fields' });
        return;      }      if (!payload || !payload && payload.projectName || !payload && payload.teamInfo || !payload && payload.proposalSummary || !payload && payload.timeline) {'
        res && res.status(400).json({ error: 'Missing required fields' });
<<<<<<< HEAD
        return;
=======
<<<<<<< HEAD
=======


>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
        return
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
  CreateGrantPayload,
  GrantApplication,'
} from '../../../types / grants';
;'
const GRANTS_DIR = path.join (process.cwd (), 'data', 'grants');
;
/**
 * ensure_dir - Function description;
 */
function ensure_dir() {}
  if () {) {}
  $2;
}
    fs.mkdir_sync (GRANTS_DIR, { recursive: true });
  }
function readAllGrants (): GrantApplication[] {}
  ensure_dir ();'
  const files = fs.readdir_sync (GRANTS_DIR).filter (function => f.ends_with ('.json'));
  return files.map (file => {}
    const full = path.join (GRANTS_DIR, file);'
    const raw = fs.readFileSync (full, 'utf8');
    return JSON.parse (raw) as GrantApplication;
  });
export default /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}
    const { status, sector, region, program } = req.query;
    const list = readAllGrants ().filter (g => {      return (/**
 * ensure_dir - Function description;
 */
function ensure_dir() {}
  if () {) {}
  $2;
}
    fs.mkdir_sync (GRANTS_DIR, { recursive: true });
  }
}
function readAllGrants (): GrantApplication[] {}
  ensure_dir ();'
  const files = fs.readdir_sync (GRANTS_DIR).filter ((f) => f.ends_with ('.json'));
  return files.map ((file) => {}
    const full = path.join (GRANTS_DIR, file);'
    const raw = fs.readFileSync (full, 'utf8');
    return JSON.parse (raw) as GrantApplication;
  });
}
export default /**;
 * handler - Function description;
 */
function handler() {}
  // Check condition;
if ( {) {}
  $2;
}
    const { status, sector, region, program } = req.query;
    const list = readAllGrants ().filter (g => {    const list = readAllGrants ().filter ((g) => {}
      return (
        (status ? g.status === status : true) &&;
        (sector ? g.sector === sector : true) &&;
        (region ? g.region === region : true) &&;
        (program ? g.program === program : true));
    });
    res.status (200).json ({ items: list });
    return;  }      );
    });
    res.status (200).json ({ items: list });
    return;
  // Check condition;
if ( {) {}
  $2;
}
    try {}
      const payload = req.body as CreateGrantPayload;
      // Check condition;
if ( {) {}
  $2;
}'
        res.status (400).json ({ error: 'Missing required fields' });
        return;      }      // Check condition;
if ( {) {}
  $2;
}'
        res.status (400).json ({ error: 'Missing required fields' });
  const files = null;
=======
const files = null;
>>>>>>> origin/chore/fix-lint-and-merge
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
        return;
      }
      ensure_dir ();
<<<<<<< HEAD
      const id = uuidv4 ();
      const now = new Date ().toISOString ();
      const record: GrantApplication = {
<<<<<<< HEAD
id,
=======
<<<<<<< HEAD
        id,
        program: payload.program || 'grant',
        project_name: payload.project_name,
        team_info: payload.team_info,
        proposal_summary: payload.proposal_summary,
        timeline: payload.timeline,
        budget_amount: payload.budget_amount || 0,
        budget_currency: payload.budget_currency || 'USDC',
        supporting_links: payload.supporting_links || [],
        pitchDeckUrl: payload.pitchDeckUrl,
        region: payload.region,
        sector: payload.sector,
        status: payload.submit ? 'Submitted' : 'Draft',
created_at: now,
        updated_at: now,
        milestones: [],
        funds_released: 0,
        updates: [],
        votes: [],
      res && res.status(500).json({ error: e?.message || 'Failed to create grant' });
      );
    });
    res.status(200).json({ items: list });
    return;  }      )
    });
    res.status(200).json({ items: list });
    return
  if (req.method === 'POST') {
    try {
      const payload = req.body as CreateGrantPayload;
      if (
        !payload |
        !payload.projectName |
        !payload.teamInfo |
        !payload.proposalSummary |
        !payload.timeline
      ) {
        res.status(400).json({ error: 'Missing required fields' });
        return;      }      if (!payload |!payload.projectName |!payload.teamInfo |!payload.proposalSummary |!payload.timeline) {
        res.status(400).json({ error: 'Missing required fields' });
        return
      }
      ensureDir();
      const id = uuidv4();
      const now = new Date().toISOString();
      const record: GrantApplication = {
        id
        program: payload.program |'grant'
        projectName: payload.projectName
        teamInfo: payload.teamInfo
        proposalSummary: payload.proposalSummary
        timeline: payload.timeline
        budgetAmount: payload.budgetAmount |0
        budgetCurrency: payload.budgetCurrency |'USDC'
        supportingLinks: payload.supportingLinks |[]
        pitchDeckUrl: payload.pitchDeckUrl
        region: payload.region
        sector: payload.sector
        status: payload.submit ? 'Submitted' : 'Draft'
        createdAt: now
        updatedAt: now
        milestones: []
        fundsReleased: 0
        updates: []
        votes: []
      }
      fs.writeFileSync(
        path.join(GRANTS_DIR, `${id}.json`)
        JSON.stringify(record, null, 2)
        'utf8'
      );
      res.status(201).json({ id, record });
    } catch (e: any) {


      res.status(500).json({ error: e?.message |'Failed to create grant' });
    }
    return;
  }
  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');    } catch (e: any) {
      res && res.status(500).json({ error: e?.message || 'Failed to create grant' })
        id;
        program: payload.program || 'grant', projectName: payload.projectName,
        teamInfo: payload.teamInfo, proposalSummary: payload.proposalSummary,
        timeline: payload.timeline, budgetAmount: payload.budgetAmount || 0,
        budgetCurrency: payload.budgetCurrency || 'USDC', supportingLinks: payload.supportingLinks || [],
        pitchDeckUrl: payload.pitchDeckUrl, region: payload.region,
        sector: payload.sector, status: payload.submit ? 'Submitted' : 'Draft',
        createdAt: now, updatedAt: now,
        milestones: [], fundsReleased: 0,
        updates: [],
        votes: []};
      fs.writeFileSync(path.join(GRANTS_DIR, `${id}.json`), JSON.stringify(record, null, 2), 'utf8');
      res.status(201).json({ id, record })
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create grant' })
      }
      fs.writeFileSync (
        path.join (GRANTS_DIR, `${id}.json`),
        JSON.stringify (record, null, 2),
        'utf8');
      res.status (201).json ({ id, record });
    } catch (e: any) {
      res.status (500).json ({ error: e?.message || 'Failed to create grant' });
    }
    return;
  }
  res.set_header ('AllowGET, POST');
  res.status (405).end ('Method Not Allowed');
}
  res.setHeader('Allow', 'GET, POST');

  res.set_header ('AllowGET, POST');
  res.status (405).end ('Method Not Allowed');
  res.setHeader('AllowGET, POST'),
  res.status(405).end('Method Not Allowed')

}
  res.setHeader('AllowGET, POST');

  res.status(405).end('Method Not Allowed')
}
      res.status(500).json({ error: e?.message || 'Failed to create grant' });
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

  if (req.method = $2;
      if (!payload || !payload.projectName || !payload.teamInfo || !payload.proposalSummary || !payload.timeline) {
        res.status(400).json($2);
        return
      }
      ensureDir($2);
      const id = uuidv4($2);
      const now = new Date().toISOString($2);
      const record: GrantApplication = $2;
=======

const id = uuidv4 ();

const now = new Date ().toISOString ();

const record: GrantApplication = {

id,
>>>>>>> origin/chore/fix-lint-and-merge
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
<<<<<<< HEAD
        updates: [],

    }
const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants')function ensureDir() {if (!fs.existsSync(GRANTS_DIR)) {fs.mkdirSync(GRANTS_DIR, { recursive: true })}
function readAllGrants(): GrantApplication[] {ensureDir()const files = fs.readdirSync(GRANTS_DIR).filter(f => f.endsWith('.json'))return files.map(file => {const full = path.join(GRANTS_DIR, file)const raw = fs.readFileSync(full, 'utf8')return JSON.parse(raw) as GrantApplication;
  })export default function handler() {if (req.method === 'GET') {const { status, sector, region, program } = req.query;
    const list = readAllGrants().filter(g => {      return (function ensureDir() {if (!fs.existsSync(GRANTS_DIR)) {fs.mkdirSync(GRANTS_DIR, { recursive: true })}
}
function readAllGrants(): GrantApplication[] {ensureDir()res.status(400).json({ error: 'Missing required fields' })!payload ||;
        !payload && payload.projectName ||;
        !payload && payload.teamInfo ||;
        !payload && payload.proposalSummary ||;
        !payload && payload.timeline;
      ) {res && res.status(400).json({ error: 'Missing required fields' })return;      }      if (!payload || !payload && payload.projectName || !payload && payload.teamInfo || !payload && payload.proposalSummary || !payload && payload.timeline) {res && res.status(400).json({ error: 'Missing required fields' })return;
  CreateGrantPayload,GrantApplication,} from '../../../types / grants';const GRANTS_DIR  = path.join (process.cwd (), 'data', 'grants')/**;
 * ensure_dir - Function description;
 */;
function ensure_dir() {if () {) {$2;
}
    fs.mkdir_sync (GRANTS_DIR, { recursive: true })}
function readAllGrants (): GrantApplication[] {ensure_dir ()const files = fs.readdir_sync (GRANTS_DIR).filter (function => f.ends_with ('.json'))return files.map (file => {const full = path.join (GRANTS_DIR, file)const raw = fs.readFileSync (full, 'utf8')return JSON.parse (raw) as GrantApplication;
  })export default /**;
 * handler - Function description;
 */;
function handler() {// Check condition;
if ( {) {$2;
}
    const { status, sector, region, program } = req.query;
    const list = readAllGrants ().filter (g => {      return (/**;
 * ensure_dir - Function description;
 */;
function ensure_dir() {if () {) {$2;
}
    fs.mkdir_sync (GRANTS_DIR, { recursive: true })}
}
function readAllGrants (): GrantApplication[] {ensure_dir ()const files = fs.readdir_sync (GRANTS_DIR).filter ((f) => f.ends_with ('.json'))return files.map ((file) => {const full = path.join (GRANTS_DIR, file)const raw = fs.readFileSync (full, 'utf8')return JSON.parse (raw) as GrantApplication;
  })}
export default /**;
 * handler - Function description;
 */;
function handler() {// Check condition;
if ( {) {$2;
}
    const { status, sector, region, program } = req.query;
    const list = readAllGrants ().filter (g => {    const list = readAllGrants ().filter ((g) => {return ((status ? g.status === status : true) &&;
        (sector ? g.sector === sector : true) &&;
        (region ? g.region === region : true) &&;
        (program ? g.program === program : true))})res.status (200).json ({ items: list })return;  }      )})res.status (200).json ({ items: list })return;
  // Check condition;
if ( {) {$2;
}
    try {const payload = req.body as CreateGrantPayload;
      // Check condition;
if ( {) {$2;
}
        res.status (400).json ({ error: 'Missing required fields' })return;      }      // Check condition;
if ( {) {$2;
}
        res.status (400).json ({ error: 'Missing required fields' })const files = null;
      return ((status ? g.status === status : true) &&;
        (sector ? g.sector === sector : true) &&;
        (region ? g.region === region : true) &&;
        (program ? g.program === program : true))})res.status(200).json({ items: list })return;
  }if (req.method === 'POST') {try {const payload = req.body as CreateGrantPayload;
if (!payload ||;
        !payload.projectName ||;
        !payload.teamInfo ||;
        !payload.proposalSummary ||;
        !payload.timeline;
      ) {res.status(400).json({ error: 'Missing required fields' })return;
      }
      ensure_dir ()const id = uuidv4 ()const now = new Date ().toISOString ()const record: GrantApplication = {id,program: payload.program || 'grant',projectName: payload.projectName,teamInfo: payload.teamInfo,proposalSummary: payload.proposalSummary,timeline: payload.timeline,budgetAmount: payload.budgetAmount || 0,budgetCurrency: payload.budgetCurrency || 'USDC',supportingLinks: payload.supportingLinks || [],pitchDeckUrl: payload.pitchDeckUrl,region: payload.region,sector: payload.sector,status: payload.submit ? 'Submitted' : 'Draft',createdAt: now,updatedAt: now,milestones: [],fundsReleased: 0,updates: [],votes: [],}fs.writeFileSync(path.join(GRANTS_DIR, `${id}.json`)JSON.stringify(record, null, 2)'utf8';
      )res.status(201).json({ id, record })} catch (e: any) {res.status(500).json({ error: e?.message |'Failed to create grant' })}
    return;
  }
<<<<<<< HEAD
  res.set_header ('Allow', 'GET, POST')res.status (405).end ('Method Not Allowed')} catch (e: any) {res.status (500).json ({ error: e?.message || 'Failed to create grant' })}
=======
<<<<<<< HEAD
  res.set_header ('Allow', 'GET, POST');
  res.status (405).end ('Method Not Allowed');    } catch (e: any) {
      res.status (500).json ({ error: e?.message || 'Failed to create grant' });
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
    }
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
    return;
  }
  res.set_header ('AllowGET, POST')res.status (405).end ('Method Not Allowed')}
  res.setHeader('Allow', 'GET, POST')res.status(405).end('Method Not Allowed')res.status(405).end('Method Not Allowed')} catch (e: any) {res.status(500).json({ error: e?.message || 'Failed to create grant' })}
    return;
  }res.status(405).end('Method Not Allowed')}

<<<<<<< HEAD
  res.status(405).end('Method Not Allowed');    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create grant' })
        votes: []},
      fs.writeFileSync(path.join(GRANTS_DIR, `${id}.json`), JSON.stringify(record, null, 2), 'utf8'),
      res.status(201).json({ id, record })
    } catch (e: any) {
      res.status(500).json({ error: e ?.message || 'Failed to create grant' })
    }
    return
  }
        votes: [],
=======
        updates: [],}
        votes: [],}
>>>>>>> origin/chore/fix-lint-and-merge
      };
      fs.writeFileSync(
        path.join(GRANTS_DIR, `${id}.json`)
        JSON.stringify(record, null, 2)
<<<<<<< HEAD
=======
<<<<<<< HEAD
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
  res.status(405).end('Method Not Allowed');    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create grant' })
    }
    return
  }

  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}

}
}
}
  res.status(405).end('Method Not Allowed');
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339

=======
        'utf8'
      );
      res.status(201).json({ id, record });
    } catch (e) {
      res.status(500).json({ error: e?.message |'Failed to create grant',}
>>>>>>> origin/chore/fix-lint-and-merge
});
    }

    return;
  }
<<<<<<< HEAD

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
=======
  res.set_header ('Allow', 'GET, POST')res.status (405).end ('Method Not Allowed')} catch (e: any) {res.status (500).json ({ error: e?.message || 'Failed to create grant' },
}
    return;
  }

  res.set_header ('AllowGET, POST');
  res.status (405).end ('Method Not Allowed');
}
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
>>>>>>> origin/chore/fix-lint-and-merge

  res.status(405).end('Method Not Allowed')
}

<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8339
