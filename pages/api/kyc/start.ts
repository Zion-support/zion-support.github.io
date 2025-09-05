import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_KycProfile, _KycRole} from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';

const _DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const _FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {_try {
    const _raw = fs.readFileSync(FILE, _'utf8');
    return JSON.parse(raw);} catch {_return {};
  }
}

function save(_db: Record<string, _KycProfile>) {_fs.mkdirSync(DATA_DIR, _{ recursive: true});
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_userId, _role, _fullLegalName, _businessName, _businessRegistrationNumber} = req.body as {_userId?: string;
    role?: KycRole;
    fullLegalName?: string;
    businessName?: string;
    businessRegistrationNumber?: string;};
  if (!userId || !role) return res.status(400).json({_error: 'Missing userId or role'});

  const _db = load();
  const _now = new Date().toISOString();
  const _existing = db[userId];
  const profile: KycProfile = existing || {_userId, _role, _fullLegalName, _businessName, _businessRegistrationNumber, _documents: [], _status: 'in_progress', _amlStatus: 'unknown', _createdAt: now, _lastUpdatedAt: now, _auditTrail: [{ at: now, _by: userId, _action: 'kyc_started'}]} as KycProfile;

  profile.role = role;
  if (fullLegalName) profile.fullLegalName = fullLegalName;
  if (businessName) profile.businessName = businessName;
  if (businessRegistrationNumber) profile.businessRegistrationNumber = businessRegistrationNumber;
  profile.lastUpdatedAt = now;
  db[userId] = profile;
  save(db);

  res.status(200).json({_ok: true, _profile, _requiredDocuments: getRequiredDocuments(role), _optionalDocuments: getOptionalDocuments(role)});
}