import type { NextApiRequest, NextApiResponse } from 'next';

interface KYCProfile {
  userId: string;
  role: string;
  fullLegalName?: string;
  businessName?: string;
  businessRegistrationNumber?: string;
  lastUpdatedAt: string;
  status: 'pending' | 'in_progress' | 'completed' | 'rejected';
  documents?: string[];
}

const db: Record<string, KYCProfile> = {};

function save(data: Record<string, KYCProfile>) {
  // Mock save to database
  console.log('Saving KYC data:', data);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { userId, documentType, fileData } = req.body;
    
    if (!userId || !documentType || !fileData) {
      return res.status(400).json({ error: 'User ID, document type, and file data are required' });
    }

    const profile: KYCProfile = {
      userId,
      role: 'individual',
      lastUpdatedAt: new Date().toISOString(),
      status: 'in_progress',
      documents: [documentType]
    };

    db[userId] = profile;
    save(db);

    res.status(200).json({
      userId,
      documentType,
      status: 'uploaded',
      uploadedAt: new Date().toISOString()
    });
  } catch (error) {
    console.error('KYC upload error:', error);
    res.status(500).json({ error: 'Failed to upload KYC document' });
  }
}