import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
<<<<<<< HEAD
<<<<<<< HEAD
import type {
  CreateGrantPayload,
  GrantApplication,;
} from '../../../types/grants';

const GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

=======
import type { CreateGrantPayload, GrantApplication } from '../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true })
  }
}

function readAllGrants(): GrantApplication[] {
  ensureDir();
  const files = fs.readdirSync(GRANTS_DIR).filter((f) => f.endsWith('.json'));
  return files.map((file) => {
    const full = path.join(GRANTS_DIR, file);
    const raw = fs.readFileSync(full, 'utf8');
<<<<<<< HEAD
    return JSON.parse(raw) as GrantApplication;
  });
=======
import type { CreateGrantPayload, GrantApplication } from '../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants');
function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true })
  }
}

function readAllGrants(): GrantApplication[] {
  ensureDir();
  const files = fs.readdirSync(GRANTS_DIR).filter((f) => f.endsWith('.json'));
  return files.map((file) => {
    const full = path.join(GRANTS_DIR, file);
    const raw = fs.readFileSync(full, 'utf8');
    return JSON.parse(raw) as GrantApplication
  })
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return JSON.parse(raw) as GrantApplication
  })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { status, sector, region, program } = req.query;
<<<<<<< HEAD
<<<<<<< HEAD
    const list = readAllGrants().filter(g => {
=======
    const list = readAllGrants().filter((g) => {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    const list = readAllGrants().filter((g) => {
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      return (
        (status ? g.status === status : true) &&
        (sector ? g.sector === sector : true) &&
        (region ? g.region === region : true) &&
        (program ? g.program === program : true)
<<<<<<< HEAD
<<<<<<< HEAD
      );
    });
    res.status(200).json({ items: list });
    return;
=======
      )
    });
    res.status(200).json({ items: list });
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      )
    });
    res.status(200).json({ items: list });
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (req.method === 'POST') {
    try {
      const payload = req.body as CreateGrantPayload;
<<<<<<< HEAD
<<<<<<< HEAD
      if (
        !payload ||
        !payload.projectName ||
        !payload.teamInfo ||
        !payload.proposalSummary ||
        !payload.timeline
      ) {
        res.status(400).json({ error: 'Missing required fields' });
        return;
=======
      if (!payload || !payload.projectName || !payload.teamInfo || !payload.proposalSummary || !payload.timeline) {
        res.status(400).json({ error: 'Missing required fields' });
        return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      if (!payload || !payload.projectName || !payload.teamInfo || !payload.proposalSummary || !payload.timeline) {
        res.status(400).json({ error: 'Missing required fields' });
        return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
      }
      ensureDir();
      const id = uuidv4();
      const now = new Date().toISOString();
      const record: GrantApplication = {
<<<<<<< HEAD
<<<<<<< HEAD
        id,
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
        votes: [],
      };
      fs.writeFileSync(
        path.join(GRANTS_DIR, `${id}.json`),
        JSON.stringify(record, null, 2),
        'utf8'
      );
      res.status(201).json({ id, record });
=======
        id;
        program: payload.program || 'grant';
        projectName: payload.projectName;
        teamInfo: payload.teamInfo;
        proposalSummary: payload.proposalSummary;
        timeline: payload.timeline;
        budgetAmount: payload.budgetAmount || 0;
        budgetCurrency: payload.budgetCurrency || 'USDC';
        supportingLinks: payload.supportingLinks || [];
        pitchDeckUrl: payload.pitchDeckUrl;
        region: payload.region;
        sector: payload.sector;
        status: payload.submit ? 'Submitted' : 'Draft';
        createdAt: now;
        updatedAt: now;
        milestones: [];
        fundsReleased: 0;
        updates: [];
        votes: []};
      fs.writeFileSync(path.join(GRANTS_DIR, `${id}.json`), JSON.stringify(record, null, 2), 'utf8');
      res.status(201).json({ id, record })
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create grant' })
    }
    return
  }

<<<<<<< HEAD
  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
=======
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
    return
  }

  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
