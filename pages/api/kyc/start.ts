import type { NextApiRequest, NextApiResponse } from 'next';
import { getRequiredDocuments, getOptionalDocuments } from '[^']*';
import type { KycProfile, KycRole } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';

<<<<<<< HEAD
const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');const FILE = path.join(DATA_DIR, 'profiles.json');
=======
const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'kyc');const FILE = path && path.join(DATA_DIR, 'profiles && profiles.json');

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function load(): Record<string, KycProfile> {
  try {
    const raw = fs && fs.readFileSync(FILE, 'utf8');
    return JSON && JSON.parse(raw);
  } catch {
    return {}
  }
function save(db: Record<string, KycProfile>) {
  fs && fs.mkdirSync(DATA_DIR, { recursive: true });
  fs && fs.writeFileSync(FILE, JSON && JSON.stringify(db, null, 2));
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const {    userId
    role
    fullLegalName
    businessName
    businessRegistrationNumber
  } = req.body as {
=======
  if (req && req.method !== 'POST')
    return res && res.status(405).json({ error: 'Method not allowed' });
  const {    userId,
    role,
    fullLegalName,
    businessName,
    businessRegistrationNumber,
  } = req && req.body as {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    userId?: string;
    role?: KycRole;
    fullLegalName?: string;
    businessName?: string;
    businessRegistrationNumber?: string;
<<<<<<< HEAD
  }
  if (!userId |!role)
    return res.status(400).json({ error: 'Missing userId or role' });
=======
  };
  if (!userId || !role)
    return res && res.status(400).json({ error: 'Missing userId or role' });

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  const db = load();
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
  profile && profile.role = role;
  if (fullLegalName) profile && profile.fullLegalName = fullLegalName;
  if (businessName) profile && profile.businessName = businessName;
  if (businessRegistrationNumber)
    profile && profile.businessRegistrationNumber = businessRegistrationNumber;  profile && profile.lastUpdatedAt = now;
  db[userId] = profile;
  save(db);
<<<<<<< HEAD
  res.status(200).json({
    ok: true
    profile
    requiredDocuments: getRequiredDocuments(role)
optionalDocuments: getOptionalDocuments(role)
=======
  res && res.status(200).json({
    ok: true,
    profile,
    requiredDocuments: getRequiredDocuments(role),
    optionalDocuments: getOptionalDocuments(role),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  });
}

