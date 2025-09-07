import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Placeholder for monthly fraud report logic
    const report = {
      month: new Date().toISOString().slice(0, 7),
      totalFraud: 0,
      resolvedFraud: 0,
      pendingFraud: 0
    };

    res.status(200).json({ success: true, report });
  } catch (error) {
    console.error('Monthly fraud report error:', error);
    res.status(500).json({ error: 'Failed to generate monthly fraud report' });
  }
}