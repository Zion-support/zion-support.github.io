
<<<<<<< HEAD
// API services for the application
export interface Service {
=======
import { NextApiRequest, NextApiResponse } from 'next';

interface Service {
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
  id: string;
  name: string;
  description: string;
  price?: number;
  rating?: number;
}

<<<<<<< HEAD
export async function getServices(): Promise<Service[]> {
  // Mock data for now
  return [
    {
      id: '1',
      name: 'AI Consulting',
      description: 'AI strategy and implementation consulting',
      price: 5000,
      rating: 4.8
    }
  ];
=======
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const services: Service[] = [
      {
        id: '1',
        name: 'AI Consulting',
        description: 'Expert AI consulting services',
        price: 150,
        rating: 4.8
      },
      {
        id: '2',
        name: 'Cloud Migration',
        description: 'Seamless cloud migration services',
        price: 200,
        rating: 4.9
      }
    ];
    
    return res.json(services);
  }
  
  res.setHeader('Allow', ['GET']);
  res.status(405).end(`Method ${req.method} Not Allowed`);
>>>>>>> origin/cursor/fix-netlify-build-and-merge-to-main-4b9a
}

