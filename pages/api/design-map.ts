<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from 'next';
import { getZionDesignMap, buildTokenSet, fetchLovableTokens } from '../../utils/design-map';
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  try {;
    const base = getZionDesignMap();
    const [localTokens, cmsTokens] = await Promise.all([;
      buildTokenSet(),;
      fetchLovableTokens()]);
;
    const tokens = {;
      colors:{ ...localTokens.colors, ...(cmsTokens?.colors || {}) },;
      typography:{;
        fontSizes:{ ...localTokens.typography.fontSizes, ...(cmsTokens?.typography?.fontSizes || {}) }}}
;
    res.status(200).json({ route:base.route, products:base.products, tokens });
  } catch (e:any) {;
    res.status(500).json({ error:e?.message || 'Failed to build design map' });
=======
import type {_NextApiRequest, _NextApiResponse} from 'next'

export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _base = getZionDesignMap()
    const [localTokens, _cmsTokens] = await Promise.all([
      buildTokenSet(), _fetchLovableTokens()])

    const _tokens = {
      colors: { ...localTokens.colors, _...(cmsTokens?.colors || {}) },
      typography: {_fontSizes: { ...localTokens.typography.fontSizes, _...(cmsTokens?.typography?.fontSizes || {}) }}}

    res.status(200).json({_route: base.route, _products: base.products, _tokens})
  } catch (e: unknown) {_res.status(500).json({ error: e?.message || 'Failed to build design map'})
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
  }
}