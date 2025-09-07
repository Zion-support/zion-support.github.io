import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
=======
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> 9248fb9c17c2f63249f18bb3527bd673abd9fef4
export default function handler(req: NextApiRequest, res: NextApiResponse) {
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

