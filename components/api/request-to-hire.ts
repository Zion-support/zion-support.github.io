import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { talentSlug, requesterName, requesterEmail, projectInfo } =
    req.body || {};

  if (!talentSlug || !requesterName || !requesterEmail || !projectInfo) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const timestamp = new Date().toISOString();
    const requestData = {
      id: `req_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
      talentSlug,
      requesterName,
      requesterEmail,
      projectInfo,
      timestamp,
      status: 'pending',
    };

    // Persist to data/requests as a simple CMS-like log
    const dir = path.join(process.cwd(), 'data', 'requests');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const filePath = path.join(dir, `${requestData.id}.json`);
    fs.writeFileSync(filePath, JSON.stringify(requestData, null, 2));

    // TODO: Send notification email to talent
    // TODO: Send confirmation email to requester

    return res.status(201).json({
      success: true,
      requestId: requestData.id,
      message: 'Request submitted successfully',
    });
  } catch (error) {
    console.error('Error processing hire request:', error);
    return res.status(500).json({ error: 'Failed to process request' });
  }
}
