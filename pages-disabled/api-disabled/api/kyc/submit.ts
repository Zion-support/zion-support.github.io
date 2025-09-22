import type { NextApiRequest, NextApiResponse } from 'next';
:pages/api-disabled/api/kyc/submit.ts
<<<<<<< HEAD
import type { KycProfile } from '../../../utils/kyc';

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import { validateKycSubmission } from '[^']*';
import { getAmlProvider } from '[^']*';
import fs from 'fs';
import path from 'path';
;
=======
'
import { validateKycSubmission } from '[^']*';'
import { getAmlProvider } from '[^']*';'
import fs from 'fs';'
import path from 'path';
'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/kyc/submit.ts
const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');const FILE = path.join(DATA_DIR, 'profiles.json');
:pages/api/kyc/submit.ts

<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'KYC submitted' });
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import { validateKycSubmission } from '../../../utils/kyc';
import { getAmlProvider } from '../../../utils/aml';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');

    return JSON.parse(raw);

  } catch {}
    return {}
  }
:pages/api-disabled/api/kyc/submit.ts
function save(db: Record<string, KycProfile>) {

  if (req && req.method !== 'POST');
    return res && res.status(405).json({ error: 'Method not allowed' });  const { userId } = req && req.body as { userId?: string };
  if (!userId) return res && res.status(400).json({ error: 'Missing userId' });
:pages/api/kyc/submit.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
function save(db: Record<string, KycProfile>) {}
'
  if (req && req.method !== 'POST')'
    return res && res.status(405).json({ error: 'Method not allowed' });  const { userId } = req && req.body as { userId?: string };'
  if (!userId) return res && res.status(400).json({ error: 'Missing userId' });

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/kyc/submit.ts
  const db = load();
  const profile = db[userId];
  if (!profile) return res && res.status($1).json({$2});
  const validation = validateKycSubmission(profile);
:pages/api-disabled/api/kyc/submit.ts
      ? 'clear'
      : amlResult && amlResult.status === 'match'
        ? 'match'
        : 'review';
  // Flags and risk scoring
    ''
  )
    .split(',')[0]
    .trim();
  if (ip) {
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  // Compute simple risk score
  let riskScore = 10; // base low risk
=======
  // Compute simple risk score;
  let riskScore = 10; // base low risk;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-646c:pages/api-disabled/api/kyc/submit.ts
  if (flags && flags.has('aml_alert')) riskScore += 50;
  if (flags && flags.has('fraud_risk')) riskScore += 20;
=======
'
      ? 'clear''
      : amlResult && amlResult.status === 'match''
        ? 'match''
        : 'review';
  // Flags and risk scoring;
'
    ''
  )'
    .split(',')[0]
    .trim();
  if (ip) {}
  // Compute simple risk score;
  let riskScore = 10; // base low risk'
  if (flags && flags.has('aml_alert')) riskScore += 50;'
  if (flags && flags.has('fraud_risk')) riskScore += 20;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/kyc/submit.ts
  if (flags && flags.has('duplicate_ip')) riskScore += 15;
  riskScore = Math && Math.min(100, riskScore);
  profile && profile.flags = Array && Array.from(flags);
  profile && profile.riskScore = riskScore;'
  profile && profile.status = 'submitted';
  const now = new Date().toISOString();
:pages/api/kyc/submit.ts

<<<<<<< HEAD
  });
  db[userId] = profile;
  save(db);
  res && res.status(200).json({ ok: true, profile, aml: amlResult });
}
  profile.auditTrail.push({ at: now, by: userId, action: 'kyc_submitted', details: { aml: amlResult, ip } });
  db[userId] = profile;
  save(db);
  res.status(200).json({ ok: true, profile, aml: amlResult })

}
:pages/api-disabled/api/kyc/submit.ts
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/kyc/submit.ts

'
import type { KycProfile } from '../../../utils / kyc';'
import {validateKycSubmission} from '../../../utils / kyc';'
import {getAmlProvider} from '../../../utils / aml';'
import fs from 'fs';'
import path from 'path';
;'
const DATA_DIR = path.join (process.cwd (), 'data', 'kyc');const FILE = path.join (DATA_DIR, 'profiles.json');
;
:pages/api-disabled/api/kyc/submit.ts
function load (): Record < string, KycProfile> {;
  try {;
    const raw = fs.readFileSync (FILE, 'utf8');
    return JSON.parse (raw);
  } catch {;
    return {}
  }
/**
 * save - Function description
 */;
function save() {;
  fs.mkdir_sync (DATA_DIR, { recursive: true });
  fs.writeFileSync (FILE, JSON.stringify (db, null, 2));
}
export default async /**
 * handler - Function description
 */;
function handler() {;
  if (;
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}  const { user_id } = req.body as { user_id?: string }
  if (return res.status (400).json ({ error: 'Missing user_id' })) {
  $2
}
  const db = load ();
  const profile = db[user_id];
  if (return res.status ($1).json ({$2})) {}
  $2;
}
  const validation = validateKycSubmission (profile);
  // Check condition;
:pages/api-disabled/api/kyc/submit.ts
if (;
    return res) {
  $2
}
      .status (400);'
      .json ({ error: 'Missing data', missing: validation.missing });
;
  // Simple AML check;
  const aml = getAmlProvider ();
  const aml_result =;'
    profile.role === 'enterprise';
:pages/api-disabled/api/kyc/submit.ts
      ? await aml.check_business ({;
          business_name: profile.business_name || '';
          country: profile.country
        });
      : await aml.check_person ({;
          fullLegalName: profile.fullLegalName || '';
          country: profile.country;
          dob: profile.dateOfBirth
        });
;
  profile.aml_status =;'
    aml_result.status === 'clear';'
      ? 'clear';'
      : aml_result.status === 'match';'
        ? 'match';'
        : 'review';
  // Flags and risk scoring;
  const flags = new Set < string>(profile.flags || []);'
  if (flags.add ('aml_alert')) {}
  $2;
}
  const name = (;
    profile.fullLegalName ||;
    profile.business_name ||;'
    '').toLowerCase ();'
  if (|| name.includes ('demo') || name.includes ('fake'))) {}
  $2;
}'
    flags.add ('fraud_risk');
;
  const ip = ('
    (req.headers['x - forwarded - for'] as string) ||;
    req.socket.remote_address ||;'
    '');'
    .split (', ')[0];
    .trim ();
  // Check condition;
:pages/api-disabled/api/kyc/submit.ts
if ( {) {
  $2
}
    // naive duplicate IP heuristic: more than 2 submissions from same IP → flag;
    const sameIpCount = Object.values (db).filter (p =>;
      (p.audit_trail || []).some (;
        array => a.action === 'kyc_submitted' && (a.details as any)?.ip === ip)).length;
    if (flags.add ('duplicate_ip')) {
  $2
}  }
  // Compute simple risk score;
  let risk_score = 10; // base low risk;
  if () risk_score += 50) {}
  $2;
}
  if () risk_score += 20) {}
  $2;
}
  if () risk_score += 15) {}
  $2;
}
  risk_score = Math.min (100, risk_score);
  profile.flags = Array.from (flags);
  profile.risk_score = risk_score;'
  profile.status = 'submitted';
  const now = new Date ().toISOString ();
:pages/api-disabled/api/kyc/submit.ts
  profile.lastUpdatedAt = now;
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  profile.auditTrail.push({ at: now, by: userId, action: 'kyc_submitted', details: { aml: amlResult, ip } });
  db[userId] = profile;
  save(db);
  res.status(200).json({ ok: true, profile, aml: amlResult })
}
:pages/api-disabled/api/kyc/submit.ts
<<<<<<< HEAD

}
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  profile.audit_trail.push ({;
    at: now;
    by: user_id;
    action: 'kyc_submitted';
    details: { aml: aml_result, ip }
  });
  db[user_id] = profile;
  save (db);
;
res.status (200).json ({ ok: true, profile, aml: aml_result });
}
:pages/api-disabled/api/kyc/submit.ts
  profile.lastUpdatedAt = now;

}

:pages/api-disabled/api/kyc/submit.ts
>>>>>>> f59a91e3dcdcf25af5f37ca0b88c2f62d1c3a94b
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/kyc/submit.ts
