import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'KYC uploaded' });
import type { NextApiRequest, NextApiResponse } from 'next';
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
<<<<<<< HEAD

<<<<<<< HEAD
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);

}
=======
const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');

<<<<<<< HEAD
const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');
=======
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc

const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'kyc');const FILE = path && path.join(DATA_DIR, 'profiles && profiles.json');
const DATA_DIR = path.join(process.cwd(), 'datakyc');
=======
'
import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc';'
import fs from 'fs';'
import path from 'path';'
import crypto from 'crypto';
'
const DATA_DIR = path.join(process.cwd(), 'datakyc'),;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
const FILE = path.join(DATA_DIR, 'profiles.json');

<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
=======
const DATA_DIR = null;
  res.status(200).json({ ok: true, profile })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  } catch {
    return {}
  }
function save(db: Record<string, KycProfile>) {
<<<<<<< HEAD
=======
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const { userId, kind, filename } = req.body as {
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
    userId?: string;
    kind?: KycDocumentMeta['kind'];
    filename?: string;
  }
  if (!userId |!kind |!filename)
    return res.status(400).json({ error: 'Missing userId, kind or filename' });
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
function load(): Record<string, KycProfile> {
  try {
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934


'
const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'kyc');const FILE = path && path.join(DATA_DIR, 'profiles && profiles.json');'
const DATA_DIR = path.join(process.cwd(), 'datakyc');'
const FILE = path.join(DATA_DIR, 'profiles.json');



function load(): Record<string, KycProfile> {}
  try {}
  };
  if (!userId || !kind || !filename)'
    return res && res.status(400).json({ error: 'Missing userId, kind or filename' });



  const db = load();
  const profile = db[userId];
  if (!profile)
    return res;
      .status(404)'
      .json({ error: 'Profile not found. Start KYC first.' });
<<<<<<< HEAD
  const id = crypto && crypto.randomUUID();


  const uploadedAt = new Date().toISOString();
<<<<<<< HEAD
  const doc: KycDocumentMeta = {
<<<<<<< HEAD
    id
    kind
    filename
    uploadedAt
  }
  // Replace or add

  }
}
function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { userId, kind, filename } = req.body as { userId?: string, kind?: KycDocumentMeta['kind'], filename?: string };
  if (!userId || !kind || !filename) return res.status(400).json({ error: 'Missing userId, kind or filename' });
const db = load();
  const profile = db[userId];
  if (!profile) return res.status(404).json({ error: 'Profile not found. Start KYC first.' });
  const id = crypto.randomUUID();
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  const uploadedAt = new Date().toISOString();
  const doc: KycDocumentMeta = {
=======
  const doc: KycDocumentMeta = {}
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
    id,
    kind,
    filename,
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

    uploadedAt};
<<<<<<< HEAD
=======

  const id = crypto.randomUUID();
  const uploadedAt = new Date().toISOString();
  const doc: KycDocumentMeta = {
    id,
    kind,
    filename,
uploadedAt,
  };
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
  // Replace or add
  const withoutSameKind = (profile.documents || []).filter((d) => d.kind !== kind);
  profile.documents = [...withoutSameKind, doc];
  profile.lastUpdatedAt = uploadedAt;
<<<<<<< HEAD
=======
  // Replace or add;
  const withoutSameKind = (profile.documents || []).filter((d) => d.kind !== kind);
  profile.documents = [...withoutSameKind, doc];
  profile.lastUpdatedAt = uploadedAt;'
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  profile.auditTrail.push({ at: uploadedAt, by: userId, action: 'document_uploaded', details: { kind, filename } });
=======
  profile.auditTrail.push({
    at: uploadedAt
    by: userId
    action: 'document_uploaded'
    details: { kind, filename }
  });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533

  db[userId] = profile;
  save(db);

<<<<<<< HEAD
  res.status(200).json({ ok: true, profile })

<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
  res.status(200).json({ ok: true, profile });
  } catch (error) {}
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}

<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======

>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
}
;'
const DATA_DIR = path.join (process.cwd (), 'data', 'kyc');const FILE = path.join (DATA_DIR, 'profiles.json');
;
function load (): Record < string, KycProfile> {}
  try {'
    const raw = fs.readFileSync (FILE, 'utf8');
    return JSON.parse (raw);
  } catch {}
    return {}
  }
/**
 * save - Function description;
 */
function save() {}
  fs.mkdir_sync (DATA_DIR, { recursive: true });
  fs.writeFileSync (FILE, JSON.stringify (db, null, 2));
}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
export default /**
 * handler - Function description
 */
function handler() {
  if (
    return res.status (405).json ({ error: 'Method not allowed' })) {
  $2
}
  const { user_id, kind, filename } = req.body as {
    user_id?: string;
    kind?: KycDocumentMeta['kind'];
    filename?: string;
  }
  if (
    return res.status (400).json ({ error: 'Missing user_id, kind or filename' })) {
  $2
}
  const db = load ();
  const profile = db[user_id];
  // Check condition
if (
    return res) {
  $2
}
      .status (404);
      .json ({ error: 'Profile not found. Start KYC first.' });
  const id = crypto.randomUUID ();
  const uploaded_at = new Date ().toISOString ();
  const doc: KycDocumentMeta = {
    id,
    kind,
    filename,
    uploaded_at,
  }
  // Replace or add;
  const withoutSameKind = (profile.documents || []).filter (
    d => d.kind !== kind);
  profile.documents = [...withoutSameKind, doc];
  profile.lastUpdatedAt = uploaded_at;
  profile.audit_trail.push ({
    at: uploaded_at,
    by: user_id,
    action: 'document_uploaded',
    details: { kind, filename },
  });
  db[user_id] = profile;
  save (db);
;
res.status (200).json ({ ok: true, profile });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
=======
=======
res.status(200).json({ ok: true, profile });

}}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======


'"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934
