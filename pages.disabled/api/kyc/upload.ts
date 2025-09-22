import type { NextApiRequest, NextApiResponse } from 'next';

import type { KycDocumentMeta, KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';


