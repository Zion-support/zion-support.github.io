<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import { authenticateRequest, calculateUsageSummary } from "../../../utils/api/partnerAuth";
=======
=======
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

=======
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
import type { NextApiRequest, NextApiResponse } from 'next';
import {
<<<<<<< HEAD
  authenticateRequest
  calculateUsageSummary;
=======
  authenticateRequest,;
  calculateUsageSummary,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from '../../../utils/api/partnerAuth';
<<<<<<< HEAD
=======
<<<<<<< HEAD
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======

>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  if (req.method !== 'GET') {;
    res.setHeader('Allow', 'GET');
    return res.status(405).json({ error: 'Method Not Allowed' });
 
}
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: 'Unauthorized' });
 
}
  const summary = await calculateUsageSummary(auth.partner.id);
  return res.status(200).json({ summary });
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
=======

>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {;
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method Not Allowed" })
  }
<<<<<<< HEAD
  const auth = null;
  return res.status(200).json({ summary })
}
=======
<<<<<<< HEAD
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
=======
  const auth = await authenticateRequest(req);
  if (!auth) {
    return res.status(401).json({ error: "Unauthorized" })
  }
  const summary = await calculateUsageSummary(auth.partner.id);
  return res.status(200).json({ summary })
}
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
<<<<<<< HEAD

}
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> 13634787e684d7d55cdaba499887f35eabc95f85
