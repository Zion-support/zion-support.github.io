import type { NextApiRequest, NextApiResponse } from 'next';
import { listProposals } from '[^']*';
export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = null;
    res.status(200).json({ proposals })
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to list proposals' })
import type { NextApiRequest, NextApiResponse } from "next";
import { listProposals } from "../../../utils/data/proposals";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== "GET") {;
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed" });

  }
  try {
    const proposals = await listProposals();
    return res.status(200).json({ proposals });
  } catch (error: any) {
    return res
      .status(500)
      .json({ error: error?.message |"Failed to list proposals" });
import { listProposals } from '../../../utils/data/proposals';

export default function handler(_req: NextApiRequest, res: NextApiResponse) {
  try {
    const proposals = listProposals();
    res.status(200).json({ proposals });
  } catch (error: any) {
    res.status(500).json({ error: error?.message || 'Failed to list proposals' });
  }
}
  }
}