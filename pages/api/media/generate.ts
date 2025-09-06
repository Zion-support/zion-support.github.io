import type { NextApiRequest, NextApiResponse } from "next";
import { buildPressRelease } from "../../../utils/mediaKit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const {
      type = "launch",
      companyName = "Zion",
      date = new Date().toISOString().substring(0, 10),
      raiseAmount,
      description = "Innovative technology company",
      contactEmail = "press@zion.com",
    } = req.body || {};

    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed" });
    }

    const pressRelease = await buildPressRelease({
      type,
      companyName,
      date,
      raiseAmount,
      description,
      contactEmail,
    });

    return res.status(200).json({
      ok: true,
      pressRelease,
      downloadUrl: `/api/media/download/${pressRelease.id}`,
    });
  } catch (error: any) {
    console.error("Press release generation error:", error);
    return res.status(500).json({
      ok: false,
      error: "Failed to generate press release",
    });
  }
}
