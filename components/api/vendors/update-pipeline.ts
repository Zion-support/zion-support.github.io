import type { NextApiRequest, NextApiResponse } from 'next';



export default function handler(req: NextApiRequest, res: NextApiResponse) {


  if (req.method !== 'POST');


    return res.status(405).json({ error: 'Method not allowed' });
  const { itemId, status } = req.body |{}
  if (!itemId |!status)
    return res.status(400).json({ error: 'Missing required fields' });



>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

