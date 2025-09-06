import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../utils/fraud/store';

interface FraudEvent {
  userId?: string;
  source: 'message' | 'profile' | 'payment' | 'login';
  content: string;
  metadata?: Record<string, any>;
}

interface StoredFraudRecord {
  id: string;
  userId?: string;
  source: string;
  content: string;
  metadata?: Record<string, any>;
  heuristic: any;
  gpt: any;
  autoHidden: boolean;
  status: 'PENDING' | 'REVIEWED' | 'RESOLVED';
  createdAt: string;
}

async function sendWarningEmail(params: { toUserId: string; subject: string; body: string }) {
  // TODO: Implement email sending
  console.log('Warning email would be sent:', params);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const event: FraudEvent = req.body;
    if (!event || !event.source || !event.content) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const store = getFraudStore();
    
    // Mock fraud detection
    const heuristic = {
      score: Math.random() * 100,
      flags: ['test_flag']
    };
    
    const gpt = {
      label: Math.random() > 0.5 ? 'SAFE' : 'SUSPICIOUS',
      confidence: Math.random() * 100,
      reasoning: 'Mock analysis'
    };

    const combinedLabel = heuristic.score > 70 || gpt.label === 'SUSPICIOUS' ? 'SUSPICIOUS' : 'SAFE';
    const { userId, source } = event;
    const autoHide = (process.env.FRAUD_AUTOHIDE === 'true') && (combinedLabel !== 'SAFE') && (source === 'message');

    const stored: Omit<StoredFraudRecord, 'id'> = {
      ...event,
      heuristic,
      gpt,
      autoHidden: !!autoHide,
      status: 'PENDING'
    };

    const saved = await store.saveEvent(stored);

    if (process.env.FRAUD_EMAIL_WARNINGS === 'true' && userId) {
      const prior = await store.countFlaggedForUser(userId);
      if (prior <= 1 && combinedLabel !== 'SAFE') {
        await sendWarningEmail({
          toUserId: userId,
          subject: 'Marketplace warning: suspicious activity detected',
          body: `We detected potentially suspicious activity on your account (${source}). Please keep all payments on-platform and avoid sharing personal contact info.`
        });
      }
    }

    res.status(200).json({
      id: saved.id,
      flagged: combinedLabel !== 'SAFE',
      label: combinedLabel,
      heuristic,
      gpt,
      autoHidden: saved.autoHidden,
      createdAt: saved.createdAt
    });
  } catch (e: any) {
    res.status(500).json({ error: 'Internal error', details: e?.message || String(e) });
  }
}