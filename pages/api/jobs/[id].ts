import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../utils/db';
import type { Job } from '../../../utils/types';
import { rateLimit } from '../../../utils/rateLimit';
import { getRequestUserEmail, isAdminEmail } from '../../../utils/auth';

const FILE = 'jobs.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;
  const { id } = req.query;
  const jobs = readJsonFile<Job[]>(FILE, []);
<<<<<<< HEAD
<<<<<<< HEAD
  const idx = jobs.findIndex(j => j.id === id);

  if (idx === -1) {
    res.status(404).json({ error: 'Job not found' });
    return;
=======
  const idx = jobs.findIndex((j) => j.id === id);

  if (idx === -1) {
    res.status(404).json({ error: 'Job not found' });
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  const idx = jobs.findIndex((j) => j.id === id);

  if (idx === -1) {
    res.status(404).json({ error: 'Job not found' });
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (req.method === 'GET') {
    res.status(200).json({ job: jobs[idx] });
<<<<<<< HEAD
<<<<<<< HEAD
    return;
=======
    return
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  }

  if (req.method === 'PATCH') {
    const userEmail = getRequestUserEmail(req);
    const job = jobs[idx];
    const isOwner = userEmail && userEmail === job.clientEmail;
    if (!isOwner && !isAdminEmail(userEmail)) {
      res.status(403).json({ error: 'Forbidden' });
<<<<<<< HEAD
<<<<<<< HEAD
      return;
    }

    const {
      title,
      description,
      category,
      requiredSkills,
      budgetMinUsd,
      budgetMaxUsd,
      deliveryDeadlineIso,
      status,
    } = req.body || {};
=======
      return
    }

    const { title, description, category, requiredSkills, budgetMinUsd, budgetMaxUsd, deliveryDeadlineIso, status } = req.body || {};
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
      return
    }

    const { title, description, category, requiredSkills, budgetMinUsd, budgetMaxUsd, deliveryDeadlineIso, status } = req.body || {};
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c

    if (typeof title === 'string') job.title = title;
    if (typeof description === 'string') job.description = description;
    if (typeof category === 'string') job.category = category;
<<<<<<< HEAD
<<<<<<< HEAD
    if (Array.isArray(requiredSkills))
      job.requiredSkills = requiredSkills.map(String);
    if (typeof budgetMinUsd === 'number' || budgetMinUsd === null)
      job.budgetMinUsd = budgetMinUsd ?? undefined;
    if (typeof budgetMaxUsd === 'number' || budgetMaxUsd === null)
      job.budgetMaxUsd = budgetMaxUsd ?? undefined;
    if (typeof deliveryDeadlineIso === 'string' || deliveryDeadlineIso === null)
      job.deliveryDeadlineIso = deliveryDeadlineIso ?? undefined;
=======
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    if (Array.isArray(requiredSkills)) job.requiredSkills = requiredSkills.map(String);
    if (typeof budgetMinUsd === 'number' || budgetMinUsd === null) job.budgetMinUsd = budgetMinUsd ?? undefined;
    if (typeof budgetMaxUsd === 'number' || budgetMaxUsd === null) job.budgetMaxUsd = budgetMaxUsd ?? undefined;
    if (typeof deliveryDeadlineIso === 'string' || deliveryDeadlineIso === null) job.deliveryDeadlineIso = deliveryDeadlineIso ?? undefined;
<<<<<<< HEAD
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
    if (typeof status === 'string') job.status = status as Job['status'];

    job.updatedAtIso = new Date().toISOString();
    jobs[idx] = job;
    writeJsonFile<Job[]>(FILE, jobs);

    res.status(200).json({ job });
<<<<<<< HEAD
<<<<<<< HEAD
    return;
  }

  res.setHeader('Allow', 'GET, PATCH');
  res.status(405).end('Method Not Allowed');
=======
    return
  }

  res.setHeader('AllowGET, PATCH');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    return
  }

  res.setHeader('AllowGET, PATCH');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
