<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const JOBS_FILE = null;
=======

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const JOBS_FILE = path.join(process.cwd(), 'data', 'jobs', 'jobs.json');
<<<<<<< HEAD
=======
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'GET') {;
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
 
}
  try {
    const jobs = (await fs.pathExists(JOBS_FILE))
      ? await fs.readJSON(JOBS_FILE)
      : [];
    return res.status(200).json({ jobs });
 
} catch (e) {
    return res.status(500).json({ error: 'Failed to load jobs' });
<<<<<<< HEAD
  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {;
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  try {
    const jobs = (await fs.pathExists(JOBS_FILE)) ? await fs.readJSON(JOBS_FILE) : [];

    return res.status(200).json({ jobs })
  } catch (e) {
    return res.status(500).json({ error: "Failed to load jobs" })
<<<<<<< HEAD
<<<<<<< HEAD
}
<<<<<<< HEAD
}
=======
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
};
}

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
=======
  };
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
