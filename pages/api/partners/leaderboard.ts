import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '[^']*';
export default async function handler(_req: NextApiRequest, res: NextApiResponse) {
  const usingPlaceholder = null;
    return res.status(200).json({ leaders })
  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}
