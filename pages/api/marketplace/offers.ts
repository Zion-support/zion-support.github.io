import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET' && req.method !== 'POST') {
    res.setHeader('Allow', 'GET, POST');
    return res.status(405).end('Method Not Allowed');
  }

  try {
    if (req.method === 'GET') {
      // Return list of offers
      const offers = [
        {
          id: 'offer-1',
          title: 'Web Development Service',
          description: 'Professional web development using modern technologies',
          price: 5000,
          currency: 'USD',
          category: 'development',
          provider: 'Tech Solutions Inc',
          rating: 4.8,
          reviews: 25
        },
        {
          id: 'offer-2',
          title: 'UI/UX Design Consultation',
          description: 'Expert UI/UX design consultation and prototyping',
          price: 2000,
          currency: 'USD',
          category: 'design',
          provider: 'Creative Studio',
          rating: 4.9,
          reviews: 18
        }
      ];

      res.status(200).json({
        success: true,
        offers
      });
    } else if (req.method === 'POST') {
      // Create new offer
      const { title, description, price, currency, category, provider } = req.body;
      
      if (!title || !description || !price || !category) {
        return res.status(400).json({ error: 'Title, description, price, and category required' });
      }

      const offer = {
        id: `offer-${Date.now()}`,
        title,
        description,
        price,
        currency: currency || 'USD',
        category,
        provider: provider || 'Unknown Provider',
        rating: 0,
        reviews: 0,
        createdAt: new Date().toISOString()
      };

      res.status(201).json({
        success: true,
        offer
      });
    }
  } catch (error) {
    res.status(500).json({ error: 'Request failed' });
  }
}