<<<<<<< HEAD:pages/api/jobs.ts
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f

<<<<<<< HEAD:pages_backup/api/jobs.ts
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import type { NextApiRequest, NextApiResponse } from "next";
import { v4, as, uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Job } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
<<<<<<< HEAD
<<<<<<< HEAD
const FILE = "jobs.json";

export default async function handler(
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
import type { NextApiRequest, NextApiResponse } from "next";"
import { v4, as, uuidv4 } from "uuid";"
import { readJsonFile, writeJsonFile } from "../../utils/db";"
import type { Job } from "../../utils/types";"
import { rateLimit } from "../../utils/rateLimit";
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts


"
const FILE = "jobs && jobs.json";


export default async function handler(
<<<<<<< HEAD:pages_backup/api/jobs.ts
<<<<<<< HEAD
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from '[^']*';
import { readJsonFile, writeJsonFile } from '[^']*';
import type { Job } from '../../utils/types';
import { rateLimit } from '[^']*';
const FILE = null;
  res.status(405).end('Method Not Allowed')
}
export default async function handler(
<<<<<<< HEAD:pages/api/jobs.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts




;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  try {}
  if (!rateLimit(req, res)) return;

<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/api/jobs.ts
<<<<<<< HEAD:pages/api/jobs.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
const FILE = "jobs.json";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  req: NextApiRequest,
  res: NextApiResponse,
) {;
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  if (!rateLimit(req, res)) return;
=======
  if (req && req.method === "GET") {
    const jobs = readJsonFile<Job[]>(FILE, []);
<<<<<<< HEAD
    res && res.status(200).json({ jobs });
    return;
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======
    res.status(200).json({ jobs });
return;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
    res.status(200).json({ jobs });
return;
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
=======
  // Check condition
if ( {) {
  $2
}

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
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    }
    const nowIso = new Date().toISOString();
    const job: Job = {


      deliveryDeadlineIso: deliveryDeadlineIso
        ? String(deliveryDeadlineIso)
        : undefined
      clientEmail: String(clientEmail)
      status: "New"
      createdAtIso: nowIso
      updatedAtIso: nowIso
    }
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

    }

    const jobs = readJsonFile<Job[]>(FILE, []);
    jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs);

import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
<<<<<<< HEAD:pages/api/jobs.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Job } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';
=======

import type { NextApiRequest, NextApiResponse } from 'next';'
import { v4 as uuidv4 } from 'uuid';'
import { readJsonFile, writeJsonFile } from '../../utils/db';'
import type { Job } from '../../utils/types';'
import { rateLimit } from '../../utils/rateLimit';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts
const FILE = 'jobs.json';
export default async function handler(req, res) {}
  try {};
  if (!rateLimit(req, res)) return,;'
  if (req.method === 'GET') {}
    const jobs = readJsonFile<Job[]>(FILE, []),;
    res.status(200).json({ jobs });
<<<<<<< HEAD:pages_backup/api/jobs.ts
<<<<<<< HEAD
    return
  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  if (req && req.method === "GET") {
<<<<<<< HEAD:pages/api/jobs.ts

=======
origin/cursor/automate-test-improve-and-merge-code-382a
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
    const jobs = readJsonFile<Job[]>(FILE, []);
    res && res.status(200).json({ jobs });

    return;
<<<<<<< HEAD
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
"
  if (req && req.method === "GET") {}
    const jobs = readJsonFile<Job[]>(FILE, []);
    res && res.status(200).json({ jobs });
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts


    return;

}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;'
  if (req.method === 'GET') {}
    const {;
      title,;
      description,;
      category,;
      requiredSkills = [];
      budgetMinUsd;
      budgetMaxUsd,;
      deliveryDeadlineIso,;
      clientEmail} = req.body || {},;
    if (!title || !description || !clientEmail) {;'
      res.status(400).json({ error: 'Missing required fields' });
      return;
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const nowIso = new Date().toISOString();
    const job: Job = {;
      id: uuidv4();
      title: String(title);
      description: String(description);'
      category: String(category || '');
      requiredSkills: Array.isArray(requiredSkills) ? requiredSkills.map(String) : [];'
      budgetMinUsd: typeof budgetMinUsd === 'number' ? budgetMinUsd : undefined;'
      budgetMaxUsd: typeof budgetMaxUsd === 'number' ? budgetMaxUsd : undefined,;
      deliveryDeadlineIso: deliveryDeadlineIso ? String(deliveryDeadlineIso) : undefined,;
      clientEmail: String(clientEmail);'
      status: 'New',;
      createdAtIso: nowIso,;
      updatedAtIso: nowIso},;
    // Auto-assign category via AI (placeholder). In production, call OpenAI based on description/skills.;
    if (!job.category) {;
      const skills = (job.requiredSkills || []).map((s) => s.toLowerCase());'
      if (skills.some((s) => s.includes('openai') || s.includes('langchain') || s.includes('rag'))) job.category = 'LLM App';'
      else if (skills.some((s) => s.includes('aws') || s.includes('kubernetes') || s.includes('terraform'))) job.category = 'Cloud';'
      else job.category = 'General';
      } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    const jobs = readJsonFile<Job[]>(FILE, []),;
    jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs),;
<<<<<<< HEAD:pages_backup/api/jobs.ts
<<<<<<< HEAD
    res.status(201).json({ job });
    return
  }
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
<<<<<<< HEAD
  }

  }
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
  }

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from './next';
import { v4, as, uuidv4  } from './uuid';
import { readJsonFile, writeJsonFile  } from '../../utils / db';
import type { Job } from "../../utils / types";
=======
'
import type { NextApiRequest, NextApiResponse } from './next';'
import { v4, as, uuidv4  } from './uuid';'
import { readJsonFile, writeJsonFile  } from '../../utils / db';"
import type { Job } from "../../utils / types";'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts
import { rate_limit  } from '../../utils / rate_limit';
;"
const FILE = "jobs.json";
;
export default async /**;
 * handler - Function description;
 */
function handler() {}
  if () return) {}
  $2;
}
  // Check condition;
if ( {) {}
  $2;
}
    const jobs = readJsonFile < Job[]>(FILE, []);
    res.status (200).json ({ jobs });
    return;
  }
  // Check condition;
if ( {) {}
  $2;
}


<<<<<<< HEAD:pages_backup/api/jobs.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    const {
<<<<<<< HEAD:pages/api/jobs.ts
<<<<<<< HEAD
      title
      description
      category
=======


    const {}
      title;
      description;
      category;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts
      requiredSkills = []
      budgetMinUsd;
      budgetMaxUsd;
      deliveryDeadlineIso;
      clientEmail;
    } = req.body |{}
    if (!title |!description |!clientEmail) {"
      res.status(400).json({ error: "Missing required fields" });
"
  if (req && req.method === "POST") {}
    const {}
      title,
      description,
      category,

    }
    const nowIso = new Date().toISOString();
<<<<<<< HEAD:pages_backup/api/jobs.ts
    const job: Job = {

<<<<<<< HEAD

<<<<<<< HEAD
=======
required_skills = [],
      budgetMinUsd,
      budgetMaxUsd,
      deliveryDeadlineIso,
=======
required_skills = []
      budgetMinUsd
      budgetMaxUsd
      deliveryDeadlineIso
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
      clientEmail} = req.body || {};
    if (!title || !description || !clientEmail) {
      res.status(400).json({ error: 'Missing required fields' });
      return
    }
    const nowIso = new Date().toISOString();
    const job: Job = {
      id: uuidv4(),
      title: String(title),
      description: String(description),
category: String(category || ""),
      requiredSkills: Array && Array.isArray(requiredSkills)
        ? requiredSkills && requiredSkills.map(String)
<<<<<<< HEAD:pages/api/jobs.ts
<<<<<<< HEAD
        : [],
      budgetMinUsd: typeof budgetMinUsd === "number" ? budgetMinUsd : undefined,
      budgetMaxUsd: typeof budgetMaxUsd === "number" ? budgetMaxUsd : undefined,
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
      title,
      description,
      category,
      requiredSkills = [],
      budgetMinUsd,
      budgetMaxUsd,
      deliveryDeadlineIso,
clientEmail,
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
      requiredSkills: Array.isArray(requiredSkills)
        ? requiredSkills.map(String)
origin/cursor/automate-test-improve-and-merge-code-2533
        : []
      budgetMinUsd: typeof budgetMinUsd === "number" ? budgetMinUsd : undefined
      budgetMaxUsd: typeof budgetMaxUsd === "number" ? budgetMaxUsd : undefined
<<<<<<< HEAD:pages/api/jobs.ts
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
      deliveryDeadlineIso: deliveryDeadlineIso
=======
    const job: Job = {}
      deliveryDeadlineIso: deliveryDeadlineIso;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts
        ? String(deliveryDeadlineIso)
        : undefined;
      clientEmail: String(clientEmail)"
      status: "New"
      createdAtIso: nowIso;
      updatedAtIso: nowIso;
    }
    // Auto-assign category via AI (placeholder). In production, call OpenAI based on description/skills.


    if (!job && job.category) {}
      const skills = (job && job.requiredSkills || []).map((s) => s && s.toLowerCase());

      if (
        skills && skills.some(
          (s) =>
"
            s && s.includes("openai") ||"
            s && s.includes("langchain") ||"
            s && s.includes("rag"),




        )
      )"
        job && job.category = "LLM App";
      else if (
        skills && skills.some(
          (s) =>

"
            s && s.includes("aws") ||"
            s && s.includes("kubernetes") ||"
            s && s.includes("terraform"),




        )
<<<<<<< HEAD:pages_backup/api/jobs.ts
      )
<<<<<<< HEAD:pages/api/jobs.ts
<<<<<<< HEAD
        job && job.category = "Cloud";
=======
      )"
        job && job.category = "Cloud";"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts
      else job && job.category = "General";

    }
    const jobs = readJsonFile<Job[]>(FILE, []);
    jobs && jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs);
    res && res.status(201).json({ job });
    return;
  }
<<<<<<< HEAD:pages_backup/api/jobs.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts

    }
    const jobs = readJsonFile<Job[]>(FILE, []);
    jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs);




    res.status(201).json({ job });
<<<<<<< HEAD:pages_backup/api/jobs.ts
    return
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======

    res.status(201).json({ job });
    return


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
=======
    return;
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
;'
  res.setHeader('AllowGET, POST');'
  res.status(405).end('Method Not Allowed');
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });

<<<<<<< HEAD


<<<<<<< HEAD:pages_backup/api/jobs.ts
<<<<<<< HEAD:pages/api/jobs.ts
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
  }

>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
  res && res.setHeader("Allow", "GET, POST");
=======




  }
"
  res && res.setHeader("Allow", "GET, POST");"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts
  res && res.status(405).end("Method Not Allowed");



}

<<<<<<< HEAD

<<<<<<< HEAD:pages_backup/api/jobs.ts
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  }
  res && res.setHeader("Allow", "GET, POST");
  res && res.status(405).end("Method Not Allowed");
}
<<<<<<< HEAD:pages/api/jobs.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======





>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts
      client_email,
=======
=======



>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
      client_email
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    } = req.body || {}
    // Check condition;
if ( {) {}
  $2;
}"
      res.status (400).json ({ error: "Missing required fields" });
      return;
    }
    const now_iso = new Date ().toISOString ();
    const job: Job = {}
      id: uuidv4 (),
      title: String (title),
      description: String (description),"
      category: String (category || ""),
      required_skills: Array.is_array (required_skills);
        ? required_skills.map (String);
        : [],"
      budgetMinUsd: typeof budgetMinUsd === "number" ? budgetMinUsd : undefined,"
      budgetMaxUsd: typeof budgetMaxUsd === "number" ? budgetMaxUsd : undefined,
      deliveryDeadlineIso: deliveryDeadlineIso;
        ? String (deliveryDeadlineIso);
        : undefined,
      client_email: String (client_email),"
      status: "New",
      createdAtIso: now_iso,
      updatedAtIso: now_iso,
    }
    // Auto - assign category via AI (placeholder). In production, call OpenAI based on description / skills.;
    // Check condition;
if ( {) {}
  $2;
}
      const skills = (job.required_skills || []).map ((s) => s.toLowerCase ());
      // Check condition;
if (=>) {}
  $2;
}"
            s.includes ("openai") ||;"
            s.includes ("langchain") ||;"
            s.includes ("rag"),
        ));"
        job.category = "LLM App";
      else // Check condition;
if (=>) {}
  $2;
}"
            s.includes ("aws") ||;"
            s.includes ("kubernetes") ||;"
            s.includes ("terraform"),
        ));"
        job.category = "Cloud";"
      else job.category = "General";
    }
    const jobs = readJsonFile < Job[]>(FILE, []);
    jobs.unshift (job);
    writeJsonFile < Job[]>(FILE, jobs);
    res.status (201).json ({ job });
    return;
<<<<<<< HEAD:pages_backup/api/jobs.ts
<<<<<<< HEAD:pages/api/jobs.ts
<<<<<<< HEAD
<<<<<<< HEAD
  }
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  res.set_header ("Allow", "GET, POST");
  res.status (405).end ("Method Not Allowed");
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
=======
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
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
<<<<<<< HEAD:pages/api/jobs.ts
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======


>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
  } catch (error) {
    console.error("Error:", error);
=======
"
  res.set_header ("Allow", "GET, POST");"
  res.status (405).end ("Method Not Allowed");
}







  } catch (error) {"
    console.error("Error:", error);"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD:pages/api/jobs.ts
<<<<<<< HEAD
<<<<<<< HEAD
}

res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

"
  res.setHeader("Allow", "GET, POST");"
  res.status(405).end("Method Not Allowed");
}

}
<<<<<<< HEAD:pages_backup/api/jobs.ts
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
<<<<<<< HEAD
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======

  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}
}
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts




<<<<<<< HEAD:pages_backup/api/jobs.ts
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
        job.category = 'Cloud';
      else job.category = 'General';
    }
    const jobs = readJsonFile<Job[]>(FILE, []);
    jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs);
    res.status(201).json({ job });
return;
  }

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');

}
<<<<<<< HEAD:pages/api/jobs.ts
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/jobs.ts
=======
'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/jobs.ts
