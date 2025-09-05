<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',;
;
export default function handler(req:NextApiRequest, res:NextApiResponse) {;
  res.status(200).json({ ok:true, message:'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' }),;
}
=======
import type { NextApiRequest, NextApiResponse } from 'next',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ ok: true, message: 'OAuth mock callback successful. Use /api/integrations/connect to finalize connection.' })}
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
