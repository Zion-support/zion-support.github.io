import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { getZionDesignMap, buildTokenSet, fetchLovableTokens } from '../../utils/design-map';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {try {;
=======
import {
  getZionDesignMap,
  buildTokenSet,
  fetchLovableTokens,;
} from '../../utils/design-map';
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
>>>>>>> cursor/automate-test-improve-and-merge-code-107b
    const base = getZionDesignMap();
    const [localTokens, cmsTokens] = await Promise.all([;
      buildTokenSet();
      fetchLovableTokens()]);
    const tokens = {;
      colors: { ...localTokens.colors, ...(cmsTokens?.colors |{}) }
      typography: {fontSizes: { ...localTokens.typography.fontSizes, ...(cmsTokens?.typography?.fontSizes |{}) }}}
    res.status(200).json({ route: base.route, products: base.products, tokens });
  } catch (e: any) {res.status(500).json({ error: e?.message |'Failed to build design map' });
  }
}