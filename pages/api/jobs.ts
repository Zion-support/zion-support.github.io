<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { v4, as, uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Job } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
<<<<<<< HEAD
const FILE = "jobs.json";
=======

const FILE = "jobs && jobs.json";

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
  if (!rateLimit(req, res)) return;
<<<<<<< HEAD
  if (req.method === "GET") {
=======
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Job } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = 'jobs.json';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;

  if (req.method === 'GET') {
    const jobs = readJsonFile<Job[]>(FILE, []);
    res.status(200).json({ jobs });
    return
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  if (req && req.method === "GET") {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const jobs = readJsonFile<Job[]>(FILE, []);
    res && res.status(200).json({ jobs });
    return;
  }
<<<<<<< HEAD
  if (req.method === "POST") {
    const {
      title
      description
      category
      requiredSkills = []
      budgetMinUsd
      budgetMaxUsd
      deliveryDeadlineIso
      clientEmail
    } = req.body |{}
    if (!title |!description |!clientEmail) {
      res.status(400).json({ error: "Missing required fields" });
=======

  if (req && req.method === "POST") {
    const {
      title,
      description,
      category,
      requiredSkills = [],
      budgetMinUsd,
      budgetMaxUsd,
      deliveryDeadlineIso,
<<<<<<< HEAD
      clientEmail,
    } = req && req.body || {};
    if (!title || !description || !clientEmail) {
      res && res.status(400).json({ error: "Missing required fields" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return;
=======
      clientEmail} = req.body || {};

    if (!title || !description || !clientEmail) {
      res.status(400).json({ error: 'Missing required fields' });
      return
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
    }
    const nowIso = new Date().toISOString();
    const job: Job = {
<<<<<<< HEAD
<<<<<<< HEAD
      id: uuidv4()
      title: String(title)
      description: String(description)
      category: String(category |"")
      requiredSkills: Array.isArray(requiredSkills)
        ? requiredSkills.map(String)
        : []
      budgetMinUsd: typeof budgetMinUsd === "number" ? budgetMinUsd : undefined
      budgetMaxUsd: typeof budgetMaxUsd === "number" ? budgetMaxUsd : undefined
=======
      id: uuidv4(),
      title: String(title),
      description: String(description),
      category: String(category || ""),
      requiredSkills: Array && Array.isArray(requiredSkills)
        ? requiredSkills && requiredSkills.map(String)
        : [],
      budgetMinUsd: typeof budgetMinUsd === "number" ? budgetMinUsd : undefined,
      budgetMaxUsd: typeof budgetMaxUsd === "number" ? budgetMaxUsd : undefined,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      deliveryDeadlineIso: deliveryDeadlineIso
        ? String(deliveryDeadlineIso)
        : undefined
      clientEmail: String(clientEmail)
      status: "New"
      createdAtIso: nowIso
      updatedAtIso: nowIso
    }
    // Auto-assign category via AI (placeholder). In production, call OpenAI based on description/skills.
<<<<<<< HEAD
    if (!job.category) {
      const skills = (job.requiredSkills |[]).map((s) => s.toLowerCase());
=======
    if (!job && job.category) {
      const skills = (job && job.requiredSkills || []).map((s) => s && s.toLowerCase());
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      if (
        skills && skills.some(
          (s) =>
<<<<<<< HEAD
            s.includes("openai") |
            s.includes("langchain") |
            s.includes("rag")
=======
            s && s.includes("openai") ||
            s && s.includes("langchain") ||
            s && s.includes("rag"),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        )
      )
        job && job.category = "LLM App";
      else if (
        skills && skills.some(
          (s) =>
<<<<<<< HEAD
            s.includes("aws") |
            s.includes("kubernetes") |
            s.includes("terraform")
=======
            s && s.includes("aws") ||
            s && s.includes("kubernetes") ||
            s && s.includes("terraform"),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
        )
      )
        job && job.category = "Cloud";
      else job && job.category = "General";
    }
    const jobs = readJsonFile<Job[]>(FILE, []);
    jobs && jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs);
    res && res.status(201).json({ job });
    return;
  }
<<<<<<< HEAD
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
=======
=======
      id: uuidv4(), title: String(title),
      description: String(description), category: String(category || ''),
      requiredSkills: Array.isArray(requiredSkills) ? requiredSkills.map(String) : [], budgetMinUsd: typeof budgetMinUsd === 'number' ? budgetMinUsd : undefined,
      budgetMaxUsd: typeof budgetMaxUsd === 'number' ? budgetMaxUsd : undefined, deliveryDeadlineIso: deliveryDeadlineIso ? String(deliveryDeadlineIso) : undefined,
      clientEmail: String(clientEmail), status: 'New',
      createdAtIso: nowIso,
      updatedAtIso: nowIso};

    // Auto-assign category via AI (placeholder). In production, call OpenAI based on description/skills.
    if (!job.category) {
      const skills = (job.requiredSkills || []).map((s) => s.toLowerCase());
      if (skills.some((s) => s.includes('openai') || s.includes('langchain') || s.includes('rag'))) job.category = 'LLM App';
      else if (skills.some((s) => s.includes('aws') || s.includes('kubernetes') || s.includes('terraform'))) job.category = 'Cloud';
      else job.category = 'General'
    }

    const jobs = readJsonFile<Job[]>(FILE, []);
    jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs);

    res.status(201).json({ job });
    return
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

  res && res.setHeader("Allow", "GET, POST");
  res && res.status(405).end("Method Not Allowed");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
