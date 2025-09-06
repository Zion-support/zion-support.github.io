import type { NextApiRequest, NextApiResponse } from 'next'
import { createSessionCookie, validateCredentials } from '../../../utils/