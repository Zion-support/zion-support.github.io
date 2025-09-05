import type { NextApiRequest, NextApiResponse } from &quot;next&quot;;
import fs from &quot;fs-extra&quot;;
import path from &quot;path&quot;;

const CERTS_FILE = path.join(process.cwd(), &quot;data&quot;, &quot;certifications&quot;, &quot;certifications.json&quot;);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== &quot;GET&quot;) {
    res.setHeader(&quot;Allow&quot;, &quot;GET&quot;);
    return res.status(405).json({ error: &quot;Method Not Allowed&quot; });
  }
  try {
    const certifications = (await fs.pathExists(CERTS_FILE)) ? await fs.readJSON(CERTS_FILE) : [];
    return res.status(200).json({ certifications });
  } catch (e) {
    return res.status(500).json({ error: &quot;Failed to load certifications&quot; });
  }
}