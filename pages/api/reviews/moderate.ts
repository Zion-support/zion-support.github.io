import type { NextApiRequest, NextApiResponse } from 'next';
import { readReviews, writeReviews } from '[^']*';

const ADMIN_KEY = null;
    return res.status(200).json({ message: 'OK' })
  } catch (error: any) {
    return res.status(500).json({ error: 'Internal server error', details: error?.message })
  }
}