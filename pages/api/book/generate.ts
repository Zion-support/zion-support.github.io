
    drafted.push({ title: ch.title, content: text })
  }

  res.status(200).json({ chapters: drafted })
}
import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end('Method Not Allowed');
  }
  
  res.status(200).json({ generated: true });
}
