import type { NextApiRequest, NextApiResponse } from 'next'
import { getRequiredDocuments, getOptionalDocuments } from '../../../utils/
import type { KycProfile, KycRole } from '../../../utils/