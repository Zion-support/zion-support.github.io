<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { ensureAdminFromApi } from '../../../../utils/auth';

interface KycProfile {
  userId: string;
  status: 'pending' | 'approved' | 'rejected' | 'needs_more_info';
  submittedAt: string;
  lastUpdatedAt: string;
  auditTrail: Array<{
    action: string;
    reason?: string;
    timestamp: string;
  }>;
}

const FILE = path.join(process.cwd(), 'data/kyc-queue.json');

function load(): Record<string, KycProfile> {
  try {
    if (!fs.existsSync(FILE)) return {};
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function save(db: Record<string, KycProfile>) {
  const dir = path.dirname(FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(FILE, JSON.stringify(db, null, 2));
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await ensureAdminFromApi(req);
  } catch (e: any) {
    return res.status(e.statusCode || 403).json({ error: 'Forbidden' });
  }

  const db = load();
  
  if (req.method === 'GET') {
    const queue = Object.values(db).filter(profile => profile.status === 'pending');
    return res.status(200).json({ ok: true, queue });
  }

  if (req.method === 'POST') {
    const { userId, action, reason } = req.body as { 
      userId?: string; 
      action?: 'approve' | 'reject' | 'needs_more_info'; 
      reason?: string 
    };
    
    if (!userId || !action) {
      return res.status(400).json({ error: 'Missing userId or action' });
    }
    
    const profile = db[userId];
    if (!profile) {
      return res.status(404).json({ error: 'Profile not found' });
    }
    
    const now = new Date().toISOString();
    
    if (action === 'approve') {
      profile.status = 'approved';
    } else if (action === 'reject') {
      profile.status = 'rejected';
    } else if (action === 'needs_more_info') {
      profile.status = 'needs_more_info';
    }
    
    profile.lastUpdatedAt = now;
    profile.auditTrail.push({
      action,
      reason,
      timestamp: now
    });
    
    db[userId] = profile;
    save(db);
    
    return res.status(200).json({ ok: true, profile });
  }

  return res.status(405).json({ error: 'Method not allowed' });
=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'KYC Queue endpoint' });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
}