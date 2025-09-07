import { NextApiRequest, NextApiResponse } from 'next';

const byFeature: Record<string, number> = {
  
};
const byEvent: Record<string, number> = {
  
};
const byDay: Record<string, number> = {
  
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({
    byFeature,
    byEvent,
    byDay
  });
}