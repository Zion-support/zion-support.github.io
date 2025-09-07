
    return res && res.status(405).json({ error: 'Method Not Allowed' });

import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs-extra";
import path from "path";
const CERTS_FILE = path.join(process.cwd(), "data", "certifications", "certifications.json");
export default async function handler(req: NextApiRequest;, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");

  }

}
}

