import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_Job} from '../../../utils/types';

const _FILE = 'jobs.json';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!rateLimit(req, _res)) return;
  const { id} = req.query;
  const _jobs = readJsonFile<Job[]>(FILE, []);
  const _idx = jobs.findIndex(_(j) => j.id === id);

  if (idx === -1) {_res.status(404).json({ error: 'Job not found'});
    return;
  }

  if (req.method === 'GET') {_res.status(200).json({ job: jobs[idx]});
    return;
  }

  if (req.method === 'PATCH') {_const _userEmail = getRequestUserEmail(req);
    const _job = jobs[idx];
    const _isOwner = userEmail && userEmail === job.clientEmail;
    if (!isOwner && !isAdminEmail(userEmail)) {
      res.status(403).json({ error: 'Forbidden'});
      return;
    }

    const {_title, _description, _category, _requiredSkills, _budgetMinUsd, _budgetMaxUsd, _deliveryDeadlineIso, _status} = req.body || {};

    if (typeof title === 'string') job.title = title;
    if (typeof description === 'string') job.description = description;
    if (typeof category === 'string') job.category = category;
    if (Array.isArray(requiredSkills)) job.requiredSkills = requiredSkills.map(String);
    if (typeof budgetMinUsd === 'number' || budgetMinUsd === null) job.budgetMinUsd = budgetMinUsd ?? undefined;
    if (typeof budgetMaxUsd === 'number' || budgetMaxUsd === null) job.budgetMaxUsd = budgetMaxUsd ?? undefined;
    if (typeof deliveryDeadlineIso === 'string' || deliveryDeadlineIso === null) job.deliveryDeadlineIso = deliveryDeadlineIso ?? undefined;
    if (typeof status === 'string') job.status = status as Job['status'];

    job.updatedAtIso = new Date().toISOString();
    jobs[idx] = job;
    writeJsonFile<Job[]>(FILE, jobs);

    res.status(200).json({_job});
    return;
  }

  res.setHeader('Allow', 'GET, PATCH');
  res.status(405).end('Method Not Allowed');
}