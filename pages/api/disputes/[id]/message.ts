import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { id } = req.query;
    const { message, sender } = req.body;

    if (!id || typeof id !== 'string') {
      return res.status(400).json({ error: 'Dispute ID is required' });
    }

    if (!message || !sender) {
      return res.status(400).json({ error: 'Message and sender are required' });
    }

    // Mock message creation
    const newMessage = {
      id: Date.now().toString(),
      disputeId: id,
      message,
      sender,
      timestamp: new Date().toISOString()
    };

    res.status(201).json({
      success: true,
      message: newMessage
    });
  } catch (error: any) {
    res.status(500).json({
      error: error?.message || 'Failed to create message'
    });
  }
}