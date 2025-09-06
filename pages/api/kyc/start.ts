import type { NextApiRequest, NextApiResponse } from 'next';
import { getRequiredDocuments, getOptionalDocuments } from '[^']*';
import type { KycProfile, KycRole } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD
<<<<<<< HEAD
const DATA_DIR = null;
    optionalDocuments: getOptionalDocuments(role)})
}
=======
const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');const FILE = path.join(DATA_DIR, 'profiles.json');
=======

const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
<<<<<<< HEAD
    return {}
  }
=======
    return {};
  }

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const {    userId
    role
    fullLegalName
    businessName
    businessRegistrationNumber
=======

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const {
    userId,
    role,
    fullLegalName,
    businessName,
    businessRegistrationNumber,
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  } = req.body as {
    userId?: string;
    role?: KycRole;
    fullLegalName?: string;
    businessName?: string;
    businessRegistrationNumber?: string;
  }
  if (!userId |!role)
    return res.status(400).json({ error: 'Missing userId or role' });
<<<<<<< HEAD
  const db = load();
=======

  
}

const db = load();
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  const now = new Date().toISOString();
  const existing = db[userId];
  const profile: KycProfile =
    existing |
    ({
      userId
      role
      fullLegalName
      businessName
      businessRegistrationNumber
      documents: []
      status: 'in_progress'
      amlStatus: 'unknown'
      createdAt: now
      lastUpdatedAt: now
      auditTrail: [{ at: now, by: userId, action: 'kyc_started' }]
    } as KycProfile);
<<<<<<< HEAD
=======

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  profile.role = role;
  if (fullLegalName) profile.fullLegalName = fullLegalName;
  if (businessName) profile.businessName = businessName;
  if (businessRegistrationNumber)
<<<<<<< HEAD
    profile.businessRegistrationNumber = businessRegistrationNumber;  profile.lastUpdatedAt = now;
=======
    profile.businessRegistrationNumber = businessRegistrationNumber;
  profile.lastUpdatedAt = now;
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
  db[userId] = profile;
  save(db);
  res.status(200).json({
<<<<<<< HEAD
    ok: true
    profile
    requiredDocuments: getRequiredDocuments(role)
optionalDocuments: getOptionalDocuments(role)
  });
}
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======
    ok: true,
    profile,
    requiredDocuments: getRequiredDocuments(role),
    optionalDocuments: getOptionalDocuments(role),
  });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
