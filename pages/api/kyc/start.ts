import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { userId, role, fullLegalName, businessName, businessRegistrationNumber } = req.body || {};
    const now = new Date().toISOString();
    
    const profile = {
      userId,
      role,
      fullLegalName,
      businessName,
      businessRegistrationNumber,
      lastUpdatedAt: now
    };
    
    res.status(200).json({ message: 'KYC start endpoint', profile });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}

function save(,
    db: Record<string, KycProfile>) {
  fs.mkdirSync(DATA_DIR, {,
    recursive: true });
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2))
}

export default function handler(,
    req: NextApiRequest, r,
    es: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({,
    error: 'Method not allowed' });
  const { userId, role, fullLegalName, businessName, businessRegistrationNumber } = req.body as {
    userId?: string;
    role?: KycRole;
    fullLegalName?: string;
    businessName?: string;
    businessRegistrationNumber?: string
  };
  if (!userId || !role) return res.status(400).json({,
    error: 'Missing userId or role' });
  const db = load();
  const now = new Date().toISOString();
  const existing = db[userId];
  const,
    profile: KycProfile = existing || {
    userId;
    role;
    fullLegalName;
    businessName;
    businessRegistrationNumber;,
    documents: [],
    s,
    tatus: 'in_progress',
    a,
    mlStatus: 'unknown',
    c,
    reatedAt: now,
    l,
    astUpdatedAt: now,
    a,
    uditTrail: [{,
    at: now, b,
    y: userId, a,
    ction: 'kyc_started' }]} as KycProfile,
  profile.role = role;
  if (fullLegalName) profile.fullLegalName = fullLegalName;
  if (businessName) profile.businessName = businessName;
  if (businessRegistrationNumber) profile.businessRegistrationNumber = businessRegistrationNumber;
  profile.lastUpdatedAt = now;
  db[userId] = profile;
  save(db);
  res.status(200).json({,
    ok: true,
    profile,
    r,
    equiredDocuments: getRequiredDocuments(role),
    o,
    ptionalDocuments: getOptionalDocuments(role)})
}