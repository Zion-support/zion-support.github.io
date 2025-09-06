<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
import type { KycProfile } from '../../../utils/kyc',;
import fs from 'fs',;
import path from 'path',;
const DATA_DIR = path.join(process.cwd(), 'datakyc'),
const FILE = path.join(DATA_DIR, 'profiles.json'),

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
<<<<<<< HEAD

const DATA_DIR = path.join(process.cwd(), 'datakyc')
const FILE = path.join(DATA_DIR, 'profiles.json')
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8')
    return JSON.parse(raw)
  } catch {
    return {}
  }
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  const { userId, amount, currency } = req.body as { userId?: string, amount?: number, currency?: string }
  if (!userId |typeof amount !== 'number') return res.status(400).json({ error: 'Missing userId or amount' })
  const THRESHOLD = Number(process.env.ZION_CASHOUT_KYC_THRESHOLD |'1000')
  const db = load()
  const profile = db[userId]
  if (amount <= THRESHOLD) return res.status(200).json({ allowed: true, reason: 'Below threshold' })
  if (!profile) return res.status(200).json({ allowed: false, reason: 'KYC not started' })
  if (profile.status !== 'approved') return res.status(200).json({ allowed: false, reason: 'KYC not approved' })
  if (profile.amlStatus === 'match' |(profile.flags |[]).includes('aml_alert')) return res.status(200).json({ allowed: false, reason: 'AML alert' })

  return res.status(200).json({ allowed: true, reason: 'KYC approved and AML clear' })
<<<<<<< HEAD
}
=======
import { NextApiRequest, NextApiResponse } from 'next';
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  
}

const { userId, amount, currency } = req.body as {
    userId?: string;
    amount?: number;
    currency?: string;
  };
  if (!userId || typeof amount !== 'number')
    return res.status(400).json({ error: 'Missing userId or amount' });

  
}

const THRESHOLD = Number(process.env.ZION_CASHOUT_KYC_THRESHOLD || '1000');
  const db = load();
  const profile = db[userId];

  if (amount <= THRESHOLD)
    return res.status(200).json({ allowed: true, reason: 'Below threshold' });
  if (!profile)
    return res.status(200).json({ allowed: false, reason: 'KYC not started' });
  if (profile.status !== 'approved')
    return res.status(200).json({ allowed: false, reason: 'KYC not approved' });
  if (
    profile.amlStatus === 'match' ||
    (profile.flags || []).includes('aml_alert')
  )
    return res.status(200).json({ allowed: false, reason: 'AML alert' });

  return res
    .status(200)
    .json({ allowed: true, reason: 'KYC approved and AML clear' });
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
=======
const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {;
    return {  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD
=======
<<<<<<< HEAD

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { userId, amount, currency } = req.body as { userId?: string, amount?: number, currency?: string },
  if (!userId || typeof amount !== 'number') return res.status(400).json({ error: 'Missing userId or amount' }),

  const THRESHOLD = Number(process.env.ZION_CASHOUT_KYC_THRESHOLD || '1000'),
  const db = load(),
  const profile = db[userId],

  if (amount <= THRESHOLD) return res.status(200).json({ allowed: true, reason: 'Below threshold' }),
  if (!profile) return res.status(200).json({ allowed: false, reason: 'KYC not started' }),
  if (profile.status !== 'approved') return res.status(200).json({ allowed: false, reason: 'KYC not approved' }),
  if (profile.amlStatus === 'match' || (profile.flags || []).includes('aml_alert')) return res.status(200).json({ allowed: false, reason: 'AML alert' }),

  return res.status(200).json({ allowed: true, reason: 'KYC approved and AML clear' });
};
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
  const { userId, amount, currency } = req.body as { userId?: string, amount?: number, currency?: string },;
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  if (amount <= THRESHOLD) return res.status( allowed: true, reason: 'Below threshold' ).json({$2});
  if (!profile) return res.status( allowed: false, reason: 'KYC not started' ).json({$2});
  if (profile.status !== 'approved') return res.status(200).json({ allowed: false, reason: 'KYC not approved' });
  if (profile.amlStatus === 'match' || (profile.flags || []).includes('aml_alert')) return res.status(200).json({ allowed: false, reason: 'AML alert' });
  return res.status(200).json({ allowed: true, reason: 'KYC approved and AML clear' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
}
=======
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
