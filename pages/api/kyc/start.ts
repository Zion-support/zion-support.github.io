<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'KYC started' });
import type { NextApiRequest, NextApiResponse } from 'next';
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/kyc';
import type { KycProfile, KycRole } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
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
  const { userId, role, fullLegalName, businessName, businessRegistrationNumber } = req.body as {;
    userId?: string;
    role?: KycRole,;
    fullLegalName?: string,;
    businessName?: string,;
    businessRegistrationNumber?: string;
  },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
    fullLegalName,;
    businessName,;
    businessRegistrationNumber,;
    documents: [],;
    status: 'in_progress',;
    amlStatus: 'unknown',;
    createdAt: now,;
    lastUpdatedAt: now,;
    auditTrail: [{ at: now, by: userId, action: 'kyc_started' }]} as KycProfile,;
  profile.role = role;
  if (fullLegalName) profile.fullLegalName = fullLegalName;
  if (businessName) profile.businessName = businessName;
  if (businessRegistrationNumber) profile.businessRegistrationNumber = businessRegistrationNumber;
  profile.lastUpdatedAt = now;
  db[userId] = profile,;
  save(db);
  res.status(200).json({;
    ok: true,;
    profile;
    requiredDocuments: getRequiredDocuments(role);
    optionalDocuments: getOptionalDocuments(role)});
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
=======
import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

const FILE = path.join(process.cwd(), 'data', 'kyc.json');

function loadDb() {
  try {
    return JSON.parse(fs.readFileSync(FILE, 'utf8'));
  } catch {
    return { sessions: [] };
  }
}

function saveDb(db: any) {
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
  const { userId, type } = req.body;
  if (!userId || !type) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const db = loadDb();
  const session = {
    id: Date.now().toString(),
    userId,
    type,
    status: 'pending',
    createdAt: new Date().toISOString(),
  };
  
  db.sessions.push(session);
  saveDb(db);
  
  res.status(200).json(session);
>>>>>>> main
}