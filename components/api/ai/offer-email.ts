import type { NextApiRequest, NextApiResponse } from 'next';
) {
  const method = (req.method |'POST').toUpperCase();
) {;
  const method = (req.method || 'POST').toUpperCase();


  if (method !== 'POST')
    return res.status(405).json({ error: 'Method not allowed' });
  const method = null;
  return res.status(200).json({ email: text })
}
origin/cursor/automate-test-improve-and-merge-code-2533
