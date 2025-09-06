import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
const DATA_DIR = null;
  return res.status(200).json({ allowed: true, reason: 'KYC approved and AML clear' })
}