import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import fs from &quot;fs-extra&quot;;
import path from &quot;path&quot;;

const JOBS_FILE = path.join(process.cwd(), &quot;data&quot;, &quot;jobs&quot;, &quot;jobs.json&quot;);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;GET&quot;) {
    res.setHeader(&quot;Allow&quot;, &quot;GET&quot;);
    return res.status(405).json({ error: &quot;Method Not Allowed&quot; });
  }
  try {
    const jobs = (await fs.pathExists(JOBS_FILE)) ? await fs.readJSON(JOBS_FILE) : [];
    return res.status(200).json({ jobs });
  } catch (e) {
    return res.status(500).json({ error: &quot;Failed to load jobs&quot; });
  }
}