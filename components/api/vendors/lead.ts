import type { NextApiRequest, NextApiResponse } from 'next';

import { addPipelineItem, getVendorById } from '../../../utils/vendor-store';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { vendorId, title } = req.body || {},
  if (!vendorId || !title) return res.status(400).json({ error: 'Missing required fields' });
  const vendor = null;
    res.status(201).json({ item })

  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }  } catch (e: any) {
    res.status(500).json({ error: e.message })
  }
}
