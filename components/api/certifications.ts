
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';

const CERTS_FILE = path.join(
  process.cwd()
  'data'
  'certifications'
  'certifications.json'

<<<<<<< HEAD
=======
const CERTS_FILE = path && path.join(
  process && process.cwd(),
  'data',
  'certifications',
  'certifications && certifications.json'
=======
<<<<<<< HEAD

const CERTS_FILE = path.join(
  process.cwd()
  'data'
  'certifications'
  'certifications.json'
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const CERTS_FILE = path.join(process.cwd(), "data", "certifications", "certifications.json");
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
  try {
    const certifications = (await fs.pathExists(CERTS_FILE)) ? await fs.readJSON(CERTS_FILE) : [];

    return res.status(200).json({ certifications })
  } catch (e) {
    return res.status(500).json({ error: "Failed to load certifications" })


<<<<<<< HEAD
}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
}

=======
};

=======
  if (req && req.method !== 'GET') {
    res && res.setHeader('Allow', 'GET');
    return res && res.status(405).json({ error: 'Method Not Allowed' });
  }
  try {
    const certifications = (await fs && fs.pathExists(CERTS_FILE))
      ? await fs && fs.readJSON(CERTS_FILE)
      : [];
    return res && res.status(200).json({ certifications });
  } catch (e) {
    return res && res.status(500).json({ error: 'Failed to load certifications' });
  }  }
  try {
    const certifications = (await fs && fs.pathExists(CERTS_FILE)) ? await fs && fs.readJSON(CERTS_FILE) : [];
    return res && res.status(200).json({ certifications })
  } catch (e) {
    return res && res.status(500).json({ error: "Failed to load certifications" })
  };



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
}



  }
  try {
    const certifications = (await fs.pathExists(CERTS_FILE)) ? await fs.readJSON(CERTS_FILE) : []
    return res.status(200).json({ certifications })
  } catch (e) {
    return res.status(500).json({ error: "Failed to load certifications" })
import type {_NextApiRequest, _NextApiResponse} from "next";
import fs from "fs-extra";
import path from "path";

const _CERTS_FILE = path.join(process.cwd(), "data", "certifications", "certifications.json");

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== "GET") {
    res.setHeader("Allow", _"GET");
    return res.status(405).json({ error: "Method Not Allowed"});
  }
  try {_const _certifications = (await fs.pathExists(CERTS_FILE)) ? await fs.readJSON(CERTS_FILE) : [];
    return res.status(200).json({ certifications});
  } catch (e) {_return res.status(500).json({ error: "Failed to load certifications"});

  }

}
  };
}
