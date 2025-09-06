import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { instanceName, deploymentRegion } = req.body;

    if (!instanceName || !deploymentRegion) {
      return res.status(400).json({ 
        error: 'Missing required fields: instanceName, deploymentRegion' 
      });
    }

    // Simulated export operation
    const exportId = `export-${instanceName}-${Date.now()}`;
    
    res.status(200).json({
      success: true,
      exportId,
      message: 'Export initiated successfully'
    });
  } catch (error) {
    res.status(500).json({ 
      error: 'Export failed' 
    });  }
  // In a real system, look up persisted deployment by id
  const fake = {
    id,
    exportedAt: new Date().toISOString(),
    note: 'This is a stub export. Connect to persistence to return real deployment state.',
  };
  res.setHeader('Content-Type', 'application/json');
  return res.status(200).json(fake);