import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import {
  getZionDesignMap,
  buildTokenSet,
  fetchLovableTokens,
} from '../../utils/design-map';
=======

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

async function fetchLovableTokens() {
  return {
    colors: {},
    typography: {
      fontSizes: {}
    }
  };
}
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const base = getZionDesignMap();
    const [localTokens, cmsTokens] = await Promise.all([
      buildTokenSet(),
<<<<<<< HEAD
      fetchLovableTokens(),
    ]);

=======
      fetchLovableTokens()
    ]);
    
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
    const tokens = {
      colors: {
        ...localTokens.colors,
        ...(cmsTokens?.colors || {})
      },
      typography: {
        fontSizes: {
          ...localTokens.typography.fontSizes,
<<<<<<< HEAD
          ...(cmsTokens?.typography?.fontSizes || {}),
        },
      },
    };

    res
      .status(200)
      .json({ route: base.route, products: base.products, tokens });
  } catch (e: any) {
    res.status(500).json({ error: e?.message || 'Failed to build design map' });
=======
          ...(cmsTokens?.typography?.fontSizes || {})
        }
      }
    };

    res.status(200).json({
      route: base.route,
      products: base.products,
      tokens
    });
  } catch (e: unknown) {
    res.status(500).json({
      error: e?.message || 'Failed to build design map'
    });
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
  }
}
