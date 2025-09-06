<<<<<<< HEAD
const FILE = 'applications.json';
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import { v4 as uuidv4 } from 'uuid',;
import { readJsonFile, writeJsonFile } from '../../utils/db',;
import type { Application } from '../../utils/types',;
import { rateLimit } from '../../utils/rateLimit',;
const FILE = 'applications.json',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return,

  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query,
    let apps = readJsonFile<Application[]>(FILE, []),
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId)),
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug)),
    res.status(200).json({ applications: apps }),
    return
  }

  if (req.method === 'POST') {
    const { jobId, talentSlug, action } = req.body || {},
    if (!jobId || !talentSlug || !['applyskip'].includes(action)) {
      res.status(400).json({ error: 'Invalid request' }),
      return
    }

    const now = new Date().toISOString(),
    const apps = readJsonFile<Application[]>(FILE, []),

    const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug),
    if (existing) {
      existing.status = action === 'apply' ? 'applied' : 'skipped',
      writeJsonFile<Application[]>(FILE, apps),
      res.status(200).json({ application: existing }),
      return
    }

    const app: Application = {
      id: uuidv4(),
      jobId: String(jobId),
      talentSlug: String(talentSlug),
      status: action === 'apply' ? 'applied' : 'skipped',
createdAtIso: now},
    apps.push(app),
    writeJsonFile<Application[]>(FILE, apps),
    res.status(201).json({ application: app }),
    return
  }

  res.setHeader('AllowGET, POST'),
  res.status(405).end('Method Not Allowed');
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from 'next';
import { rateLimit } from '../../utils/rate-limit';
import { readJsonFile, writeJsonFile } from '../../utils/file-utils';
import { v4 as uuidv4 } from 'uuid';

<<<<<<< HEAD
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Application } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = 'applications.json'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return
  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query;
    let apps = readJsonFile<Application[]>(FILE, []);
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId));
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug));
    res.status(200).json({ applications: apps });
    return
  }
  if (req.method === 'POST') {
    const { jobId, talentSlug, action } = req.body || {};
    if (!jobId || !talentSlug || !['applyskip'].includes(action)) {
      res.status(400).json({ error: 'Invalid request' });
      return
    }
    const now = new Date().toISOString();
    const apps = readJsonFile<Application[]>(FILE, []);
    const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug);
    if (existing) {
      existing.status = action === 'apply' ? 'applied' : 'skipped';
      writeJsonFile<Application[]>(FILE, apps);
      res.status(200).json({ application: existing });
      return
    }
    const app: Application = {
      id: uuidv4()
      jobId: String(jobId)
      talentSlug: String(talentSlug)
      status: action === 'apply' ? 'applied' : 'skipped'
createdAtIso: now}
    apps.push(app)
    writeJsonFile<Application[]>(FILE, apps)
    res.status(201).json({ application: app })
    return
  }
  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')
}
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { v4 as uuidv4 } from 'uuid',
import { readJsonFile, writeJsonFile } from '../../utils / db',
import type { Application } from '../../utils / types',
import { rate_limit } from '../../utils / rate_limit',
const FILE = 'applications.json',
export default /**
 * handler - Function description
 */
function handler() {
  if () return, ) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    const { job_id, talent_slug } = req.query,
    let apps = readJsonFile < Application[]>(FILE, []),
    if (apps = apps.filter ((a) => a.job_id === String (job_id)), ) {
  $2
}
    if (apps = apps.filter ((a) => a.talent_slug === String (talent_slug)), ) {
  $2
}
    res.status (200).json ({ applications: apps }),
    return;
  }
  // Check condition
if ( {) {
  $2
}
    const { job_id, talent_slug, action } = req.body || {},
    if () {) {
  $2
}
      res.status (400).json ({ error: 'Invalid request' }),
      return;
    }
    const now = new Date ().toISOString (),
    const apps = readJsonFile < Application[]>(FILE, []),
    const existing = apps.find ((a) => a.job_id === job_id && a.talent_slug === talent_slug),
    // Check condition
if ( {) {
  $2
}
      existing.status = action === 'apply' ? 'applied' : 'skipped',
      writeJsonFile < Application[]>(FILE, apps),
      res.status (200).json ({ application: existing }),
      return;
    }
    const app: Application = {
      id: uuidv4 (),
      job_id: String (job_id),
      talent_slug: String (talent_slug),
      status: action === 'apply' ? 'applied' : 'skipped',
createdAtIso: now},
    apps.push (app),
    writeJsonFile < Application[]>(FILE, apps),
    res.status (201).json ({ application: app }),
    return;
  }
  res.set_header ('AllowGET, POST'),
  res.status (405).end ('Method Not Allowed');
}
;
=======

=======
type Application = {
  id: string;
  jobId: string;
  talentSlug: string;
  status: 'applied' | 'skipped';
  createdAtIso: string;
};

const FILE = 'applications.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!rateLimit(req, res)) return;
    
    if (req.method === 'GET') {
      const { jobId, talentSlug } = req.query;
      let apps = readJsonFile<Application[]>(FILE, []);
      
      if (jobId && talentSlug) {
        apps = apps.filter((a) => a.jobId === jobId && a.talentSlug === talentSlug);
      }
      
      res.status(200).json({ applications: apps });
      return;
    }
    
    if (req.method === 'POST') {
      const { jobId, talentSlug, action } = req.body;
      if (!jobId || !talentSlug || !action) {
        res.status(400).json({ error: 'Invalid request' });
        return;
      }
      
      const now = new Date().toISOString();
      const apps = readJsonFile<Application[]>(FILE, []);
      const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug);
      
      if (existing) {
        existing.status = action === 'apply' ? 'applied' : 'skipped';
        writeJsonFile<Application[]>(FILE, apps);
        res.status(200).json({ application: existing });
        return;
      }
      
      const app: Application = {
        id: uuidv4(),
        jobId: String(jobId),
        talentSlug: String(talentSlug),
        status: action === 'apply' ? 'applied' : 'skipped',
        createdAtIso: now
      };
      
      apps.push(app);
      writeJsonFile<Application[]>(FILE, apps);
      res.status(201).json({ application: app });
      return;
    }
    
    res.status(405).json({ error: 'Method not allowed' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
