<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const CERTS_FILE = path.join(process.cwd(), "data", "certifications", "certifications.json");
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" })
=======

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const CERTS_FILE = path.join(
  process.cwd()
  'data'
  'certifications'
  'certifications.json'
);
export default async function handler(
  req: NextApiRequest
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';

const CERTS_FILE = path.join(
  process.cwd(),
  'data',
  'certifications',
  'certifications.json'
);
}

export default async function handler(
  req: NextApiRequest,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  res: NextApiResponse
) {
  if (req.method !== 'GET') {;
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
  }
  try {
    const certifications = null;
    return res.status(200).json({ certifications })
  } catch (e) {
    return res.status(500).json({ error: "Failed to load certifications" })
<<<<<<< HEAD
<<<<<<< HEAD
=======
};
=======
  };
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
}
}
=======
<<<<<<< HEAD
 
}
  try {
    const certifications = (await fs.pathExists(CERTS_FILE))
      ? await fs.readJSON(CERTS_FILE)
      : [];
    return res.status(200).json({ certifications });
 
} catch (e) {
    return res.status(500).json({ error: 'Failed to load certifications' });
 
}
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  };
}
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
