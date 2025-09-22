:pages_backup/api/applications.ts
<<<<<<< HEAD:pages/api/applications.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
=======

import type { NextApiRequest, NextApiResponse } from 'next';

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

import type { NextApiRequest, NextApiResponse } from 'next';
main
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
=======

import type { NextApiRequest, NextApiResponse } from 'next';
main
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
import type { NextApiRequest, NextApiResponse } from 'next',;
pr-12243
import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/applications.ts
import { v4 as uuidv4 } from 'uuid',;
import { readJsonFile, writeJsonFile } from '../../utils/db',;
import type { Application } from '../../utils/types',;
import { rateLimit } from '../../utils/rateLimit',;
:pages_backup/api/applications.ts
import { readJsonFile, writeJsonFile } from '../../utils/fileUtils';
import type { Application } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';

const FILE = 'data/applications.json';
origin/cursor/automate-test-improve-and-merge-code-2533

=======
=======
=======
const FILE = 'applications.json'

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
=======
const FILE = 'applications.json'

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
  if (req.method === 'GET') {
    const { jobId, talentSlug } = req.query;
    let apps = readJsonFile<Application[]>(FILE, []);
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId));
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug));
    res.status(200).json({ applications: apps });
pr-12243
const FILE = 'applications.json'

>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/applications.ts
  try {
    const application: Application = {
      id: uuidv4();
      ...req.body;
      createdAt: new Date().toISOString()
    };

    const applications = readJsonFile(FILE) || [];
    applications.push(application);
    writeJsonFile(FILE, applications);

    res.status(200).json({ success: true, application });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create application' });
  }
}
origin/cursor/automate-test-improve-and-merge-code-2533
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return

  if (req.method === 'GET') {
:pages_backup/api/applications.ts
<<<<<<< HEAD:pages/api/applications.ts
<<<<<<< HEAD
    const { jobId, talentSlug } = req.query
    let apps = readJsonFile<Application[]>(FILE, [])
    if (jobId) apps = apps.filter((a) => a.jobId === String(jobId))
    if (talentSlug) apps = apps.filter((a) => a.talentSlug === String(talentSlug))
    res.status(200).json({ applications: apps })
:pages_backup/api/applications.ts
>>>>>>> main
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    return
=======
    return
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/applications.ts
    const { jobId, talentSlug } = req.query;
    let apps = readJsonFile<Application[]>(FILE, []);
if (jobId) apps = apps.filter(a => a.jobId === String(jobId));
    if (talentSlug)
      apps = apps.filter(a => a.talentSlug === String(talentSlug));
    res.status(200).json({ applications: apps });
    return;
origin/cursor/automate-test-improve-and-merge-code-2533
  }

  if (req.method === 'POST') {
:pages_backup/api/applications.ts
<<<<<<< HEAD:pages/api/applications.ts
<<<<<<< HEAD
<<<<<<< HEAD
    const { jobId, talentSlug, action } = req.body || {},
    if (!jobId || !talentSlug || !['applyskip'].includes(action)) {
      res.status(400).json({ error: 'Invalid request' });
      return
    }

    const now = new Date().toISOString();
    const apps = readJsonFile<Application[]>(FILE, []);

    const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug);
    if (existing) {
:pages_backup/api/applications.ts
      existing.status = action === 'apply' ? 'applied' : 'skipped',
      writeJsonFile<Application[]>(FILE, apps),
      res.status(200).json({ application: existing }),
=======
      existing.status = action === 'apply' ? 'applied' : 'skipped';
      writeJsonFile<Application[]>(FILE, apps);
      res.status(200).json({ application: existing });
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/applications.ts
    const { jobId, talentSlug, action } = req.body || {}
    if (!jobId || !talentSlug || !['applyskip'].includes(action)) {
      res.status(400).json({ error: 'Invalid request' })
      return
    }

    const now = new Date().toISOString()
    const apps = readJsonFile<Application[]>(FILE, [])

    const existing = apps.find((a) => a.jobId === jobId && a.talentSlug === talentSlug)
    if (existing) {
      existing.status = action === 'apply' ? 'applied' : 'skipped'
      writeJsonFile<Application[]>(FILE, apps)
      res.status(200).json({ application: existing })
main
:pages_backup/api/applications.ts

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
      return
    }

    const app: Application = {
    const { jobId, talentSlug, action } = req.body || {};
if (!jobId || !talentSlug || !['apply', 'skip'].includes(action)) {
      res.status(400).json({ error: 'Invalid request' });
      return;
    }

    const now = new Date().toISOString();
    const apps = readJsonFile<Application[]>(FILE, []);

const existing = apps.find(
      a => a.jobId === jobId && a.talentSlug === talentSlug
    );
    if (existing) {
      existing.status = action === 'apply' ? 'applied' : 'skipped';
      writeJsonFile<Application[]>(FILE, apps);
      res.status(200).json({ application: existing });
return;
    }

    const app: Application = {
origin/cursor/automate-test-improve-and-merge-code-2533
:pages_backup/api/applications.ts
      id: uuidv4(),
      jobId: String(jobId),
      talentSlug: String(talentSlug),
      status: action === 'apply' ? 'applied' : 'skipped',
<<<<<<< HEAD:pages/api/applications.ts
<<<<<<< HEAD
      createdAtIso: now},
    apps.push(app),
    writeJsonFile<Application[]>(FILE, apps),
    res.status(201).json({ application: app }),
    return
  }
<<<<<<< HEAD

  res.setHeader('AllowGET, POST'),
  res.status(405).end('Method Not Allowed');
};
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
import { rateLimit } from '../../utils/rate-limit';
import { readJsonFile, writeJsonFile } from '../../utils/file-utils';
import { v4 as uuidv4 } from 'uuid';
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      return
    }
    const app: Application = {
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      id: uuidv4();
      jobId: String(jobId);
      talentSlug: String(talentSlug);
      status: action === 'apply' ? 'applied' : 'skipped';
      createdAtIso: now};
    apps.push(app);
    writeJsonFile<Application[]>(FILE, apps);
    res.status(201).json({ application: app });
pr-12243
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/applications.ts
      id: uuidv4()
      jobId: String(jobId)
      talentSlug: String(talentSlug)
      status: action === 'apply' ? 'applied' : 'skipped'
createdAtIso: now}
    apps.push(app)
    writeJsonFile<Application[]>(FILE, apps)
    res.status(201).json({ application: app })
:pages_backup/api/applications.ts
<<<<<<< HEAD:pages/api/applications.ts
=======
main
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/applications.ts
    return
  }
  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')
:pages_backup/api/applications.ts
<<<<<<< HEAD:pages/api/applications.ts
<<<<<<< HEAD
}

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
  res.setHeader('AllowGET, POST')
  res.status(405).end('Method Not Allowed')
};
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-f3c8
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
};

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/applications.ts
=======
};

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
      createdAtIso: now,
=======
}

};
      createdAtIso: now;
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/applications.ts
    };
    apps.push(app);
    writeJsonFile<Application[]>(FILE, apps);
    res.status(201).json({ application: app });
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');

}
:pages_backup/api/applications.ts
<<<<<<< HEAD:pages/api/applications.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api-disabled/api/applications.ts
