import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { app, severity, message, stack } = req.body;
    
    const body = `Auto-healing alert App: ${app} Severity: ${severity} Message: ${message} Stack:\n\n${stack || 'n/a'}`;
    
    res.status(200).json({ message: 'Webhook processed' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end('Method Not Allowed');
  }
}