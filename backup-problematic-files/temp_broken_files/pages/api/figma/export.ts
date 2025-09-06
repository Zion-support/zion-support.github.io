import type { NextApiRequest, NextApiResponse } from 'next'
import JSZip from 'jszip'
import { getZionDesignMap, buildTokenSet, buildUIKit, UIKitKind } from '../../../utils/
    res.setHeader('Content-Typeapplication/
from 'next' import JSZip from 'jszip' const map = getZionDesignMap () const tokens = await buildTokenSet () // Core files zip.file ('map.json', JSON.stringify (map, null, 2) zip.file ('tokens.json', JSON.stringify (tokens, null, 2) // UIKit folder const uikit = buildUIKit (kind) const uiFolder = zip.folder ('uikit') ! Object.entries (uikit) .forEach ([path, content]) => uiFolder.file (path, content) //