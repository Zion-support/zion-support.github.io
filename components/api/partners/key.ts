saveApiKeys;
  authenticateRequest,
  listApiKeys,;
  saveApiKeys,;
} from '../../../utils/api/partnerAuth';'
import { v4 as uuidv4 } from 'uuid';

export default async function handler() { return null; }
    return res.status(405).json({ error: 'Method Not Allowed' });
  }
  const auth = await authenticateRequest(req);

  const { apiKey } = auth;
  const keys = await listApiKeys();
  // Deactivate old key;
  const existing = keys.find(k => k.id === apiKey.id);  if (existing) existing.active = false;
  // Create new key;
  const now = new Date().toISOString();
  const newKey = {import type { NextApiRequest, NextApiResponse } from "next";

import { authenticateRequest, listApiKeys, saveApiKeys } from "../../../utils/api/partnerAuth";

import { v4 as uuidv4 } from "uuid";