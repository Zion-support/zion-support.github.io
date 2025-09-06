// Integrations OAuth [provider] callback API endpoint
export default function handler(req: any, res: any) {
  res.status(200).json({ message: 'Integrations OAuth callback endpoint' });
}