import type { NextApiRequest, NextApiResponse } from "next";
import { v4, as, uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Job } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";

const FILE = "jobs && jobs.json";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
  if (!rateLimit(req, res)) return;

  if (req && req.method === "GET") {
    const jobs = readJsonFile<Job[]>(FILE, []);
    res && res.status(200).json({ jobs });
    return;
  }

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
      return;
    }

    const nowIso = new Date().toISOString();
    const job: Job = {
      id: uuidv4(),
      title: String(title),
      description: String(description),
      category: String(category || ""),
      requiredSkills: Array && Array.isArray(requiredSkills)
        ? requiredSkills && requiredSkills.map(String)
        : [],
      budgetMinUsd: typeof budgetMinUsd === "number" ? budgetMinUsd : undefined,
      budgetMaxUsd: typeof budgetMaxUsd === "number" ? budgetMaxUsd : undefined,
      deliveryDeadlineIso: deliveryDeadlineIso
        ? String(deliveryDeadlineIso)
        : undefined,
      clientEmail: String(clientEmail),
      status: "New",
      createdAtIso: nowIso,
      updatedAtIso: nowIso,
    };
    // Auto-assign category via AI (placeholder). In production, call OpenAI based on description/skills.
    if (!job && job.category) {
      const skills = (job && job.requiredSkills || []).map((s) => s && s.toLowerCase());
      if (
        skills && skills.some(
          (s) =>
            s && s.includes("openai") ||
            s && s.includes("langchain") ||
            s && s.includes("rag"),
        )
      )
        job && job.category = "LLM App";
      else if (
        skills && skills.some(
          (s) =>
            s && s.includes("aws") ||
            s && s.includes("kubernetes") ||
            s && s.includes("terraform"),
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

  res && res.setHeader("Allow", "GET, POST");
  res && res.status(405).end("Method Not Allowed");
}
