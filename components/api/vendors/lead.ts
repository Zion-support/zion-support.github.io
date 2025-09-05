<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next',
import { addPipelineItem, getVendorById } from '../../../utils/vendor-store',

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' }),
  const { vendorId, title } = req.body || {},
  if (!vendorId || !title) return res.status(400).json({ error: 'Missing required fields' }),
  const vendor = getVendorById(vendorId),
  if (!vendor) return res.status(404).json({ error: 'Vendor not found' }),
  try {
    const item = addPipelineItem(vendorId, title),
    res.status(201).json({ item })
  } catch (e: any) {
    res.status(500).json({ error: e.message })
=======
import type {_NextApiRequest, _NextApiResponse} from 'next';

export default function handler(_req: NextApiRequest, _res: NextApiResponse) {_if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed'});
  const {_vendorId, _title} = req.body || {};
  if (!vendorId || !title) return res.status(400).json({_error: 'Missing required fields'});
  const _vendor = getVendorById(vendorId);
  if (!vendor) return res.status(404).json({_error: 'Vendor not found'});
  try {_const _item = addPipelineItem(vendorId, _title);
    res.status(201).json({ item});
  } catch (e: unknown) {_res.status(500).json({ error: e.message});
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
  }
}