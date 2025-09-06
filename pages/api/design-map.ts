import type { NextApiRequest, NextApiResponse } from 'next';

// Mock functions - replace with actual implementations
function getZionDesignMap() {
  return {
    route: '/design-map',
    products: ['zion-gpt', 'zion-dao', 'zion-marketplace']
  };
}

async function buildTokenSet() {
  return {
    colors: {
      primary: '#000000',
      secondary: '#ffffff'
    },
    typography: {
      fontSizes: {
        sm: '14px',
        md: '16px',
        lg: '18px'
      }
    }
  };
}

async function fetchLovableTokens() {
  return {
    colors: {
      accent: '#ff6b6b'
    },
    typography: {
      fontSizes: {
        xl: '20px'
      }
    }
  };
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const base = getZionDesignMap();
    const [localTokens, cmsTokens] = await Promise.all([
      buildTokenSet(),
      fetchLovableTokens()
    ]);

    const tokens = {
      colors: {
        ...localTokens.colors,
        ...(cmsTokens?.colors || {})
      },
      typography: {
        fontSizes: {
          ...localTokens.typography.fontSizes,
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
  }
}