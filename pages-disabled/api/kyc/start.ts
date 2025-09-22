import type { NextApiRequest, NextApiResponse } from 'next';
import { getRequiredDocuments, getOptionalDocuments } from '[^']*';
import {getRequiredDocuments, getOptionalDocuments} from '../../../utils/kyc';
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
import type { KycProfile, KycRole } from '../../../utils/kyc';
import fs from 'fs';
=======

'
import {getRequiredDocuments, getOptionalDocuments} from '../../../utils/kyc';

'
import type { KycProfile, KycRole } from '../../../utils/kyc';'
import fs from 'fs';'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
import path from 'path';
<<<<<<< HEAD
const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');const FILE = path.join(DATA_DIR, 'profiles.json');
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);

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
    userId,
import {getRequiredDocuments, getOptionalDocuments} from '../../../utils / kyc';
import type { KycProfile, KycRole } from '../../../utils / kyc';
import fs from 'fs';
import path from 'path';
;
const DATA_DIR = path.join (process.cwd (), 'data', 'kyc');const FILE = path.join (DATA_DIR, 'profiles.json');
;
function load (): Record < string, KycProfile> {
  try {
    const raw = fs.readFileSync (FILE, 'utf8');
    return JSON.parse (raw);
  } catch {
    return {}
  }
/**
 * save - Function description
 */
function save() {
  fs.mkdir_sync (DATA_DIR, { recursive: true });
  fs.writeFileSync (FILE, JSON.stringify (db, null, 2));
}
<<<<<<< HEAD
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const {    user_id,
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
const {    userId
    role
    fullLegalName
    businessName
    businessRegistrationNumber
  } = req.body as {
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    role,
    fullLegalName,
    business_name,
    businessRegistrationNumber,

=======
  const {
    userId,
    role,
    fullLegalName,
    businessName,
    businessRegistrationNumber,
} = req.body as {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
    userId?: string;
=======

  } = req.body as {}
    user_id?: string;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    role?: KycRole;
    fullLegalName?: string;
    business_name?: string;
    businessRegistrationNumber?: string;

  const db = load();
  const now = new Date().toISOString();
  const existing = db[userId];
  const profile: KycProfile =
    existing |
    ({}
      userId;
      role;
      fullLegalName;
      businessName;
      businessRegistrationNumber;
      documents: []'
      status: 'in_progress''
      amlStatus: 'unknown'
      createdAt: now;
      lastUpdatedAt: now'
      auditTrail: [{ at: now, by: userId, action: 'kyc_started' }]
    } as KycProfile);
profile && profile.role = role;
  if (fullLegalName) profile && profile.fullLegalName = fullLegalName;
  if (businessName) profile && profile.businessName = businessName;
  if (businessRegistrationNumber)
    profile && profile.businessRegistrationNumber = businessRegistrationNumber;  profile && profile.lastUpdatedAt = now;
  db[userId] = profile;
  save(db);

}
  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }

  profile.role = role;
  if (fullLegalName) profile.fullLegalName = fullLegalName;
  if (businessName) profile.businessName = businessName;
  if (businessRegistrationNumber) profile.businessRegistrationNumber = businessRegistrationNumber;
  profile.lastUpdatedAt = now;
  db[userId] = profile;
  save(db);

res.status(200).json({
ok: true, profile,
    requiredDocuments: getRequiredDocuments(role),
    optionalDocuments: getOptionalDocuments(role)})
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
}

  }
<<<<<<< HEAD
}
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

}
  const db = load ();
  const now = new Date ().toISOString ();
  const existing = db[user_id];
  const profile: KycProfile =;
    existing ||;
    ({}
      user_id,
      role,
      fullLegalName,
      business_name,
      businessRegistrationNumber,
      documents: [],'
      status: 'in_progress','
      aml_status: 'unknown',
      created_at: now,
      lastUpdatedAt: now,'
      audit_trail: [{ at: now, by: user_id, action: 'kyc_started' }],
    } as KycProfile);
  profile.role = role;
  // Check condition;
if (profile.fullLegalName = fullLegalName) {}
  $2;
}
  // Check condition;
if (profile.business_name = business_name) {}
  $2;
}
  // Check condition;
if (
    profile.businessRegistrationNumber = businessRegistrationNumber) {}
  $2;
}  profile.lastUpdatedAt = now;
  db[user_id] = profile;
  save (db);
res.status (200).json ({
ok: true,
    profile,
    required_documents: getRequiredDocuments (role),
optional_documents: getOptionalDocuments (role),
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
  });

}
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
