<<<<<<< HEAD
<<<<<<< HEAD

=======
<<<<<<< HEAD
const FILE = "jobs && jobs.json";
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
import type { NextApiRequest, NextApiResponse } from "next";
import { v4, as, uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Job } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
<<<<<<< HEAD


const FILE = "jobs && jobs.json";


export default async function handler(
<<<<<<< HEAD
=======
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee

  if (!rateLimit(req, res)) return;


=======
const FILE = "jobs.json";
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
<<<<<<< HEAD
  try {
=======
=======
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
=======
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  if (!rateLimit(req, res)) return;
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  if (req && req.method === "GET") {
    const jobs = readJsonFile<Job[]>(FILE, []);
    res && res.status(200).json({ jobs });
    return;
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Job } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = 'jobs.json';
export default async function handler(req, res) {
  try {
  if (!rateLimit(req, res)) return,;
  if (req.method === 'GET') {
    const jobs = readJsonFile<Job[]>(FILE, []),;
    res.status(200).json({ jobs });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  if (req.method === 'GET') {
    const {;
      title,;
      description,;
      category,;
      requiredSkills = [];
      budgetMinUsd;
      budgetMaxUsd,;
      deliveryDeadlineIso,;
      clientEmail} = req.body || {},;
    if (!title || !description || !clientEmail) {;
      res.status(400).json({ error: 'Missing required fields' });
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const nowIso = new Date().toISOString();
    const job: Job = {;
      id: uuidv4();
      title: String(title);
      description: String(description);
      category: String(category || '');
      requiredSkills: Array.isArray(requiredSkills) ? requiredSkills.map(String) : [];
      budgetMinUsd: typeof budgetMinUsd === 'number' ? budgetMinUsd : undefined;
      budgetMaxUsd: typeof budgetMaxUsd === 'number' ? budgetMaxUsd : undefined,;
      deliveryDeadlineIso: deliveryDeadlineIso ? String(deliveryDeadlineIso) : undefined,;
      clientEmail: String(clientEmail);
      status: 'New',;
      createdAtIso: nowIso,;
      updatedAtIso: nowIso},;
    // Auto-assign category via AI (placeholder). In production, call OpenAI based on description/skills.;
    if (!job.category) {;
      const skills = (job.requiredSkills || []).map((s) => s.toLowerCase());
      if (skills.some((s) => s.includes('openai') || s.includes('langchain') || s.includes('rag'))) job.category = 'LLM App';
      else if (skills.some((s) => s.includes('aws') || s.includes('kubernetes') || s.includes('terraform'))) job.category = 'Cloud';
      else job.category = 'General';
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const jobs = readJsonFile<Job[]>(FILE, []),;
    jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs),;
=======
  }

=======
  }
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
import type { NextApiRequest, NextApiResponse } from './next';
import { v4, as, uuidv4  } from './uuid';
import { readJsonFile, writeJsonFile  } from '../../utils / db';
import type { Job } from "../../utils / types";
import { rate_limit  } from '../../utils / rate_limit';
;
const FILE = "jobs.json";
;
export default async /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  // Check condition
if ( {) {
  $2
}
    const jobs = readJsonFile < Job[]>(FILE, []);
    res.status (200).json ({ jobs });
    return;
  }
  // Check condition
if ( {) {
  $2
}
<<<<<<< HEAD

=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
  if (req && req.method === "POST") {
    const {
      title,
      description,
      category,
required_skills = [],
      budgetMinUsd,
      budgetMaxUsd,
      deliveryDeadlineIso,
<<<<<<< HEAD


      return;

=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      clientEmail} = req.body || {};
    if (!title || !description || !clientEmail) {
      res.status(400).json({ error: 'Missing required fields' });
      return
<<<<<<< HEAD

>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
    }
    const nowIso = new Date().toISOString();
    const job: Job = {


=======
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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

    if (!job && job.category) {
      const skills = (job && job.requiredSkills || []).map((s) => s && s.toLowerCase());

      if (
        skills && skills.some(
          (s) =>

            s && s.includes("openai") ||
            s && s.includes("langchain") ||
            s && s.includes("rag"),

=======
    if (!job && job.category) {
      const skills = (job && job.requiredSkills || []).map((s) => s && s.toLowerCase());
      if (
        skills && skills.some(
          (s) =>
            s && s.includes("openai") ||
            s && s.includes("langchain") ||
            s && s.includes("rag"),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
        )
      )
        job && job.category = "LLM App";
      else if (
        skills && skills.some(
          (s) =>
<<<<<<< HEAD

            s && s.includes("aws") ||
            s && s.includes("kubernetes") ||
            s && s.includes("terraform"),

=======
            s && s.includes("aws") ||
            s && s.includes("kubernetes") ||
            s && s.includes("terraform"),
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    }
    const jobs = readJsonFile<Job[]>(FILE, []);
    jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs);
<<<<<<< HEAD


>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    res.status(201).json({ job });
    return
=======
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });

<<<<<<< HEAD
=======


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
  res && res.setHeader("Allow", "GET, POST");
  res && res.status(405).end("Method Not Allowed");
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}


=======
=======
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
      client_email,
    } = req.body || {}
    // Check condition
if ( {) {
  $2
}
      res.status (400).json ({ error: "Missing required fields" });
      return;
    }
    const now_iso = new Date ().toISOString ();
    const job: Job = {
      id: uuidv4 (),
      title: String (title),
      description: String (description),
      category: String (category || ""),
      required_skills: Array.is_array (required_skills);
        ? required_skills.map (String);
        : [],
      budgetMinUsd: typeof budgetMinUsd === "number" ? budgetMinUsd : undefined,
      budgetMaxUsd: typeof budgetMaxUsd === "number" ? budgetMaxUsd : undefined,
      deliveryDeadlineIso: deliveryDeadlineIso;
        ? String (deliveryDeadlineIso);
        : undefined,
      client_email: String (client_email),
      status: "New",
      createdAtIso: now_iso,
      updatedAtIso: now_iso,
    }
    // Auto - assign category via AI (placeholder). In production, call OpenAI based on description / skills.;
    // Check condition
if ( {) {
  $2
}
      const skills = (job.required_skills || []).map ((s) => s.toLowerCase ());
      // Check condition
if (=>) {
  $2
}
            s.includes ("openai") ||;
            s.includes ("langchain") ||;
            s.includes ("rag"),
        ));
        job.category = "LLM App";
      else // Check condition
if (=>) {
  $2
}
            s.includes ("aws") ||;
            s.includes ("kubernetes") ||;
            s.includes ("terraform"),
        ));
        job.category = "Cloud";
      else job.category = "General";
    }
    const jobs = readJsonFile < Job[]>(FILE, []);
    jobs.unshift (job);
    writeJsonFile < Job[]>(FILE, jobs);
    res.status (201).json ({ job });
    return;
  }
<<<<<<< HEAD
  res.set_header ("Allow", "GET, POST");
  res.status (405).end ("Method Not Allowed");
}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
=======
=======
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Job } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
const FILE = 'jobs.json';
export default async function handler(req, res) {
  try {
  if (!rateLimit(req, res)) return,;
  if (req.method === 'GET') {
    const jobs = readJsonFile<Job[]>(FILE, []),;
    res.status(200).json({ jobs });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
}
;
  if (req.method === 'GET') {
    const {;
      title,;
      description,;
      category,;
      requiredSkills = [];
      budgetMinUsd;
      budgetMaxUsd,;
      deliveryDeadlineIso,;
      clientEmail} = req.body || {},;
    if (!title || !description || !clientEmail) {;
      res.status(400).json({ error: 'Missing required fields' });
      return;
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const nowIso = new Date().toISOString();
    const job: Job = {;
      id: uuidv4();
      title: String(title);
      description: String(description);
      category: String(category || '');
      requiredSkills: Array.isArray(requiredSkills) ? requiredSkills.map(String) : [];
      budgetMinUsd: typeof budgetMinUsd === 'number' ? budgetMinUsd : undefined;
      budgetMaxUsd: typeof budgetMaxUsd === 'number' ? budgetMaxUsd : undefined,;
      deliveryDeadlineIso: deliveryDeadlineIso ? String(deliveryDeadlineIso) : undefined,;
      clientEmail: String(clientEmail);
      status: 'New',;
      createdAtIso: nowIso,;
      updatedAtIso: nowIso},;
    // Auto-assign category via AI (placeholder). In production, call OpenAI based on description/skills.;
    if (!job.category) {;
      const skills = (job.requiredSkills || []).map((s) => s.toLowerCase());
      if (skills.some((s) => s.includes('openai') || s.includes('langchain') || s.includes('rag'))) job.category = 'LLM App';
      else if (skills.some((s) => s.includes('aws') || s.includes('kubernetes') || s.includes('terraform'))) job.category = 'Cloud';
      else job.category = 'General';
      } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const jobs = readJsonFile<Job[]>(FILE, []),;
    jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs),;
    res.status(201).json({ job });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
  res.setHeader('AllowGET, POST');
  res.status(405).end('Method Not Allowed');
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}

  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}
}
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-8eb6
