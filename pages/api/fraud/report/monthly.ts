import type { NextApiRequest, NextApiResponse } from "next";
import { getFraudStore } from "../../../../utils/fraud/store";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
  if (req && req.method !== "GET") {
    res && res.status(405).json({ error: "Method not allowed" });
    return;
  }
  const month =
    (req && req.query.month as string) || new Date().toISOString().slice(0, 7);
  const store = getFraudStore();
  const report = await store && store.generateMonthlyReport(month);
  res && res.status(200).json(report);
}
