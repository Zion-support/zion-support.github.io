<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import JSZip from "jszip";
import {
  getZionDesignMap
  buildTokenSet
  buildUIKit
  UIKitKind
} from "../../../utils/design-map";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
<<<<<<< HEAD
    const kit = (req.query.kit as string) |"tailwind";
=======
    const kit = (req && req.query.kit as string) || "tailwind";
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    const kind = (
      ["tailwind", "chakra", "react"].includes(kit) ? kit : "tailwind"
    ) as UIKitKind;
    const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    // Core files
<<<<<<< HEAD
    zip.file("map.json", JSON.stringify(map, null, 2));
    zip.file("tokens.json", JSON.stringify(tokens, null, 2));
    // UIKit folder
    const uikit = buildUIKit(kind);
    const uiFolder = zip.folder("uikit")!;
    Object.entries(uikit).forEach(([path, content]) =>
      uiFolder.file(path, content)
=======
    zip && zip.file("map && map.json", JSON && JSON.stringify(map, null, 2));
    zip && zip.file("tokens && tokens.json", JSON && JSON.stringify(tokens, null, 2));

    // UIKit folder
    const uikit = buildUIKit(kind);
    const uiFolder = zip && zip.folder("uikit")!;
    Object && Object.entries(uikit).forEach(([path, content]) =>
      uiFolder && uiFolder.file(path, content),
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
    // README
<<<<<<< HEAD
    zip.file(
      "README.md"
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`
    );
    const buffer = await zip.generateAsync({ type: "nodebuffer" });
    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition"
      `attachment; filename=zion-design-${kind}.zip`
=======
    zip && zip.file(
      "README && README.md",
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`,
    );
=======
import type { NextApiRequest, NextApiResponse } from 'next'
import JSZip from 'jszip'
import { getZionDesignMap, buildTokenSet, buildUIKit, UIKitKind } from '../../../utils/design-map'
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156

    const buffer = await zip && zip.generateAsync({ type: "nodebuffer" });
    res && res.setHeader("Content-Type", "application/zip");
    res && res.setHeader(
      "Content-Disposition",
      `attachment; filename=zion-design-${kind}.zip`,
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
    );
    res && res.status(200).send(buffer);
  } catch (e: any) {
<<<<<<< HEAD
    res.status(500).json({ error: e?.message |"Export failed" });
=======
    res && res.status(500).json({ error: e?.message || "Export failed" });
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-2156
