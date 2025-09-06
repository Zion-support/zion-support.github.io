import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD

const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
=======
const DATA_DIR = path.join(process.cwd(), 'datakyc');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
const DATA_DIR = path.join(process.cwd(), 'datakyc');
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
<<<<<<< HEAD
<<<<<<< HEAD
    return JSON.parse(raw);
=======
    return JSON.parse(raw)
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  } catch {
    return {}
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'GET')
    return res.status(405).json({ error: 'Method not allowed' });
=======
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
  const { userId } = req.query as { userId?: string };
  if (!userId) return res.status(400).json({ error: 'Missing userId' });
  const db = load();
  const profile = db[userId];
  if (!profile) return res.status(404).json({ error: 'Profile not found' });
  res.status(200).json({
<<<<<<< HEAD
    ok: true,
    profile,
    requiredDocuments: getRequiredDocuments(profile.role),
<<<<<<< HEAD
    optionalDocuments: getOptionalDocuments(profile.role),
  });
=======
    ok: true, profile,
    requiredDocuments: getRequiredDocuments(profile.role),
    optionalDocuments: getOptionalDocuments(profile.role)})
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
=======
    optionalDocuments: getOptionalDocuments(profile.role)
  })
}
>>>>>>> cursor/integrate-build-improve-and-re-verify-b76c
