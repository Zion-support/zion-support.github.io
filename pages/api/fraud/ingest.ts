import { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../utils/fraud/store';
import {
  FraudIngestionData,
  GptClassificationLabel,
  MonitoredSource,
  StoredFraudRecord
} from '../../../utils/fraud/types';
import { sendWarningEmail } from '../../../utils/email';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const data: FraudIngestionData = req.body;
    
    if (!data.type || !data.description || !data.source) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const store = getFraudStore();
    
    // Classify using GPT (placeholder)
    const gptClassification: GptClassificationLabel = 'suspicious';
    const confidence = 0.85;

    const record: StoredFraudRecord = {
      id: Date.now().toString(),
      type: data.type,
      severity: confidence > 0.8 ? 'high' : 'medium',
      description: data.description,
      source: data.source,
      timestamp: new Date().toISOString(),
      status: 'pending',
      gptClassification,
      confidence
    };

    const createdRecord = store.createRecord(record);

    // Send warning email for high severity cases
    if (record.severity === 'high') {
      await sendWarningEmail(record);
    }

    return res.status(201).json({
      success: true,
      recordId: createdRecord.id,
      classification: gptClassification,
      confidence
    });
  } catch (error) {
    console.error('Fraud ingestion error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}