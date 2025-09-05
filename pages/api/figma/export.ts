import type {
  NextApiRequest, NextApiResponse 
}from 'next' import JSZip from 'jszip' const map = getZionDesignMap () const tokens = await buildTokenSet () // Core files zip.file ('map.json', JSON.stringify (map, null, 2) ) zip.file ('tokens.json', JSON.stringify (tokens, null, 2) ) // UIKit folder const uikit = buildUIKit (kind) const uiFolder = zip.folder ('uikit') ! Object.entries (uikit) .forEach ( ([path, content]) => uiFolder.file (path, content) ) // README zip.file ('README.md', `# Zion OS Design Export\n\n- kit: $ {
  kind 
}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`) res.status (200) .send (buffer) 
}catch (e: unknown) {
  res.status (500) .json ({
  error: e?.message || 'Export failed' 
}) 
}
}