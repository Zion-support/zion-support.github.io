import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import type { CreateGrantPayload, GrantApplication } from '../../../types/grants';
const GRANTS_DIR = path.join(process.cwd(), 'datagrants'),

function ensureDir() {
  if (!fs.existsSync(GRANTS_DIR)) {
    fs.mkdirSync(GRANTS_DIR, { recursive: true})
  }
}

function readAllGrants(): GrantApplication[] {
  ensureDir($2);
  const files = $2;
  return files.map((file) => {
    const full = path.join($2);
    const raw = fs.readFileSync($2);
    return JSON.parse(raw) as GrantApplication
  })
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
    }
    return
  }

  res.setHeader($2);
  res.status(405).end('Method Not Allowed')
}