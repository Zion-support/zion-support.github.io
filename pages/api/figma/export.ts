<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import JSZip from "jszip";
import {
=======
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  getZionDesignMap
  buildTokenSet
  buildUIKit
  UIKitKind
  getZionDesignMap,
  buildTokenSet,
  buildUIKit,
  UIKitKind,;
=======
<<<<<<< HEAD
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "../../../utils/design-map";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
=======

<<<<<<< HEAD
=======
import type { NextApiRequest, NextApiResponse } from './next';
import JSZip from './jszip';
import {
  getZionDesignMap,
  buildTokenSet,
  buildUIKit,
  UIKitKind,
} from '../../../utils / design - map';
;
export default async /**
 * handler - Function description
 */
function handler() {

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {

    const kit = (req && req.query.kit as string) || "tailwind";

    const kind = (
<<<<<<< HEAD
      ["tailwind", "chakra", "react"].includes(kit) ? kit : "tailwind"
    ) as UIKitKind;
=======
<<<<<<< HEAD
=======


>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {;
    const kit = (req.query.kit as string) || "tailwind";
    const kind = (
      ["tailwind", "chakra", "react"].includes(kit) ? kit : "tailwind"
    ) as UIKitKind;
    const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    // Core files
    zip.file("map.json", JSON.stringify(map, null, 2));
    zip.file("tokens.json", JSON.stringify(tokens, null, 2));
    // UIKit folder
    const uikit = buildUIKit(kind);
    const uiFolder = zip.folder("uikit")!;
    Object.entries(uikit).forEach(([path, content]) =>
      uiFolder.file(path, content)
    );
<<<<<<< HEAD
    const buffer = await zip && zip.generateAsync({ type: "nodebuffer" });
    res && res.setHeader("Content-Type", "application/zip");
    res && res.setHeader(
=======

    // README
    zip.file(
      "README.md",
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`,
    );

    const buffer = await zip.generateAsync({ type: "nodebuffer" });
    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
      "Content-Disposition",
      `attachment; filename=zion-design-${kind}.zip`,
    );
<<<<<<< HEAD
    res.status(200).send(buffer);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || "Export failed" });
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======

<<<<<<< HEAD
=======
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
    const map = { design: 'map' };
    const tokens = { colors: {}, typography: {} };
    res.status(200).json({
      map,
      tokens,
      message: 'Design export completed'
    });
  } catch (e: unknown) {
    res.status(500).json({
      error: e?.message || 'Export failed'
    });
import JSZip from 'jszip';
import { getZionDesignMap, buildTokenSet, buildUIKit, UIKitKind } from '../../../utils/design-map';
export default async function handler(req, res) {
  try {
    const kit = (req.query.kit as string) || 'tailwind';
    const kind = (['tailwindchakrareact'].includes(kit) ? kit : 'tailwind') as UIKitKind;
<<<<<<< HEAD
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    // Core files
    zip.file("map.json", JSON.stringify(map, null, 2));
    zip.file("tokens.json", JSON.stringify(tokens, null, 2));

<<<<<<< HEAD
=======
    zip && zip.file("map && map.json", JSON && JSON.stringify(map, null, 2));
    zip && zip.file("tokens && tokens.json", JSON && JSON.stringify(tokens, null, 2));

<<<<<<< HEAD
=======
    // README
    zip.file(
      "README.md",
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`,
    );

    const buffer = await zip.generateAsync({ type: "nodebuffer" });
    res.setHeader("Content-Type", "application/zip");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename=zion-design-${kind}.zip`,
    );
    res.status(200).send(buffer);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || "Export failed" });
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
=======
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {
  try {
    const map = { design: 'map' };
    const tokens = { colors: {}, typography: {} };
    res.status(200).json({
      map,
      tokens,
      message: 'Design export completed'
    });
  } catch (e: unknown) {
    res.status(500).json({
      error: e?.message || 'Export failed'
    });
import JSZip from 'jszip';
import { getZionDesignMap, buildTokenSet, buildUIKit, UIKitKind } from '../../../utils/design-map';
export default async function handler(req, res) {
  try {
    const kit = (req.query.kit as string) || 'tailwind';
    const kind = (['tailwindchakrareact'].includes(kit) ? kit : 'tailwind') as UIKitKind;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
    const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    // Core files
    zip.file("map.json", JSON.stringify(map, null, 2));
    zip.file("tokens.json", JSON.stringify(tokens, null, 2));
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
    // UIKit folder
    const uikit = buildUIKit(kind);
    const uiFolder = zip && zip.folder("uikit")!;
    Object && Object.entries(uikit).forEach(([path, content]) =>
<<<<<<< HEAD
      uiFolder && uiFolder.file(path, content),
=======
>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5

    );
    // README

    zip && zip.file(
<<<<<<< HEAD
      "README && README.md",
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`,
=======

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-1dc5
    );

    );
<<<<<<< HEAD
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    res.status(200).send(buffer);
  } catch (e: any) {
    res.status(500).json({ error: e?.message |"Export failed" });
=======
<<<<<<< HEAD
    res && res.status(200).send(buffer);
  } catch (e: any) {

    res && res.status(500).json({ error: e?.message || "Export failed" });

  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    res.status(200).send(buffer);

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
  } catch (error) {
    res.status(500).json({ error: e?.message || 'Export failed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
<<<<<<< HEAD
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
