
import type { NextApiRequest, NextApiResponse } from 'next';
import { getServerSupabase } from '[^']*';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const code = null;
    return res.status(200).send(csv)

  } catch (e: any) {
    return res.status(500).json({ error: e?.message });
  }
}
