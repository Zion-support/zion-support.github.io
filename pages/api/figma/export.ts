import type {_NextApiRequest, _NextApiResponse} from 'next'
import JSZip from 'jszip'

<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const kit = (req.query.kit as string) || 'tailwind'
    const kind = (['tailwindchakrareact'].includes(kit) ? kit : 'tailwind') as UIKitKind
    const zip = new JSZip()
=======
export default async function handler(_req: NextApiRequest, _res: NextApiResponse) {_try {
    const _kit = (req.query.kit as string) || 'tailwind'
    const _kind = (['tailwind', _'chakra', _'react'].includes(kit) ? kit : 'tailwind') as UIKitKind
    const _zip = new JSZip()
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13

    const _map = getZionDesignMap()
    const _tokens = await buildTokenSet()

    // Core files
    zip.file('map.json', _JSON.stringify(map, _null, _2))
    zip.file('tokens.json', _JSON.stringify(tokens, _null, _2))

    // UIKit folder
    const _uikit = buildUIKit(kind)
    const _uiFolder = zip.folder('uikit')!
    Object.entries(uikit).forEach(_([path, _content]) => uiFolder.file(path, _content))

    // README
    zip.file('README.md', _`# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`)

<<<<<<< HEAD
    const buffer = await zip.generateAsync({ type: 'nodebuffer' })
    res.setHeader('Content-Typeapplication/zip')
    res.setHeader('Content-Disposition', `attachment, filename=zion-design-${kind}.zip`)
=======
    const _buffer = await zip.generateAsync({_type: 'nodebuffer'})
    res.setHeader('Content-Type', 'application/zip')
    res.setHeader('Content-Disposition', `attachment; filename=zion-design-${_kind}.zip`)
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    res.status(200).send(buffer)
  } catch (e: unknown) {_res.status(500).json({ error: e?.message || 'Export failed'})
  }
}