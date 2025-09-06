import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'API endpoint' });
import type { NextApiRequest, NextApiResponse } from 'next',;
import { listProposals } from '../../../utils/data/proposals',;
export default function handler(_req: NextApiRequest, res: NextApiResponse) {;
  try {;
    const proposals = listProposals();
    res.status(200).json({ proposals });
  } catch (error: any) {;
    res.status(500).json({ error: error?.message || 'Failed to list proposals' });
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