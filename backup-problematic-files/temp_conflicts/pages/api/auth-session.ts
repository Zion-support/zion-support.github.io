import type { NextApiRequest, NextApiResponse } from 'next'
import { requireAdminAuth, isAdmin } from '../../../utils/