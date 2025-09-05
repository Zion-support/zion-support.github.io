import { NextApiRequest, NextApiResponse } from 'next'
import { dbManager } from '../../lib/database'
import { apiCache, userCache, staticCache } from '../../lib/cache'
  "status"