import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body || {};
    const { instanceName, deploymentRegion } = body;

    if (!instanceName || !deploymentRegion) {
      return res.status(400).json({ 
        error: 'Missing required fields: instanceName, deploymentRegion' 
      });
    }

    // Simulated export operation
    const exportId = `export-${instanceName.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`;
    
    res.status(200).json({
      success: true,
      exportId,
      message: 'Export initiated successfully'
    });
  } catch (error: any) {
    res.status(500).json({ 
      error: error?.message || 'Export failed' 
    });
  }
}