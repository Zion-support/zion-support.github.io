export default function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).end('Method Not Allowed');
  }
  
  // Mock fraud detection logic
  const { gpt, heuristic } = req.body || {};
  let combinedLabel = gpt?.label || (heuristic?.flagged ? 'SUSPICIOUS' : 'SAFE');
  if (heuristic?.severity === 'high') combinedLabel = 'DANGEROUS';
  if (gpt?.label === 'DANGEROUS') combinedLabel = 'DANGEROUS';
  
  res.status(200).json({ message: 'Fraud Ingest API', combinedLabel });
}