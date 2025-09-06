<<<<<<< HEAD

import type { NextApiRequest, NextApiResponse } from "next";
import { getFraudStore } from "../../../../utils/fraud/store";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
=======
import type { NextApiRequest, NextApiResponse } from 'next';
import { getFraudStore } from '../../../../utils/fraud/store';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  const store = getFraudStore();
<<<<<<< HEAD
  if (req.method === "GET") {
    const userId = (req.query.userId as string) |"";
    if (!userId) return res.status(400).json({ error: "Missing userId" });
    const settings = await store.getPrivacySettings(userId);
<<<<<<< HEAD
    return res.status(200).json(settings);
  }
  if (req.method === "POST") {
    const { userId, optOut } = req.body |{}
    if (!userId |typeof optOut !== "boolean")
      return res.status(400).json({ error: "Missing userId or optOut" });
    const updated = await store.setPrivacySettings(userId, optOut);
    return res.status(200).json(updated);

=======
    return res.status(200).json(settings)
  }

  if (req.method === 'POST') {
    const { userId, optOut } = req.body || {};
    if (!userId || typeof optOut !== 'boolean') return res.status(400).json({ error: 'Missing userId or optOut' });
    const updated = await store.setPrivacySettings(userId, optOut);
    return res.status(200).json(updated)
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
  }
  res.status(405).json({ error: "Method not allowed" });
}
<<<<<<< HEAD
=======

  if (req && req.method === "GET") {
    const userId = (req && req.query.userId as string) || "";
    if (!userId) return res && res.status(400).json({ error: "Missing userId" });
    const settings = await store && store.getPrivacySettings(userId);
    return res && res.status(200).json(settings);
  }

  if (req && req.method === "POST") {
    const { userId, optOut } = req && req.body || {};
    if (!userId || typeof optOut !== "boolean")
      return res && res.status(400).json({ error: "Missing userId or optOut" });
    const updated = await store && store.setPrivacySettings(userId, optOut);
    return res && res.status(200).json(updated);
  }

  res && res.status(405).json({ error: "Method not allowed" });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
=======
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
