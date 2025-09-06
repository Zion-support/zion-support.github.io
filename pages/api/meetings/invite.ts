import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { meetingId, participants, title, startTime, duration } = req.body;
    
    if (!meetingId || !participants || !title) {
      return res.status(400).json({ error: 'Meeting ID, participants, and title are required' });
    }

    // Mock meeting invitation
    const invitation = {
      id: Date.now().toString(),
      meetingId,
      participants: Array.isArray(participants) ? participants : [participants],
      title,
      startTime: startTime || new Date().toISOString(),
      duration: duration || 60, // minutes
      status: 'scheduled',
      inviteUrl: `https://meet.example.com/${meetingId}`,
      createdAt: new Date().toISOString()
    };

    res.status(200).json(invitation);
  } catch (error) {
    console.error('Meeting invite error:', error);
    res.status(500).json({ error: 'Failed to send meeting invitation' });
  }
}