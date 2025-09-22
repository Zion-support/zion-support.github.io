import type { NextApiRequest, NextApiResponse } from 'next';
import type { KycProfile } from '../../../utils/kyc';
import fs from 'fs';
import path from 'path';

const DATA_DIR = path.join(process.cwd(), 'datakyc');
const FILE = path.join(DATA_DIR, 'profiles.json');

function load(): Record<string, KycProfile> {
  try {
    const raw = fs.readFileSync(FILE, 'utf8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error loading KYC profiles:', error);
    return {};
  }
}

function save(profiles: Record<string, KycProfile>): void {
  try {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
    fs.writeFileSync(FILE, JSON.stringify(profiles, null, 2));
  } catch (error) {
    console.error('Error saving KYC profiles:', error);
  }
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const profiles = load();
      const queue = Object.values(profiles).filter(profile => 
        profile.status === 'pending' || profile.status === 'under_review'
      );
      
      res.status(200).json({
        success: true,
        queue: queue.sort((a, b) => new Date(a.submittedAt).getTime() - new Date(b.submittedAt).getTime())
      });
    } catch (error) {
      console.error('Error fetching KYC queue:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch KYC queue' });
    }
  } else if (req.method === 'POST') {
    try {
      const { action, profileId, notes } = req.body;
      const profiles = load();
      
      if (!profiles[profileId]) {
        return res.status(404).json({ success: false, error: 'Profile not found' });
      }
      
      const profile = profiles[profileId];
      
      switch (action) {
        case 'approve':
          profile.status = 'approved';
          profile.reviewedAt = new Date().toISOString();
          profile.reviewNotes = notes || '';
          break;
        case 'reject':
          profile.status = 'rejected';
          profile.reviewedAt = new Date().toISOString();
          profile.reviewNotes = notes || '';
          break;
        case 'request_info':
          profile.status = 'pending';
          profile.reviewNotes = notes || '';
          break;
        default:
          return res.status(400).json({ success: false, error: 'Invalid action' });
      }
      
      profiles[profileId] = profile;
      save(profiles);
      
      res.status(200).json({ success: true, profile });
    } catch (error) {
      console.error('Error updating KYC profile:', error);
      res.status(500).json({ success: false, error: 'Failed to update profile' });
    }
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end('Method Not Allowed');
  }
}