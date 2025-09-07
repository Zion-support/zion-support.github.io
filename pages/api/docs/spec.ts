import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
}

  res.setHeader('Content-Typeapplication/json');
  res.status(200).json(v1)

}