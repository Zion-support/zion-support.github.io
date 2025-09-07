<<<<<<< HEAD
<<<<<<< HEAD

  return res.status(200).json({ notes: getAllNotes() })
};

=======
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ message: 'Notes endpoint' });
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-0b75
=======
export default function handler(req, res) {
  return res.status(200).json({ notes: getAllNotes() })
}
>>>>>>> cursor/automate-test-improve-and-merge-code-5e91
