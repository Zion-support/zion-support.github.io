
  'next';
interface WebVitalsData {
  "name": string;
  value: number;
  id: string;
  delta: number;
  timestamp: number;
  url: string;
  userAgent: string}
}
}

export default async function handler(
  "req": NextApiReques t, "res": NextApiRespons e
) {
  if (req.method !==, POST') {'
    return res.status(405).json({ "error": 'Method not allowed });'
  }

