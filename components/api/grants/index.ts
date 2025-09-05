<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import fs from 'fs',
import path from 'path',
import { v4 as uuidv4 } from 'uuid',
import type { CreateGrantPayload, GrantApplication } from '../../../types/grants',

const GRANTS_DIR = path.join(process.cwd(), 'datagrants'),

function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true })
  }
}

function readAllGrants(): GrantApplication[] {
  ensureDir(),
  const files = fs.readdirSync(GRANTS_DIR).filter((f) => f.endsWith('.json')),
  return files.map((file) => {
    const full = path.join(GRANTS_DIR, file),
    const raw = fs.readFileSync(full, 'utf8'),
    return JSON.parse(raw) as GrantApplication
  })
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { status, sector, region, program } = req.query,
    const list = readAllGrants().filter((g) => {
      return (
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';
import fs from 'fs';
import path from 'path';
import type {_CreateGrantPayload, _GrantApplication} from '../../../types/grants';

const _GRANTS_DIR = path.join(process.cwd(), 'data', 'grants');

function ensureDir() {_if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, _{ recursive: true});
  }
}

function readAllGrants(): GrantApplication[] {_ensureDir();
  const _files = fs.readdirSync(GRANTS_DIR).filter(_(f) => f.endsWith('.json'));
  return files.map(_(file) => {
    const _full = path.join(GRANTS_DIR, _file);
    const _raw = fs.readFileSync(full, _'utf8');
    return JSON.parse(raw) as GrantApplication;});
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method === 'GET') {
    const { status, _sector, _region, _program} = req.query;
    const _list = readAllGrants().filter(_(g) => {_return (
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
        (status ? g.status === status : true) &&
        (sector ? g.sector === sector : true) &&
        (region ? g.region === region : true) &&
        (program ? g.program === program : true)
<<<<<<< HEAD
      )
    }),
    res.status(200).json({ items: list }),
    return
  }

  if (req.method === 'POST') {
    try {
      const payload = req.body as CreateGrantPayload,
      if (!payload || !payload.projectName || !payload.teamInfo || !payload.proposalSummary || !payload.timeline) {
        res.status(400).json({ error: 'Missing required fields' }),
        return
      }
      ensureDir(),
      const id = uuidv4(),
      const now = new Date().toISOString(),
      const record: GrantApplication = {
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
        votes: []},
      fs.writeFileSync(path.join(GRANTS_DIR, `${id}.json`), JSON.stringify(record, null, 2), 'utf8'),
      res.status(201).json({ id, record })
    } catch (e: any) {
      res.status(500).json({ error: e?.message || 'Failed to create grant' })
=======
      );});
    res.status(200).json({_items: list});
    return;
  }

  if (req.method === 'POST') {_try {
      const _payload = req.body as CreateGrantPayload;
      if (!payload || !payload.projectName || !payload.teamInfo || !payload.proposalSummary || !payload.timeline) {
        res.status(400).json({ error: 'Missing required fields'});
        return;
      }
      ensureDir();
      const _id = uuidv4();
      const _now = new Date().toISOString();
      const record: GrantApplication = {_id, _program: payload.program || 'grant', _projectName: payload.projectName, _teamInfo: payload.teamInfo, _proposalSummary: payload.proposalSummary, _timeline: payload.timeline, _budgetAmount: payload.budgetAmount || 0, _budgetCurrency: payload.budgetCurrency || 'USDC', _supportingLinks: payload.supportingLinks || [], _pitchDeckUrl: payload.pitchDeckUrl, _region: payload.region, _sector: payload.sector, _status: payload.submit ? 'Submitted' : 'Draft', _createdAt: now, _updatedAt: now, _milestones: [], _fundsReleased: 0, _updates: [], _votes: []};
      fs.writeFileSync(path.join(GRANTS_DIR, `${_id}.json`), JSON.stringify(record, null, 2), 'utf8');
      res.status(201).json({_id, _record});
    } catch (e: unknown) {_res.status(500).json({ error: e?.message || 'Failed to create grant'});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    }
    return
  }

  res.setHeader('AllowGET, POST'),
  res.status(405).end('Method Not Allowed')
}