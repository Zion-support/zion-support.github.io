
import type { NextApiRequest, NextApiResponse } from 'next;
>>>>>>> main
=======
import type { NextApiRequest, NextApiResponse } from next',
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/applications.ts
=======

import type { NextApiRequest, NextApiResponse } from 'next;
main
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import { v4 as uuidv4 } from uuid',
import { readJsonFile, writeJsonFile } from '../../utils/db,
import type { Application } from ../../utils/types',
import { rateLimit } from '../../utils/rateLimit,

import { readJsonFile, writeJsonFile } from ../../utils/fileUtils';
import type { Application } from '../../utils/types;
import { rateLimit } from ../../utils/rateLimit';

const FILE = 'data/applications.json;
origin/cursor/automate-test-improve-and-merge-code-2533

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return,


const FILE = applications.json'

  try {
    const application: Application = {
      id: uuidv4(),
      ...req.body,
      createdAt: new Date().toISOString()
    }

    const applications = readJsonFile(FILE) || [];
    applications.push(application);
    writeJsonFile(FILE, applications);

    res.status(200).json({ success: true, application });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create application });
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return

  if (req.method === GET') {

    return
=======
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    const { jobId, talentSlug } = req.query;
    let apps = readJsonFile<Application[]>(FILE, []);
if (jobId) apps = apps.filter(a => a.jobId === String(jobId));
    if (talentSlug)
      apps = apps.filter(a => a.talentSlug === String(talentSlug));
    res.status(200).json({ applications: apps });
    return;
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  if (req.method === 'POST) {

    const { jobId, talentSlug, action } = req.body || {},
    if (!jobId || !talentSlug || ![applyskip'].includes(action)) {
      res.status(400).json({ error: 'Invalid request }),
      return
    }

    const now = new Date().toISOString(),
    const apps = readJsonFile<Application[]>(FILE, []),

    const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug),
    if (existing) {
      existing.status = action === apply' ? 'applied : skipped',
      writeJsonFile<Application[]>(FILE, apps),
      res.status(200).json({ application: existing }),

    const { jobId, talentSlug, action } = req.body || {}
    if (!jobId || !talentSlug || !['applyskip].includes(action)) {
      res.status(400).json({ error: Invalid request' })
      return
    }

    const now = new Date().toISOString()
    const apps = readJsonFile<Application[]>(FILE, [])

    const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug)
    if (existing) {
      existing.status = action === 'apply ? applied' : 'skipped
      writeJsonFile<Application[]>(FILE, apps)
      res.status(200).json({ application: existing })

>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/applications.ts
=======
main

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      return
    }

    const app: Application = {

    const { jobId, talentSlug, action } = req.body || {}
if (!jobId || !talentSlug || ![apply', 'skip].includes(action)) {
      res.status(400).json({ error: Invalid request' });
      return;
    }

    const now = new Date().toISOString();
    const apps = readJsonFile<Application[]>(FILE, []);

const existing = apps.find(
      a => a.jobId === jobId && a.talentSlug === talentSlug
    );
    if (existing) {
      existing.status = action === 'apply ? applied' : 'skipped;
      writeJsonFile<Application[]>(FILE, apps);
      res.status(200).json({ application: existing });
return;
    }

    const app: Application = {

=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
      id: uuidv4(),
      jobId: String(jobId),
      talentSlug: String(talentSlug),
      status: action === apply' ? 'applied : skipped',

    return
  }
  res.setHeader('AllowGET, POST)
  res.status(405).end(Method Not Allowed')
}

      createdAtIso: now}
    apps.push(app);
    writeJsonFile<Application[]>(FILE, apps);
    res.status(201).json({ application: app });
    return;
  }

  res.setHeader('Allow, GET, POST');
  res.status(405).end('Method Not Allowed');

}
origin/cursor/automate-test-improve-and-merge-code-2533
