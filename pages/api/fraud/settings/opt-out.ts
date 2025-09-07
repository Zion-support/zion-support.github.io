import type { NextApiRequest, NextApiResponse } from "next";
import { getFraudStore } from "../../../../utils/fraud/store";

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const store = getFraudStore();

  if (req.method === 'GET') {
    const settings = store.getPrivacySettings();
    return res.status(200).json(settings);
  }

  if (req.method === 'POST') {
    const { userId, optOut } = req.body || {};
    if (!userId || typeof optOut !== 'boolean') {
      return res.status(400).json({ error: 'Missing userId or optOut' });
    }
    
    const updated = await store.setPrivacySettings(userId, { optOut });
    return res.status(200).json(updated);
  }

  res.status(405).json({ error: "Method not allowed" });
}
=======
>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
