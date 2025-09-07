import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { data, source, timestamp } = req.body || {};
    
    if (!data || !source) {
      return res.status(400).json({ error: 'Data and source are required' });
    }

    // Placeholder for fraud ingestion logic
    res.status(200).json({ success: true, message: 'Fraud data ingested' });
  } catch (error) {
    console.error('Fraud ingestion error:', error);
    res.status(500).json({ error: 'Failed to ingest fraud data' });
  }
}