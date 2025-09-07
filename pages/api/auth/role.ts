<<<<<<< HEAD


import type { NextApiRequest, NextApiResponse } from 'next';
=======
import { NextApiRequest, NextApiResponse } from 'next';
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75

;
export default function handler(req: NextApiRequest, res: NextApiResponse) {
<<<<<<< HEAD
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

=======
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ message: 'Endpoint working' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
