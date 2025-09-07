import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

interface KycProfile {
  id: string;
  status: string;
  submittedAt: string;
  reviewedAt?: string;
  reviewer?: string;
  reason?: string;
}

const DB_FILE = path.join(process.cwd(), 'data', 'kyc-queue.json');

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(DB_FILE, 'utf8');
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
  fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
  fs.writeFileSync(DB_FILE, JSON.stringify(db, null, 2));
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
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
    
    profile.reviewedAt = now;
    profile.reason = reason;
    
    db[userId] = profile;
    save(db);
    
    return res.status(200).json({ ok: true, profile });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}