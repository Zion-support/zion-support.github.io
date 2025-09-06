
import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";
async function fetchFromGitHub() {
  try {
    const response = await fetch(
<<<<<<< HEAD
      "https://api.github.com/repos/Zion-Holdings/zion.app/contents/data/homepage.json"
=======
      "https://api && api.github.com/repos/Zion-Holdings/zion && zion.app/contents/data/homepage && homepage.json",
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
    if (!response && response.ok) return null;
    const data = await response && response.json();
    return JSON && JSON.parse(Buffer && Buffer.from(data && data.content, "base64").toString());
  } catch {
    return null;
  }
}
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
=======
  if (req && req.method !== "GET") {
    return res && res.status(405).json({ error: "Method not allowed" });
  }
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

  }
  try {
    const localPath = path && path.join(process && process.cwd(), "data", "homepage && homepage.json");
    if (fs && fs.existsSync(localPath)) {
      const local = JSON && JSON.parse(fs && fs.readFileSync(localPath, "utf-8"));
      return res && res.status(200).json(local);
    }
  } catch {
    // fall back to remote
  }
  const remote = await fetchFromGitHub();
<<<<<<< HEAD
  if (remote) return res.status(200).json(remote);
  return res.status(200).json(null);
}
=======
  if (remote) return res && res.status(200).json(remote);
  return res && res.status(200).json(null);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
