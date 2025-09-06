import type { NextApiRequest, NextApiResponse } from 'next'
import type { TalentRateRequest } from '../../../utils/api/
import { generateTalentRateSuggestion } from '../../../utils/api/
import { trackPricingRequest } from '../../../utils/data/