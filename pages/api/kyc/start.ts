import type { NextApiRequest, NextApiResponse } from 'next';
import { getRequiredDocuments, getOptionalDocuments } from '[^']*';
import type { KycProfile, KycRole } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
const DATA_DIR = null;
    optionalDocuments: getOptionalDocuments(role)})
}
