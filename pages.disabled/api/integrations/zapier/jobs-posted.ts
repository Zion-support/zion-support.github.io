

import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD:pages/api/integrations/oauth/[provider]/start.ts

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement start logic
    res.status(200).json({ message: 'start endpoint' });
  } catch (error) {
    console.error('Error in start:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
=======
import { readState } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages.disabled/api/integrations/zapier/jobs-posted.ts
