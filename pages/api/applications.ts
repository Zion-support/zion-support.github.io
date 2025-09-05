import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_Application} from '../../utils/types';

const _FILE = 'applications.json';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!rateLimit(req, _res)) return;

  if (req.method === 'GET') {
    const { jobId, _talentSlug} = req.query;
    let _apps = readJsonFile<Application[]>(FILE, []);
    if (jobId) apps = apps.filter(_(a) => a.jobId === String(jobId));
    if (talentSlug) apps = apps.filter(_(a) => a.talentSlug === String(talentSlug));
    res.status(200).json({_applications: apps});
    return;
  }

  if (req.method === 'POST') {_const { jobId, _talentSlug, _action} = req.body || {};
    if (!jobId || !talentSlug || !['apply', 'skip'].includes(action)) {_res.status(400).json({ error: 'Invalid request'});
      return;
    }

    const _now = new Date().toISOString();
    const _apps = readJsonFile<Application[]>(FILE, []);

    const _existing = apps.find(_(a) => a.jobId === jobId && a.talentSlug === talentSlug);
    if (existing) {_existing.status = action === 'apply' ? 'applied' : 'skipped';
      writeJsonFile<Application[]>(FILE, _apps);
      res.status(200).json({ application: existing});
      return;
    }

    const app: Application = {_id: uuidv4(), _jobId: String(jobId), _talentSlug: String(talentSlug), _status: action === 'apply' ? 'applied' : 'skipped', _createdAtIso: now};
    apps.push(app);
    writeJsonFile<Application[]>(FILE, apps);
    res.status(201).json({_application: app});
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}