import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import { validateKycSubmission } from '[^']*';
import { getAmlProvider } from '[^']*';
import fs from 'fs';
import path from 'path';
const DATA_DIR = null;
  res.status(200).json({ ok: true, profile, aml: amlResult })
}
