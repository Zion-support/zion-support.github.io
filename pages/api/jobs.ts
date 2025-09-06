import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readFile, writeFile } from '../../utils/fsdb';

interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  requiredSkills: string[];
  budgetMinUsd?: number;
  budgetMaxUsd?: number;
  deliveryDeadlineIso?: string;
  clientEmail: string;
  status: 'New' | 'Open' | 'In Progress' | 'Completed' | 'Cancelled';
  createdAtIso: string;
  updatedAtIso: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { category, status, skills } = req.query;
    let jobs = readFile('jobs.json', []);
    
    if (category) jobs = jobs.filter((j: Job) => j.category === category);
    if (status) jobs = jobs.filter((j: Job) => j.status === status);
    if (skills) {
      const skillList = Array.isArray(skills) ? skills : [skills];
      jobs = jobs.filter((j: Job) => 
        skillList.some(skill => j.requiredSkills.includes(String(skill)))
      );
    }
    
    res.status(200).json({ jobs });
    return;
  }

  if (req.method === 'POST') {
    const {
      title,
      description,
      category,
      requiredSkills = [],
      budgetMinUsd,
      budgetMaxUsd,
      deliveryDeadlineIso,
      clientEmail
    } = req.body || {};

    if (!title || !description || !clientEmail) {
      res.status(400).json({ error: 'Missing required fields' });
      return;
    }

    const nowIso = new Date().toISOString();

    const job: Job = {
      id: uuidv4(),
      title: String(title),
      description: String(description),
      category: String(category || ''),
      requiredSkills: Array.isArray(requiredSkills) ? requiredSkills.map(String) : [],
      budgetMinUsd: typeof budgetMinUsd === 'number' ? budgetMinUsd : undefined,
      budgetMaxUsd: typeof budgetMaxUsd === 'number' ? budgetMaxUsd : undefined,
      deliveryDeadlineIso: deliveryDeadlineIso ? String(deliveryDeadlineIso) : undefined,
      clientEmail: String(clientEmail),
      status: 'New',
      createdAtIso: nowIso,
      updatedAtIso: nowIso
    };

    // Auto-assign category via AI (placeholder). In production, call OpenAI based on description/skills.
    if (!category) {
      const aiCategory = 'AI Development'; // Mock AI category assignment
      job.category = aiCategory;
    }

    const jobs = readFile('jobs.json', []);
    jobs.push(job);
    writeFile('jobs.json', jobs);

    res.status(201).json({ job });
    return;
  }

  res.setHeader('Allow', ['GET', 'POST']);
  res.status(405).end('Method Not Allowed');
}