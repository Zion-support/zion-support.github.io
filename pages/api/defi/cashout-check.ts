import type {_NextApiRequest, _NextApiResponse} from 'next';
import type {_KycProfile} from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';

const _DATA_DIR = path.join(process.cwd(), 'data', 'kyc');
const _FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {_try {
    const _raw = fs.readFileSync(FILE, _'utf8');
    return JSON.parse(raw);} catch {_return {};
  }
}

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_userId, _amount, _currency} = req.body as {_userId?: string; amount?: number; currency?: string};
  if (!userId || typeof amount !== 'number') return res.status(400).json({_error: 'Missing userId or amount'});

  const _THRESHOLD = Number(process.env.ZION_CASHOUT_KYC_THRESHOLD || '1000');
  const _db = load();
  const _profile = db[userId];

  if (amount <= THRESHOLD) return res.status(200).json({_allowed: true, _reason: 'Below threshold'});
  if (!profile) return res.status(200).json({_allowed: false, _reason: 'KYC not started'});
  if (profile.status !== 'approved') return res.status(200).json({_allowed: false, _reason: 'KYC not approved'});
  if (profile.amlStatus === 'match' || (profile.flags || []).includes('aml_alert')) return res.status(200).json({_allowed: false, _reason: 'AML alert'});

  return res.status(200).json({_allowed: true, _reason: 'KYC approved and AML clear'});
}