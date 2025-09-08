import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../utils/db';
import type { Job } from '../../../utils/types';
import { rateLimit } from '../../../utils/rateLimit';
import { getRequestUserEmail, isAdminEmail } from '../../../utils/auth';
export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (!rateLimit(req, res)) return;
  const { id } = req.query;
  const jobs = readJsonFile<Job[]>(FILE, []);
  const idx = jobs.findIndex((j) => j.id === id);
  if (idx === -1) {
    res.status(404).json({,
    error: 'Job not found' });
    return
  }

  if (req.method === 'GET') {
    res.status(200).json({,
    job: jobs[idx] });
    return
  }

  if (req.method === 'PATCH') {
    const userEmail = getRequestUserEmail(req);
    const job = jobs[idx];
    const isOwner = userEmail && userEmail === job.clientEmail;
    if (!isOwner && !isAdminEmail(userEmail)) {
      res.status(403).json({,
    error: 'Forbidden' });
      return
    }

    const { title, description, category, requiredSkills, budgetMinUsd, budgetMaxUsd, deliveryDeadlineIso, status } = req.body || {};
    
    // Placeholder implementation for job updates
    const job = {
      id,
      title,
      description,
      category,
      requiredSkills,
      budgetMinUsd,
      budgetMaxUsd,
      deliveryDeadlineIso,
      status,
      updatedAtIso: new Date().toISOString()
    };
    
    res.status(200).json({ message: 'Job endpoint', job });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}