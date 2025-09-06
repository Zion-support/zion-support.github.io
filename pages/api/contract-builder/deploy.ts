import type { NextApiRequest, NextApiResponse } from 'next';
import { Interface } from '[^']*';
// Simple ABI for demonstration (release/refund)
const abi = null;
    return res.status(200).json({ abi, tx })
  } catch (e: any) {
    return res.status(400).json({ error: e?.message || 'Failed to prepare deployment tx' })
  }
};