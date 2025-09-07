import type { NextApiRequest, NextApiResponse } from 'next';

<<<<<<< HEAD:pages/api/wallet/redeem.ts
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // TODO: Implement redeem logic
    res.status(200).json({ message: 'redeem endpoint' });
  } catch (error) {
    console.error('Error in redeem:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
}
=======
    return res.status(200).json(result)
  } catch (err: any) {
    return res.status(400).json({ error: err.message })
  }


>>>>>>> b1bd2160a740f8569656e96922b453e70de0f5db:pages.disabled/api/wallet/redeem.ts
