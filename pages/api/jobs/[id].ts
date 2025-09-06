import { NextApiRequest, NextApiResponse } from 'next';

interface Job {
  id: string;
  title: string;
  description: string;
  category: string;
  requiredSkills: string[];
  budgetMinUsd?: number;
  budgetMaxUsd?: number;
  deliveryDeadlineIso?: string;
  status: 'draft' | 'published' | 'closed';
  updatedAtIso: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  if (req.method === 'GET') {
    res.status(200).json({ job: { id } });
  } else if (req.method === 'PATCH') {
    const { title, description, category, requiredSkills, budgetMinUsd, budgetMaxUsd, deliveryDeadlineIso, status } = req.body;
    
    // Job update logic would go here
    const job: Job = {
      id: id as string,
      title: title || 'Updated Job',
      description: description || '',
      category: category || 'general',
      requiredSkills: requiredSkills || [],
      budgetMinUsd,
      budgetMaxUsd,
      deliveryDeadlineIso,
      status: status || 'draft',
      updatedAtIso: new Date().toISOString()
    };
    
    res.status(200).json({ job });
  } else {
    res.setHeader('Allow', ['GET', 'PATCH']);
    res.status(405).end('Method Not Allowed');
  }
}