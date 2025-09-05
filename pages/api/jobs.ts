import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_Job} from '../../utils/types';

const _FILE = 'jobs.json';

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (!rateLimit(req, _res)) return;

  if (req.method === 'GET') {
    const _jobs = readJsonFile<Job[]>(FILE, _[]);
    res.status(200).json({ jobs});
    return;
  }

  if (req.method === 'POST') {_const {
      title, _description, _category, _requiredSkills = [], _budgetMinUsd, _budgetMaxUsd, _deliveryDeadlineIso, _clientEmail} = req.body || {};

    if (!title || !description || !clientEmail) {_res.status(400).json({ error: 'Missing required fields'});
      return;
    }

    const _nowIso = new Date().toISOString();

    const job: Job = {_id: uuidv4(), _title: String(title), _description: String(description), _category: String(category || ''), _requiredSkills: Array.isArray(requiredSkills) ? requiredSkills.map(String) : [], _budgetMinUsd: typeof budgetMinUsd === 'number' ? budgetMinUsd : undefined, _budgetMaxUsd: typeof budgetMaxUsd === 'number' ? budgetMaxUsd : undefined, _deliveryDeadlineIso: deliveryDeadlineIso ? String(deliveryDeadlineIso) : undefined, _clientEmail: String(clientEmail), _status: 'New', _createdAtIso: nowIso, _updatedAtIso: nowIso};

    // Auto-assign category via AI (placeholder). In production, call OpenAI based on description/skills.
    if (!job.category) {_const _skills = (job.requiredSkills || []).map(_(s) => s.toLowerCase());
      if (_skills.some((s) => s.includes('openai') || s.includes('langchain') || s.includes('rag'))) job.category = 'LLM App';
      else if (_skills.some((s) => s.includes('aws') || s.includes('kubernetes') || s.includes('terraform'))) job.category = 'Cloud';
      else job.category = 'General';}

    const _jobs = readJsonFile<Job[]>(FILE, []);
    jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs);

    res.status(201).json({_job});
    return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
}