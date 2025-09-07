<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { getFraudStore } from "../../../../utils/fraud/store";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const month = (req.query.month as string) || new Date().toISOString().slice(0, 7);
    const store = getFraudStore();
    const report = store.getMonthlyReport(month);

    res.status(200).json(report);
  } catch (error) {
    console.error('Error generating monthly fraud report:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
=======

  if (req.method !== 'GET) {
    res.setHeader(Allow', ['GET]);
    return res.status(405).end(Method Not Allowed');
  }

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
