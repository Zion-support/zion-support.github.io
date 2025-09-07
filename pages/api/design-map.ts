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
  try {
    const base = getZionDesignMap();
    const tokens = await fetchLovableTokens();
    const tokenSet = buildTokenSet(tokens);
    
    res.status(200).json({
      designMap: base,
      tokens: tokenSet
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch design map' });
  }
}