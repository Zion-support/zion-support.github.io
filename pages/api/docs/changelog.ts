import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      // Mock changelog data
      const changelog = [
        {
          version: '1.0.0',
          date: '2024-01-01',
          changes: [
            'Initial release',
            'Basic API endpoints',
            'Authentication system'
          ]
        },
        {
          version: '1.1.0',
          date: '2024-01-15',
          changes: [
            'Added dispute resolution',
            'Enhanced security features',
            'Performance improvements'
          ]
        }
      ];

      res.status(200).json({
        success: true,
        changelog
      });
    } catch (error: any) {
      res.status(500).json({
        error: error?.message || 'Failed to retrieve changelog'
      });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end('Method Not Allowed');
  }
}