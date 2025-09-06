// Dev source map API endpoint
export default function handler(req: any, res: any) {
  res.status(200).json({ message: 'Dev source map endpoint' });
}