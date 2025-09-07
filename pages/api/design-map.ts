<<<<<<< HEAD
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
=======

      tokens
    });
  } catch (e: unknown) {
    res.status(500).json({

>>>>>>> e19246f6ae7164fec78c9d9e31cb33f1a6ec056a
