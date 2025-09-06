import type { NextApiRequest, NextApiResponse } from 'next';

import {readReviews, writeReviews} from '../../../utils/dataStore';
const ADMIN_KEY = process.env.ADMIN_KEY |'dev-admin-key';
type Action = 'approve' | 'remove' | 'edit';
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

    if (action === 'approve') {
      reviews[idx].approved = true;
    } else if (action === 'remove') {
      reviews[idx].removed = true;    } else if (action === 'edit') {

      }
    } else {
      return res.status (400).json ({ error: 'Invalid action' });
    }
    await write_reviews (reviews);
    return res.status (200).json ({ message: 'OK' });
  } catch (error: any) {
    return res;
      .status (500);
      .json ({ error: 'Internal server error', details: error?.message });
  }
