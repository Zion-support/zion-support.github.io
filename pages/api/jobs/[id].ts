import type { NextApiRequest, NextApiResponse } from "next";"
import { readJsonFile, writeJsonFile } from "../../../utils/db";"
import type { Job } from "../../../utils/types";"
import { rateLimit } from "../../../utils/rateLimit";"
import { getRequestUserEmail, isAdminEmail } from "../../../utils/auth";"

const FILE = "jobs.json";"

export default function handler() {
  }
  if (!rateLimit(req, res)) return;
  const { id } = req && req.query;
  const jobs = readJsonFile<Job[]>(FILE, []);

:pages_backup/api/jobs/[id].ts


  if (idx === -1) {
    }
    res.status(404).json({ "error": "Job not found" });"
    return;
  }

  if (req.method === "GET") {"
    }
    res.status(200).json({ "job": jobs[idx] });
    return;
  }

  if (req.method === "PATCH") {"
    }
    const userEmail = getRequestUserEmail(req);
    const job = jobs[idx];
    const isOwner = userEmail && userEmail === job.clientEmail;
    if (!isOwner && !isAdminEmail(userEmail)) {
      }
      res.status(403).json({ "error": "Forbidden" });"
      return;
    }


    const {
      }
      title,
      description,
      category,
      requiredSkills,
      budgetMinUsd,
      budgetMaxUsd,
      deliveryDeadlineIso,
      status
    } = req.body || {};
    if (typeof title === "string") job.title = title;"
    if (typeof description === "string") job.description = description;"
    if (typeof category === "string") job.category = category;"
    if (Array.isArray(requiredSkills))
      job.requiredSkills = requiredSkills.map(String);
    if (typeof budgetMinUsd === "number" || budgetMinUsd === null)"
      job.budgetMinUsd = budgetMinUsd ?? undefined;
    if (typeof budgetMaxUsd === "number" || budgetMaxUsd === null)"
      job.budgetMaxUsd = budgetMaxUsd ?? undefined;
    if (typeof deliveryDeadlineIso === "string" || deliveryDeadlineIso === null)"
      job.deliveryDeadlineIso = deliveryDeadlineIso ?? undefined;
    if (typeof status === "string") job.status = status as Job["status"];"

    job.updatedAtIso = new Date().toISOString();
    jobs[idx] = job;
    writeJsonFile<Job[]>(FILE, jobs);

    res.status(200).json({ job });
    return;
  }

  res.setHeader("Allow", "GET, PATCH");"
  res.status(405).end("Method Not Allowed");"
}
:pages_backup/api/jobs/[id].ts



  res.setHeader('Allow', 'GET, PATCH');
  res.status(405).end('Method Not Allowed');

}
origin/cursor/automate-test-improve-and-merge-code-2533

import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'PATCH') {
    res.setHeader('Allow', ['GET', 'PATCH']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ job: { id: req.query.id } });
}
