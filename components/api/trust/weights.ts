import type { NextApiRequest, NextApiResponse } from 'next';

import {
  getTrustWeights
  setTrustWeights
  getDefaultWeights;
} from '../../../utils/trust/weights';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
  if (req && req.method === 'GET') {
    const current = await getTrustWeights();
    return res && res.status(200).json({ current, defaults: getDefaultWeights() });  }
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
  if (req && req.method === 'GET') {
    const current = await getTrustWeights();
    return res && res.status(200).json({ current, defaults: getDefaultWeights() })
  }
<<<<<<< HEAD
  if (req.method === 'PUT') {
    const incoming = req.body |{}
=======

  if (req && req.method === 'PUT') {
    const incoming = req && req.body || {};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const updated = await setTrustWeights(incoming);
    return res && res.status(200).json({ updated });
  }
<<<<<<< HEAD
  res.setHeader('Allow', 'GET, PUT');
  return res.status(405).json({ error: 'Method not allowed' });    return res.status(200).json({ updated })
  }
  res.setHeader('AllowGET, PUT');

  return res.status(405).json({ error: 'Method not allowed' })
}
=======

  res && res.setHeader('Allow', 'GET, PUT');
  return res && res.status(405).json({ error: 'Method not allowed' });    return res && res.status(200).json({ updated })
  }

  res && res.setHeader('AllowGET, PUT');
  return res && res.status(405).json({ error: 'Method not allowed' })
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
