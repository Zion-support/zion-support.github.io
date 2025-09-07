import type { NextApiRequest, NextApiResponse } from 'next';
import { getZionDesignMap, buildTokenSet, fetchLovableTokens } from '../../utils/design-map';
;
export default async function handler(req:NextApiRequest, res:NextApiResponse) {;
  try {;
    const base = getZionDesignMap();
    const [localTokens, cmsTokens] = await Promise.all([;
      buildTokenSet();
      fetchLovableTokens()]);
;
    const tokens = {;
      colors:{ ...localTokens.colors, ...(cmsTokens?.colors || {}) };
      typography:{;
        fontSizes:{ ...localTokens.typography.fontSizes, ...(cmsTokens?.typography?.fontSizes || {}) }}}
;
    res.status(200).json({ route:base.route, products:base.products, tokens });
  } catch (e:any) {;
    res.status(500).json({ error:e?.message || 'Failed to build design map' });
function getZionDesignMap() {
  return {
    route: '/design-map',
    products: ['zion-gpt', 'dao-token', 'assets', 'summit']
  };
}

async function buildTokenSet() {
  return {
    colors: {
      primary: '#000000',
      secondary: '#ffffff',
      accent: '#ff6b35'
    },
    typography: {
      fontSizes: {
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem'
      }
    }
  };
}

    res.status(200).json({_route: base.route, _products: base.products, _tokens})
  } catch (e: unknown) {_res.status(500).json({ error: e?.message || 'Failed to build design map'})
}