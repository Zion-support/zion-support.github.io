import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { email, meetingId, role = 'participant' } = req.body;
    
    if (!email || !meetingId) {
      return res.status(400).json({ error: 'Email and meeting ID are required' });
    }

    // Mock invitation logic
    const invitation = {
      id: Date.now().toString(),
      email,
      meetingId,
      role,
      status: 'pending',
      createdAt: new Date().toISOString(),
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString() // 7 days
    };

    // In a real implementation, send email invitation
    console.log('Invitation created:', invitation);

    return res.status(200).json({ ok: true, invitation });
  } catch (e: any) {
    console.error('Invitation error:', e);
    return res.status(500).json({ error: e?.message || 'Failed to create invitation' });
  }
}