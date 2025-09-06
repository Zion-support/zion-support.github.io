import type { NextApiRequest, NextApiResponse } from 'next';
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/kyc';
import type { KycProfile, KycRole } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
=======
const DATA_DIR = path.join(process.cwd(), 'datakyc');
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
<<<<<<< HEAD
    return JSON.parse(raw);
  } catch {
    return {};
  }

function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const {
=======
    return JSON.parse(raw)
  } catch {
    return {}
  }
}

function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { userId, role, fullLegalName, businessName, businessRegistrationNumber } = req.body as {
    userId?: string;
    role?: KycRole;
    fullLegalName?: string;
    businessName?: string;
    businessRegistrationNumber?: string
  };
  if (!userId || !role) return res.status(400).json({ error: 'Missing userId or role' });

  const db = load();
  const now = new Date().toISOString();
  const existing = db[userId];
  const profile: KycProfile = existing || {
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
    userId,
    role,
    fullLegalName,
    businessName,
    businessRegistrationNumber,
<<<<<<< HEAD
  } = req.body as {
    userId?: string;
    role?: KycRole;
    fullLegalName?: string;
    businessName?: string;
    businessRegistrationNumber?: string;
  };
  if (!userId || !role)
    return res.status(400).json({ error: 'Missing userId or role' });

  const db = load();
  const now = new Date().toISOString();
  const existing = db[userId];
  const profile: KycProfile =
    existing ||
    ({
      userId,
      role,
      fullLegalName,
      businessName,
      businessRegistrationNumber,
      documents: [],
      status: 'in_progress',
      amlStatus: 'unknown',
      createdAt: now,
      lastUpdatedAt: now,
      auditTrail: [{ at: now, by: userId, action: 'kyc_started' }],
    } as KycProfile);
=======
    documents: [], status: 'in_progress',
    amlStatus: 'unknown', createdAt: now,
    lastUpdatedAt: now,
    auditTrail: [{ at: now, by: userId, action: 'kyc_started' }]} as KycProfile;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88

  profile.role = role;
  if (fullLegalName) profile.fullLegalName = fullLegalName;
  if (businessName) profile.businessName = businessName;
<<<<<<< HEAD
  if (businessRegistrationNumber)
    profile.businessRegistrationNumber = businessRegistrationNumber;
=======
  if (businessRegistrationNumber) profile.businessRegistrationNumber = businessRegistrationNumber;
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
  profile.lastUpdatedAt = now;
  db[userId] = profile;
  save(db);

  res.status(200).json({
<<<<<<< HEAD
    ok: true,
    profile,
    requiredDocuments: getRequiredDocuments(role),
    optionalDocuments: getOptionalDocuments(role),
  });
=======
    ok: true, profile,
    requiredDocuments: getRequiredDocuments(role),
    optionalDocuments: getOptionalDocuments(role)})
}
>>>>>>> 617173e841967edd88c5e950f96f9a711d564d88
