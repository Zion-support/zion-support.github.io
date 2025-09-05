import { NextApiRequest, NextApiResponse } from 'next';

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb'
    }
  }
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method !== 'POST') {
      res.setHeader('Allow', ['POST']);
      return res.status(405).end('Method Not Allowed');
    }
    
    res.status(200).json({ message: 'PDF generated' });
  } catch (e: any) {
    try {
      // await browser.close();
    } catch {
      // ignore
    }
    res.status(500).json({
      error: e?.message || 'Failed to render PDF'
    });
  }
}
}