import type { NextApiRequest, NextApiResponse } from 'next'
import { getTrustWeights, setTrustWeights, getDefaultWeights } from '../../../utils/trust/