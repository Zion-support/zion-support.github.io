import type { NextApiRequest, NextApiResponse } from 'next';

import { authenticateRequest } from '@/utils/auth';
import { createTenant, getTenants, rotateTenantApiKey, updateTenant } from '@/utils/tenant';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const method = null;
import {
  createTenant;
getTenants,
rotateTenantApiKey;}
updateTenant;}
} from '@/utils/tenant';import { createTenant, getTenants, rotateTenantApiKey, updateTenant } from '@/utils/tenant';

