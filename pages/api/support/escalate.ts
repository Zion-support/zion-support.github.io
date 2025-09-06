import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { sessionId, tag, reason, priority } = req.body;

    if (!sessionId) {
      return res.status(400).json({ error: 'Session ID is required' });
    }

    // Mock escalation
    const escalation = {
      id: Date.now().toString(),
      sessionId,
      tag: tag || 'escalate',
      reason: reason || 'Manual escalation',
      priority: priority || 'medium',
      escalatedAt: new Date().toISOString(),
      status: 'escalated'
    };

    res.status(200).json({
      success: true,
      escalation
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to escalate support session'
    });
  }
}