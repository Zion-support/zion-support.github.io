import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const now = new Date().toISOString();
    const {
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      description,
      evidence
    } = req.body;

    if (!projectId || !entityType || !entityId || !clientUserId || !talentUserId || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Placeholder for dispute creation logic
    const dispute = {
      id: `dispute-${Date.now()}`,
      projectId,
      entityType,
      entityId,
      clientUserId,
      talentUserId,
      description,
      evidence: evidence || [],
      status: 'open',
      createdAt: now,
      updatedAt: now
    };

    res.status(201).json({ success: true, dispute });
  } catch (error) {
    console.error('Dispute creation error:', error);
    res.status(500).json({ error: 'Failed to create dispute' });
  }
}