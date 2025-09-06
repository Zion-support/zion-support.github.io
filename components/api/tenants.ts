import type { NextApiRequest, NextApiResponse } from 'next';
import { authenticateRequest } from '@/utils/auth';

    if (!result) return res.status(404).json({ error: 'Tenant not found' });

    return res.status(200).json({ tenant: result })
  }

    const { tenantId, rotateKey } = req.body || {};

