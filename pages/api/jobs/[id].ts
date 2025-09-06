<<<<<<< HEAD
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD


=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======


>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from "next";
import { readJsonFile, writeJsonFile } from "../../../utils/db";
import type { Job } from "../../../utils/types";
import { rateLimit } from "../../../utils/rateLimit";
import { getRequestUserEmail, isAdminEmail } from "../../../utils/auth";
<<<<<<< HEAD
const FILE = "jobs.json";
export default function handler(req: NextApiRequest, res: NextApiResponse) {

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const FILE = "jobs.json";
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


const FILE = "jobs && jobs.json";


export default function handler(req: NextApiRequest, res: NextApiResponse) {
=======
const FILE = "jobs.json";


export default function handler(req: NextApiRequest, res: NextApiResponse) {;

<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (!rateLimit(req, res)) return;
  const { id } = req && req.query;
  const jobs = readJsonFile<Job[]>(FILE, []);


<<<<<<< HEAD
  if (idx === -1) {
    res.status(404).json({ error: "Job not found" });
    return;
  }
  if (req.method === "GET") {
    res.status(200).json({ job: jobs[idx] });
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {

export default function handler(req: NextApiRequest, res: NextApiResponse) {;
  if (!rateLimit(req, res)) return;
  const { id } = req && req.query;
  const jobs = readJsonFile<Job[]>(FILE, []);
  const idx = jobs && jobs.findIndex((j) => j && j.id === id);
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  if (idx === -1) {
    res && res.status(404).json({ error: "Job not found" });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    return;
  }
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b


  if (req && req.method === "GET") {
    res && res.status(200).json({ job: jobs[idx] });
    return;
  const idx = jobs.findIndex((j) => j.id === id);
  if (idx === -1) {

  }
<<<<<<< HEAD
  if (req.method === 'GET') {
    res.status(200).json({ job: jobs[idx] });
    return
  }
=======

  if (req && req.method === "PATCH") {
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const userEmail = getRequestUserEmail(req);
    const job = jobs[idx];
    const isOwner = userEmail && userEmail === job && job.clientEmail;
    if (!isOwner && !isAdminEmail(userEmail)) {


      return;
    }
    const {

<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
=======
  if (req && req.method === "GET") {
    res && res.status(200).json({ job: jobs[idx] });
    return;
  const idx = jobs.findIndex((j) => j.id === id);
  if (idx === -1) {
    res.status(404).json({ error: "Job not found" });
    return;
import type { NextApiRequest, NextApiResponse } from './next';
import { readJsonFile, writeJsonFile  } from '../../../utils / db';
import type { Job } from "../../../utils / types";
import { rate_limit  } from '../../../utils / rate_limit';
import { getRequestUserEmail, isAdminEmail  } from '../../../utils / auth';
;
const FILE = "jobs.json";
;
export default /**
 * handler - Function description
 */
function handler() {
  if () return) {
  $2
}
  const { id } = req.query;
  const jobs = readJsonFile < Job[]>(FILE, []);
  const idx = jobs.find_index ((j) => j.id === id);
;
  // Check condition
if ( {) {
  $2
}
    res.status (404).json ({ error: "Job not found" });
    return;
  }
  // Check condition
if ( {) {
  $2
}
    res.status (200).json ({ job: jobs[idx] });
    return;
  }
  // Check condition
if ( {) {
  $2
}
    const user_email = getRequestUserEmail (req);
    const job = jobs[idx];
    const is_owner = user_email && user_email === job.client_email;
    if () {) {
  $2
}
      res.status (403).json ({ error: "Forbidden" });
      return;
    }
    const {
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      title,
      description,
      category,
      required_skills,
      budgetMinUsd,
      budgetMaxUsd,
      deliveryDeadlineIso,
      status,
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      res.status(403).json({ error: 'Forbidden' });
      return
    }

    const { title, description, category, requiredSkills, budgetMinUsd, budgetMaxUsd, deliveryDeadlineIso, status } = req.body || {};

    if (typeof title === 'string') job.title = title;
    if (typeof description === 'string') job.description = description;
    if (typeof category === 'string') job.category = category;
    if (Array.isArray(requiredSkills)) job.requiredSkills = requiredSkills.map(String);
    if (typeof budgetMinUsd === 'number' || budgetMinUsd === null) job.budgetMinUsd = budgetMinUsd ?? undefined;
    if (typeof budgetMaxUsd === 'number' || budgetMaxUsd === null) job.budgetMaxUsd = budgetMaxUsd ?? undefined;
    if (typeof deliveryDeadlineIso === 'string' || deliveryDeadlineIso === null) job.deliveryDeadlineIso = deliveryDeadlineIso ?? undefined;
    if (typeof status === 'string') job.status = status as Job['status'];
<<<<<<< HEAD
<<<<<<< HEAD

=======
job.updatedAtIso = new Date().toISOString();
    jobs[idx] = job;
    writeJsonFile<Job[]>(FILE, jobs);
    res.status(200).json({ job });
    return
  }
  res.setHeader('AllowGET, PATCH');
  res.status(405).end('Method Not Allowed')
}
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    } = req.body || {}
    // Check condition
if (job.title = title) {
  $2
}
    // Check condition
if (job.description = description) {
  $2
}
    // Check condition
if (job.category = category) {
  $2
}
    if ()) {
  $2
}
      job.required_skills = required_skills.map (String);
    // Check condition
if (
      job.budgetMinUsd = budgetMinUsd ?? undefined) {
  $2
}
    // Check condition
if (
      job.budgetMaxUsd = budgetMaxUsd ?? undefined) {
  $2
}
    // Check condition
if (
      job.deliveryDeadlineIso = deliveryDeadlineIso ?? undefined) {
  $2
}
    // Check condition
if (job.status = status as Job["status"]) {
  $2
}
    job.updatedAtIso = new Date ().toISOString ();
    jobs[idx] = job;
    writeJsonFile < Job[]>(FILE, jobs);
;
    res.status (200).json ({ job });
    return;
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  res.set_header ("Allow", "GET, PATCH");
  res.status (405).end ("Method Not Allowed");
}

<<<<<<< HEAD
=======
=======
  res.setHeader("Allow", "GET, PATCH");
  res.status(405).end("Method Not Allowed");
}

=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ job: { id: req.query.id } });
  } else if (req.method === 'PATCH') {
    res.status(200).json({ message: 'Job updated' });
  } else {
    res.setHeader('Allow', ['GET', 'PATCH']);
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
import type { NextApiRequest, NextApiResponse } from 'next';
import { readJsonFile, writeJsonFile } from '../../../utils/db';
import type { Job } from '../../../utils/types';
import { rateLimit } from '../../../utils/rateLimit';
import { getRequestUserEmail, isAdminEmail } from '../../../utils/auth';
const FILE = 'jobs.json';
export default function handler(req, res) {
  try {
  if (!rateLimit(req, res)) return,;
  const { id } = req.query;
  const jobs = readJsonFile<Job[]>(FILE, []),;
  const idx = jobs.findIndex((j) => j.id === id);
  if (idx === -1) {;
    res.status(404).json({ error: 'Job not found' });
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
  if (req.method === 'GET') {
    res.status(200).json({ job: jobs[idx] });
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
  if (req.method === 'GET') {
    const userEmail = getRequestUserEmail(req);
    const job = jobs[idx];
    const isOwner = userEmail && userEmail === job.clientEmail;
    if (!isOwner && !isAdminEmail(userEmail)) {;
<<<<<<< HEAD
=======
      title,
      description,
      category,
      required_skills,
      budgetMinUsd,
      budgetMaxUsd,
      deliveryDeadlineIso,
      status,

>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
      res.status(403).json({ error: 'Forbidden' });
      return
    }

    const { title, description, category, requiredSkills, budgetMinUsd, budgetMaxUsd, deliveryDeadlineIso, status } = req.body || {};

    if (typeof title === 'string') job.title = title;
    if (typeof description === 'string') job.description = description;
    if (typeof category === 'string') job.category = category;
    if (Array.isArray(requiredSkills)) job.requiredSkills = requiredSkills.map(String);
    if (typeof budgetMinUsd === 'number' || budgetMinUsd === null) job.budgetMinUsd = budgetMinUsd ?? undefined;
    if (typeof budgetMaxUsd === 'number' || budgetMaxUsd === null) job.budgetMaxUsd = budgetMaxUsd ?? undefined;
    if (typeof deliveryDeadlineIso === 'string' || deliveryDeadlineIso === null) job.deliveryDeadlineIso = deliveryDeadlineIso ?? undefined;
    if (typeof status === 'string') job.status = status as Job['status'];
<<<<<<< HEAD

    } = req.body || {}
    // Check condition
if (job.title = title) {
  $2
}
    // Check condition
if (job.description = description) {
  $2
}
    // Check condition
if (job.category = category) {
  $2
}
    if ()) {
  $2
}
      job.required_skills = required_skills.map (String);
    // Check condition
if (
      job.budgetMinUsd = budgetMinUsd ?? undefined) {
  $2
}
    // Check condition
if (
      job.budgetMaxUsd = budgetMaxUsd ?? undefined) {
  $2
}
    // Check condition
if (
      job.deliveryDeadlineIso = deliveryDeadlineIso ?? undefined) {
  $2
}
    // Check condition
if (job.status = status as Job["status"]) {
  $2
}
    job.updatedAtIso = new Date ().toISOString ();
    jobs[idx] = job;
    writeJsonFile < Job[]>(FILE, jobs);
;
    res.status (200).json ({ job });
    return;
  }

=======
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    job.updatedAtIso = new Date().toISOString();
    jobs[idx] = job,;
    writeJsonFile<Job[]>(FILE, jobs),;
    res.status(200).json({ job });
    return;
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
=======

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
}

  if (req.method === "PATCH") {
    const userEmail = getRequestUserEmail(req);
    const job = jobs[idx];
    const isOwner = userEmail && userEmail === job.clientEmail;
    if (!isOwner && !isAdminEmail(userEmail)) {
      res.status(403).json({ error: "Forbidden" });
      return;
    }
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b

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
    if (typeof title === "string") job.title = title;
    if (typeof description === "string") job.description = description;
    if (typeof category === "string") job.category = category;
    if (Array.isArray(requiredSkills))
      job.requiredSkills = requiredSkills.map(String);
    if (typeof budgetMinUsd === "number" || budgetMinUsd === null)
      job.budgetMinUsd = budgetMinUsd ?? undefined;
    if (typeof budgetMaxUsd === "number" || budgetMaxUsd === null)
      job.budgetMaxUsd = budgetMaxUsd ?? undefined;
    if (typeof deliveryDeadlineIso === "string" || deliveryDeadlineIso === null)
      job.deliveryDeadlineIso = deliveryDeadlineIso ?? undefined;
    if (typeof status === "string") job.status = status as Job["status"];

    job.updatedAtIso = new Date().toISOString();
    jobs[idx] = job;
    writeJsonFile<Job[]>(FILE, jobs);

    res.status(200).json({ job });
    return;
  }

res.setHeader("Allow", "GET, PATCH");
  res.status(405).end("Method Not Allowed");
}
<<<<<<< HEAD
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
=======
}
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
