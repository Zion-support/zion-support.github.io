import type { NextApiRequest, NextApiResponse } from 'next';
import { addPipelineItem, getVendorById } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json($2);
  const { vendorId, title } = req.body || {},
  if (!vendorId || !title) return res.status(400).json($2);
  const vendor = getVendorById($2);
  if (!vendor) return res.status(404).json($2);
  try {
    const item = addPipelineItem($2);
    res.status(201).json({ item })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}