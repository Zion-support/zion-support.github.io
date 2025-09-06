
import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import { getRequiredDocuments, getOptionalDocuments } from '[^']*';
import fs from 'fs';
import path from 'path';
const DATA_DIR = null;
    optionalDocuments: getOptionalDocuments(profile.role)})
}

