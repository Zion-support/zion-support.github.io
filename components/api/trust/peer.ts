import type { NextApiRequest, NextApiResponse } from 'next';


  }
  const review: TrustPeerReview = {

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {

    return res.status(400).json({ error: 'Missing or invalid fields' });
  }

}
}

  if (!userId || !reviewerId || (type !== 'endorse' && type !== 'flag')) {

