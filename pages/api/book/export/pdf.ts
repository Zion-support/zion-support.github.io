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
    if (req.method === 'POST') {
      const { content } = req.body;
      
      // PDF generation logic would go here
      res.status(200).json({ message: 'PDF generated' });
    } else {
      res.setHeader('Allow', ['POST']);
      res.status(405).end('Method Not Allowed');
    }
  } catch (e: any) {
    res.status(500).json({
      error: e?.message || 'Failed to render PDF'
    });
  }
}