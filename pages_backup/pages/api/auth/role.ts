
import type { NextApiRequest, NextApiResponse } from 'next';


export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true })
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true })
};
import type { NextApiRequest, NextApiResponse } from 'next';
export default function handler(req, res) {
  try {
  res.status(200).json({ ok: true });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
}

