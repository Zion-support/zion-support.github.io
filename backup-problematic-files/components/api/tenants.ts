import type { NextApiRequest, NextApiResponse } from 'next'
import { authenticateRequest } from '@/utils/
import { createTenant, getTenants, rotateTenantApiKey, updateTenant } from '@/utils/