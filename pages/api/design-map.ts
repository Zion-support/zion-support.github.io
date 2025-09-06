import type { NextApiRequest, NextApiResponse } from 'next';
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
