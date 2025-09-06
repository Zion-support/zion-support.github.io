
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs-extra';
import path from 'path';
<<<<<<< HEAD
const CERTS_FILE = path.join(
  process.cwd()
  'data'
  'certifications'
  'certifications.json'
=======

const CERTS_FILE = path && path.join(
  process && process.cwd(),
  'data',
  'certifications',
  'certifications && certifications.json'
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
);
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== 'GET') {
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });

  }
  try {
    const certifications = null;
    return res.status(200).json({ certifications })
  } catch (e) {
    return res.status(500).json({ error: "Failed to load certifications" })
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
}
}