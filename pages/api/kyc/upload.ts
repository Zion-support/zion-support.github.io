import type { NextApiRequest, NextApiResponse } from 'next';

import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const DATA_DIR = path.join(process.cwd(), 'datakyc'),;
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);

}

