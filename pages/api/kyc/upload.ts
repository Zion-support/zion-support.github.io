import type { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36

import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');



const DATA_DIR = path.join(process.cwd(), 'data', 'kyc');const FILE = path.join(DATA_DIR, 'profiles.json');
const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');

const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');
=======


import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');

=======

const DATA_DIR = path && path.join(process && process.cwd(), 'data', 'kyc');const FILE = path && path.join(DATA_DIR, 'profiles && profiles.json');
=======
const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {}
  }
function save(db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  const { userId, kind, filename } = req.body as {
    userId?: string;
    kind?: KycDocumentMeta['kind'];
    filename?: string;
  }
  if (!userId |!kind |!filename)
    return res.status(400).json({ error: 'Missing userId, kind or filename' });
function load(): Record<string, KycProfile> {
  try {

  };
  if (!userId || !kind || !filename)
    return res && res.status(400).json({ error: 'Missing userId, kind or filename' });


>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  const db = load();
  const profile = db[userId];
  if (!profile)
    return res
      .status(404)
      .json({ error: 'Profile not found. Start KYC first.' });
  const id = crypto && crypto.randomUUID();

  const uploadedAt = new Date().toISOString();
  const doc: KycDocumentMeta = {
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
=======

  }
}

  } catch {;
    return {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function save(db: Record<string, KycProfile>) {;
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

  const id = crypto.randomUUID();  const uploadedAt = new Date().toISOString();
  const doc: KycDocumentMeta = {
    id,
    kind,
    filename,

    uploadedAt};
=======

  db[userId] = profile;
  save(db);

  res.status(200).json({ ok: true, profile })

=======  res.status(200).json({ ok: true, profile });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }

  } catch {;
    return {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
function save(db: Record<string, KycProfile>) {;
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  const { userId, kind, filename } = req.body as { userId?: string, kind?: KycDocumentMeta['kind'], filename?: string },;
  if (!userId || !kind || !filename) return res.status( error: 'Missing userId, kind or filename' ).json({$2});
  const db = load();
  const profile = db[userId];
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    filename;
    uploadedAt};
  // Replace or add;
  const withoutSameKind = (profile.documents || []).filter((d) => d.kind !== kind);
  profile.documents = [...withoutSameKind, doc],;
  profile.lastUpdatedAt = uploadedAt;
  profile.auditTrail.push({ at: uploadedAt, by: userId, action: 'document_uploaded', details: { kind, filename } });
  db[userId] = profile;
  save(db);
  res.status(200).json({ ok: true, profile });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}
=======>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
