import type { NextApiRequest, NextApiResponse } from 'next';


import {getRequiredDocuments, getOptionalDocuments} from '../../../utils/kyc';


import type { KycProfile, KycRole } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';





    role,
    fullLegalName,
    business_name,
    businessRegistrationNumber,



    userId?: string;

  profile.role = role;
  if (fullLegalName) profile.fullLegalName = fullLegalName;
  if (businessName) profile.businessName = businessName;
  if (businessRegistrationNumber) profile.businessRegistrationNumber = businessRegistrationNumber;
  profile.lastUpdatedAt = now;
  db[userId] = profile;
  save(db);

  res.status(200).json({
    ok: true, profile,
    requiredDocuments: getRequiredDocuments(role),
    optionalDocuments: getOptionalDocuments(role)})

}

  }
  if (
    return res.status (400).json ({ error: 'Missing user_id or role' })) {
  $2


