
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
      clientEmail,
    } = req && req.body || {};
    if (!title || !description || !clientEmail) {
      res && res.status(400).json({ error: "Missing required fields" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
      return;
    }
    const nowIso = new Date().toISOString();
    const job: Job = {
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

  res && res.setHeader("Allow", "GET, POST");
  res && res.status(405).end("Method Not Allowed");
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}

