import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getZionDesignMap,
  buildTokenSet,
  fetchLovableTokens
} from '../../utils/design-map';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const designMap = await getZionDesignMap();
    const tokenSet = await buildTokenSet();
    const lovableTokens = await fetchLovableTokens();

    res.status(200).json({
      designMap,
      tokenSet,
      lovableTokens
    });
  } catch (error) {
    console.error('Error fetching design map:', error);
    res.status(500).json({ error: 'Failed to fetch design map' });
  }
}