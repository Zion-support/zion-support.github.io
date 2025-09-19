import type { NextApiRequest, NextApiResponse } from 'next';
import { getSessionFromReq, isInternalAgentRequest } from '@/utils/adminAuth';

;
export default function handler(req: NextApiRequest, res: NextApiResponse) {,
  const session = getSessionFromReq(req),
  const internal = isInternalAgentRequest(req),
  if (!session && !internal) {,
    res.status(401).json({ error: 'Unauthorized' ,}),
    return,
  }
,
  res.status(200).json({ message: 'OK' ,}),
}
,
  res.status(200).json({ message: 'OK' ,});
};
export default function handler(req, res) {,
  try {,
  const session = getSessionFromReq(req);
  const internal = isInternalAgentRequest(req);
  if (!session && !internal) {;
    res.status(401).json({ error: 'Unauthorized' ,});
    return;
}
  res.status(200).json({ message: 'OK' ,});
  } catch (error) {,
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" ,});
  }
}
,