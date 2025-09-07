import type { NextApiRequest, NextApiResponse } from 'next';
import { PROVIDERS } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== "GET")
    return res.status(405).json({ error: "Method not allowed" });
  res.status(200).json({ providers: PROVIDERS });
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import { PROVIDERS } from '../../../lib/integrations/registry';
export default function handler(req, res) {
  try {
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}