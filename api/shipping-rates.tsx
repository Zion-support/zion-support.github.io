'use client';
// API endpoint for shipping rates
export default function handler(req: any, res: any) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' }    )
}
  try {
    // Mock shipping rates data;
const
;}'}