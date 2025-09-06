import { NextApiRequest, NextApiResponse } from 'next';
import {
  saveFeedbackFallback,
  FeedbackRecord
} from '../../utils/feedback/store';

function ok(res: NextApiResponse, data: any) {
  res.status(200).json({ ok: true, data });
}

function error(res: NextApiResponse, message: string, status = 400) {
  res.status(status).json({ ok: false, error: message });
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const { type, message, rating, metadata } = req.body;
      
      if (!type || !message) {
        return error(res, 'Type and message are required');
      }

      const feedback: FeedbackRecord = {
        id: Date.now().toString(),
        type,
        message,
        rating: rating || 0,
        metadata: metadata || {},
        createdAt: new Date().toISOString(),
        ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown'
      };

      await saveFeedbackFallback(feedback);
      return ok(res, { feedbackId: feedback.id });
    } catch (err) {
      console.error('Feedback submission error:', err);
      return error(res, 'Failed to save feedback', 500);
    }
  }
}

  if (req.method === 'GET') {
    // Get feedback (placeholder)
    return ok(res, { feedback: [] });
  }

  res.setHeader('Allow', 'GET, POST');
  return res.status(405).json({ error: 'Method not allowed' });
}