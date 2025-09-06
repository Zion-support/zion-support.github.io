import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const base = { route: '/', products: [] }; // getZionDesignMap()
    const [localTokens, cmsTokens] = await Promise.all([
      { colors: {}, typography: { fontSizes: {} } }, // buildTokenSet()
      { colors: {}, typography: { fontSizes: {} } }  // fetchLovableTokens()
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
      error: (e as Error)?.message || 'Failed to build design map'
    });
  }
}