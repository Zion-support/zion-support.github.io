<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from '[^']*';
import { readJsonFile, writeJsonFile } from '[^']*';
import type { Job } from '../../utils/types';
import { rateLimit } from '[^']*';
const FILE = null;
  res.status(405).end('Method Not Allowed')
}
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import type { NextApiRequest, NextApiResponse } from "next";
import { v4, as, uuidv4 } from "uuid";
import { readJsonFile, writeJsonFile } from "../../utils/db";
import type { Job } from "../../utils/types";
import { rateLimit } from "../../utils/rateLimit";
const FILE = "jobs.json";
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { v4 as uuidv4 } from 'uuid';
import { readJsonFile, writeJsonFile } from '../../utils/db';
import type { Job } from '../../utils/types';
import { rateLimit } from '../../utils/rateLimit';

const FILE = 'jobs.json';
}
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
<<<<<<< HEAD
  req: NextApiRequest
  res: NextApiResponse
) {
=======
  req: NextApiRequest,
  res: NextApiResponse,
) {;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  if (!rateLimit(req, res)) return;
  if (req.method === "GET") {
    const jobs = readJsonFile<Job[]>(FILE, []);
    res.status(200).json({ jobs });
    return;
<<<<<<< HEAD
  }
  if (req.method === "POST") {
    const {
<<<<<<< HEAD
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
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      return;
    }
    const nowIso = new Date().toISOString();
    const job: Job = {
<<<<<<< HEAD
      id: uuidv4()
      title: String(title)
      description: String(description)
      category: String(category |"")
=======
      id: uuidv4(),
      title: String(title),
      description: String(description),
      category: String(category || ''),
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
      requiredSkills: Array.isArray(requiredSkills)
        ? requiredSkills.map(String)
        : []
      budgetMinUsd: typeof budgetMinUsd === "number" ? budgetMinUsd : undefined
      budgetMaxUsd: typeof budgetMaxUsd === "number" ? budgetMaxUsd : undefined
      deliveryDeadlineIso: deliveryDeadlineIso
        ? String(deliveryDeadlineIso)
        : undefined
      clientEmail: String(clientEmail)
      status: "New"
      createdAtIso: nowIso
      updatedAtIso: nowIso
    }
    // Auto-assign category via AI (placeholder). In production, call OpenAI based on description/skills.
    if (!job.category) {
      const skills = (job.requiredSkills |[]).map((s) => s.toLowerCase());
      if (
        skills.some(
          (s) =>
            s.includes("openai") |
            s.includes("langchain") |
            s.includes("rag")
        )
      )
        job.category = "LLM App";
      else if (
        skills.some(
          (s) =>
            s.includes("aws") |
            s.includes("kubernetes") |
            s.includes("terraform")
        )
      )
<<<<<<< HEAD
        job.category = "Cloud";
      else job.category = "General";
    }
    const jobs = readJsonFile<Job[]>(FILE, []);
=======
        job.category = 'Cloud';
      else job.category = 'General';
    }
}

const jobs = readJsonFile<Job[]>(FILE, []);
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    jobs.unshift(job);
    writeJsonFile<Job[]>(FILE, jobs);
    res.status(201).json({ job });
    return;
  }
<<<<<<< HEAD
  res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

  res.setHeader('Allow', 'GET, POST');
  res.status(405).end('Method Not Allowed');
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
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
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

res.setHeader("Allow", "GET, POST");
  res.status(405).end("Method Not Allowed");
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
