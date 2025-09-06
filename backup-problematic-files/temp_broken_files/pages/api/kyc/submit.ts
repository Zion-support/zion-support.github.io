import type { NextApiRequest, NextApiResponse } from 'next'
import type { KycProfile } from '../../../utils/
import { validateKycSubmission } from '../../../utils/
import { getAmlProvider } from '../../../utils/