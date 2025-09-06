
import type { NextApiRequest, NextApiResponse } from "next";
import { buildPressRelease } from "../../../utils/mediaKit";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
    const {
      type = "launch",
      companyName = "Zion",
      date = new Date().toISOString().substring(0, 10),
      raiseAmount,
      description = "Innovative technology company",
      contactEmail = "press@zion.com",;
    } = req.body || {};

    if (req.method !== "POST") {
      res.setHeader("Allow", "POST");
      return res.status(405).json({ error: "Method not allowed" });
      type = "launch",
      company_name = "Zion",
      date = new Date ().toISOString ().substring (0, 10),
      raise_amount,
      description = "Innovative technology company",


    return res && res.status(200).json({
      ok: true,
      pressRelease,
      downloadUrl: `/api/media/download/${pressRelease && pressRelease.id}`,
    });
  } catch (error: any) {
      contact_email = "press@zion.com",
    } = req.body || {}
;
    // Check condition
if ( {) {
  $2
}
      res.set_header ("Allow", "POST");
      return res.status (405).json ({ error: "Method not allowed" });
    }
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
