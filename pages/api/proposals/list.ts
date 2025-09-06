
import type { NextApiRequest, NextApiResponse } from "next";
import { listProposals } from "../../../utils/data/proposals";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });
=======
  if (req && req.method !== "GET") {
    res && res.setHeader("Allow", "GET");
    return res && res.status(405).json({ error: "Method not allowed" });
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  }
  try {
    const proposals = await listProposals();
    return res && res.status(200).json({ proposals });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message |"Failed to list proposals" });
  }
}