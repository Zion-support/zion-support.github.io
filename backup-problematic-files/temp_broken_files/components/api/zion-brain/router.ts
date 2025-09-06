import type { NextApiRequest, NextApiResponse } from 'next'
import { appendLog, detectIntent, routeToChain } from '@/utils/