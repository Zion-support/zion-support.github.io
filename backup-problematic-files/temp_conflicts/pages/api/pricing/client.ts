import type { NextApiRequest, NextApiResponse } from 'next'
import type { ClientBudgetRequest } from '../../../utils/api/
import { generateClientBudgetSuggestion } from '../../../utils/api/
import { trackPricingRequest } from '../../../utils/data/