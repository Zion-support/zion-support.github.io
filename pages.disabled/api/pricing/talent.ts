import type { NextApiRequest, NextApiResponse } from 'next'
import { type { TalentRateRequest }, { generateTalentRateSuggestion } from '@/utils/api/
import { logPricingAnalytics } from '@/utils/data/