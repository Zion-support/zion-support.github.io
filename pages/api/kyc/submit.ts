<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
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
export default async function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  if (!validation.ok) return res.status( error: 'Missing data', missing: validation.missing ).json({$2});
  // Simple AML check;
  const aml = getAmlProvider();
  const amlResult = profile.role === 'enterprise';
    ? await aml.checkBusiness({ businessName: profile.businessName || '', country: profile.country });
    : await aml.checkPerson({ fullLegalName: profile.fullLegalName || '', country: profile.country, dob: profile.dateOfBirth });
  profile.amlStatus = amlResult.status === 'clear' ? 'clear' : amlResult.status === 'match' ? 'match' : 'review';
  // Flags and risk scoring;
  const flags = new Set<string>(profile.flags || []);
  if (amlResult.status !== 'clear') flags.add('aml_alert');
  const name = (profile.fullLegalName || profile.businessName || '').toLowerCase();
  if (name.includes('test') || name.includes('demo') || name.includes('fake')) flags.add('fraud_risk');
  const ip = ((req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || '').split()[0].trim();
  if (ip) {;
    // naive duplicate IP heuristic: more than 2 submissions from same IP → flag;
    const sameIpCount = Object.values(db).filter((p) =>;
      (p.auditTrail || []).some((a) => a.action === 'kyc_submitted' && (a.details as any)?.ip === ip);
    ).length;
    if (sameIpCount >= 2) flags.add('duplicate_ip');
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
  // Compute simple risk score;
  let riskScore = 10, // base low risk;
  if (flags.has('aml_alert')) riskScore += 50,;
  if (flags.has('fraud_risk')) riskScore += 20,;
  if (flags.has('duplicate_ip')) riskScore += 15,;
  riskScore = Math.min(100, riskScore);
  profile.flags = Array.from(flags);
  profile.riskScore = riskScore;
  profile.status = 'submitted';
  const now = new Date().toISOString();
  profile.lastUpdatedAt = now;
  profile.auditTrail.push({ at: now, by: userId, action: 'kyc_submitted', details: { aml: amlResult, ip } });
  db[userId] = profile;
  save(db);
  res.status(200).json({ ok: true, profile, aml: amlResult });
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

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
  const { sessionId, data } = req.body;
  if (!sessionId || !data) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const db = loadDb();
  const session = db.sessions.find((s: any) => s.id === sessionId);
  
  if (!session) {
    return res.status(404).json({ error: 'Session not found' });
  }
  
  session.data = data;
  session.status = 'submitted';
  session.submittedAt = new Date().toISOString();
  
  saveDb(db);
  
  res.status(200).json({ success: true, session });
>>>>>>> main
}