import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';

import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Application } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return
  if (req.method === 'GET') {
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
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
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
=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
