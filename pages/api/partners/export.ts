import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).end('Method Not Allowed');
  }

  try {
    const { format = 'csv' } = req.query;
    
    // Mock partners data
    const partners = [
      { id: '1', name: 'Partner A', status: 'active', joinedAt: '2024-01-01' },
      { id: '2', name: 'Partner B', status: 'inactive', joinedAt: '2024-02-01' }
    ];

    if (format === 'csv') {
      const csv = 'ID,Name,Status,Joined At\n' +
        partners.map(p => `${p.id},${p.name},${p.status},${p.joinedAt}`).join('\n');
      
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader('Content-Disposition', 'attachment; filename="partners.csv"');
      return res.status(200).send(csv);
    } else {
      return res.status(200).json(partners);
    }
  } catch (e: any) {
    return res.status(500).json({
      error: e?.message || 'Export failed'
    });
  }
}