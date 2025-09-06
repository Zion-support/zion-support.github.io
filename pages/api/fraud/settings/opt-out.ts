import type { NextApiRequest, NextApiResponse } from "next";
import { getFraudStore } from "../../../../utils/fraud/store";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
  const store = getFraudStore();

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
