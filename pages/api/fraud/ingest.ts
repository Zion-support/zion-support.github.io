// Fraud ingest API endpoint
export default function handler(req: any, res: any) {
  const { gpt, heuristic } = req.body || {};
  
  let combinedLabel = gpt?.label || (heuristic?.flagged ? 'SUSPICIOUS' : 'SAFE');
  if (heuristic?.severity === 'high') combinedLabel = 'DANGEROUS';
  if (gpt?.label === 'DANGEROUS') combinedLabel = 'DANGEROUS';
  
  res.status(200).json({ combinedLabel });
}