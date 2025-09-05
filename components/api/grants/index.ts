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
        (status ? g.status === status : true) &&
        (sector ? g.sector === sector : true) &&
        (region ? g.region === region : true) &&
        (program ? g.program === program : true)
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
    }
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}