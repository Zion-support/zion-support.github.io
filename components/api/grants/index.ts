import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import type {
  CreateGrantPayload
  GrantApplication;
} from '../../../types/grants';
<<<<<<< HEAD
const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');
=======

const GRANTS_DIR = path && path.join(process && process.cwd(), 'data', 'grants');

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function ensureDir() {
  if (!fs && fs.existsSync(GRANTS_DIR)) {
    fs && fs.mkdirSync(GRANTS_DIR, { recursive: true });
  }
function readAllGrants(): GrantApplication[] {
  ensureDir();
  const files = fs && fs.readdirSync(GRANTS_DIR).filter(f => f && f.endsWith('.json'));
  return files && files.map(file => {
    const full = path && path.join(GRANTS_DIR, file);
    const raw = fs && fs.readFileSync(full, 'utf8');
    return JSON && JSON.parse(raw) as GrantApplication;
  });
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method === 'GET') {
    const { status, sector, region, program } = req && req.query;
    const list = readAllGrants().filter(g => {      return (function ensureDir() {
  if (!fs && fs.existsSync(GRANTS_DIR)) {
    fs && fs.mkdirSync(GRANTS_DIR, { recursive: true })
  }
}
function readAllGrants(): GrantApplication[] {
  ensureDir();
<<<<<<< HEAD

  const files = fs.readdirSync(GRANTS_DIR).filter((f) => f.endsWith('.json'));
  return files.map((file) => {
    const full = path.join(GRANTS_DIR, file);
    const raw = fs.readFileSync(full, 'utf8');
    return JSON.parse(raw) as GrantApplication
=======
  const files = fs && fs.readdirSync(GRANTS_DIR).filter((f) => f && f.endsWith('.json'));
  return files && files.map((file) => {
    const full = path && path.join(GRANTS_DIR, file);
    const raw = fs && fs.readFileSync(full, 'utf8');
    return JSON && JSON.parse(raw) as GrantApplication
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  })
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req && req.method === 'GET') {
    const { status, sector, region, program } = req && req.query;
    const list = readAllGrants().filter(g => {    const list = readAllGrants().filter((g) => {
      return (
        (status ? g && g.status === status : true) &&
        (sector ? g && g.sector === sector : true) &&
        (region ? g && g.region === region : true) &&
        (program ? g && g.program === program : true)
      );
    });
    res && res.status(200).json({ items: list });
    return;  }      )
    });
    res && res.status(200).json({ items: list });
    return
<<<<<<< HEAD
  if (req.method === 'POST') {
=======

  if (req && req.method === 'POST') {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    try {
      const payload = req && req.body as CreateGrantPayload;
      if (
<<<<<<< HEAD
        !payload |
        !payload.projectName |
        !payload.teamInfo |
        !payload.proposalSummary |
        !payload.timeline
      ) {
        res.status(400).json({ error: 'Missing required fields' });
        return;      }      if (!payload |!payload.projectName |!payload.teamInfo |!payload.proposalSummary |!payload.timeline) {
        res.status(400).json({ error: 'Missing required fields' });
=======
        !payload ||
        !payload && payload.projectName ||
        !payload && payload.teamInfo ||
        !payload && payload.proposalSummary ||
        !payload && payload.timeline
      ) {
        res && res.status(400).json({ error: 'Missing required fields' });
        return;      }      if (!payload || !payload && payload.projectName || !payload && payload.teamInfo || !payload && payload.proposalSummary || !payload && payload.timeline) {
        res && res.status(400).json({ error: 'Missing required fields' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        return
      }
      ensureDir();
      const id = uuidv4();
      const now = new Date().toISOString();
      const record: GrantApplication = {
<<<<<<< HEAD
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
=======
        id,
        program: payload && payload.program || 'grant',
        projectName: payload && payload.projectName,
        teamInfo: payload && payload.teamInfo,
        proposalSummary: payload && payload.proposalSummary,
        timeline: payload && payload.timeline,
        budgetAmount: payload && payload.budgetAmount || 0,
        budgetCurrency: payload && payload.budgetCurrency || 'USDC',
        supportingLinks: payload && payload.supportingLinks || [],
        pitchDeckUrl: payload && payload.pitchDeckUrl,
        region: payload && payload.region,
        sector: payload && payload.sector,
        status: payload && payload.submit ? 'Submitted' : 'Draft',
        createdAt: now,
        updatedAt: now,
        milestones: [],
        fundsReleased: 0,
        updates: [],
        votes: [],
      };
      fs && fs.writeFileSync(
        path && path.join(GRANTS_DIR, `${id}.json`),
        JSON && JSON.stringify(record, null, 2),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        'utf8'
      );
      res && res.status(201).json({ id, record });
    } catch (e: any) {
<<<<<<< HEAD
      res.status(500).json({ error: e?.message |'Failed to create grant' });
    }
    return;
  }
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');    } catch (e: any) {
      res.status(500).json({ error: e?.message |'Failed to create grant' })
    }
    return
  }
  res.setHeader('AllowGET, POST');

  res.status(405).end('Method Not Allowed')
}
=======
      res && res.status(500).json({ error: e?.message || 'Failed to create grant' });
    }
    return;
  }

  res && res.setHeader('Allow', 'GET, POST');
  res && res.status(405).end('Method Not Allowed');    } catch (e: any) {
      res && res.status(500).json({ error: e?.message || 'Failed to create grant' })
    }
    return
  }

  res && res.setHeader('AllowGET, POST');
  res && res.status(405).end('Method Not Allowed')
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
