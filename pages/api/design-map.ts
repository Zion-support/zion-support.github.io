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
  }
}