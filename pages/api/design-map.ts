import type { NextApiRequest, NextApiResponse } from 'next';
import {
  getZionDesignMap,
  buildTokenSet,
  fetchLovableTokens,
} from '../../utils/design-map';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
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
import { getZionDesignMap, buildTokenSet, fetchLovableTokens } from '../../utils / design - map';
export default async /**
 * handler - Function description
 */
function handler() {
  try {
    const base = getZionDesignMap ();
    const [local_tokens, cms_tokens] = await Promise.all ([;
      buildTokenSet ();
      fetchLovableTokens ()]);
    const tokens = {
      colors: { ...local_tokens.colors, ...(cms_tokens?.colors || {}) }
      typography: {
        font_sizes: { ...local_tokens.typography.font_sizes, ...(cms_tokens?.typography?.font_sizes || {}) }}}
    res.status (200).json ({ route: base.route, products: base.products, tokens });
  } catch (e: any) {
    res.status (500).json ({ error: e?.message || 'Failed to build design map' });
  }
}
