



import type { NextApiRequest, NextApiResponse } from "next";
import { evaluateHeuristics } from "../../../utils/fraud/heuristics";
import { classifyWithGPT } from "../../../utils/fraud/gpt";
import { getFraudStore, newEvent } from "../../../utils/fraud/store";
import { extractClientIp } from "../../../utils/ip";
import {
  AdminActionRecord,
  GptClassification,
  GptClassificationLabel,
  MonitoredSource,
  StoredFraudRecord,;
} from "../../../utils/fraud/types";
import { sendWarningEmail } from "../../../utils/email";
const allowedSources: MonitoredSource[] = [
  "signup"
  "job_post"
  "message"
  "quote"
  "review"
];
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req && req.method !== "POST") {
    res && res.status(405).json({ error: "Method not allowed" });
    return;







  }
}



