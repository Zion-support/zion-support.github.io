<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile, writeJsonFile } from "../../../utils/db";
import type { Job } from "../../../utils/types";
import { rateLimit } from "../../../utils/rateLimit";
import { getRequestUserEmail, isAdminEmail } from "../../../utils/auth";

const FILE = 'data/jobs.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (!rateLimit(req, res)) return;
  
  const { id } = req.query as { id?: string };
  if (!id) {
    return res.status(400).json({ error: "Job ID required" });
  }

  const jobs = readJsonFile<Job[]>(FILE, []);
  const idx = jobs.findIndex(j => j.id === id);

  if (idx === -1) {
    return res.status(404).json({ error: "Job not found" });
  }

  if (req.method === "GET") {
    return res.status(200).json({ job: jobs[idx] });
  }

  if (req.method === "PUT") {
    const userEmail = getRequestUserEmail(req);
    const job = jobs[idx];
    const isOwner = userEmail && userEmail === job.clientEmail;
    
    if (!isOwner && !isAdminEmail(userEmail)) {
      return res.status(403).json({ error: "Forbidden" });
    }

    const { title, description, requirements, location, salary, type } = req.body || {};
    const updatedJob = {
      ...job,
      title: title || job.title,
      description: description || job.description,
      requirements: requirements || job.requirements,
      location: location || job.location,
      salary: salary || job.salary,
      type: type || job.type,
      updatedAt: new Date().toISOString()
    };

    jobs[idx] = updatedJob;
    writeJsonFile(FILE, jobs);
    return res.status(200).json({ job: updatedJob });
  }

  if (req.method === "DELETE") {
    const userEmail = getRequestUserEmail(req);
    const job = jobs[idx];
    const isOwner = userEmail && userEmail === job.clientEmail;
    
    if (!isOwner && !isAdminEmail(userEmail)) {
      return res.status(403).json({ error: "Forbidden" });
    }

    jobs.splice(idx, 1);
    writeJsonFile(FILE, jobs);
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: "Method not allowed" });
}
=======

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
