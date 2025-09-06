<<<<<<< HEAD

<<<<<<< HEAD
=======

>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
} from "../../../utils/design-map";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD

=======

=======
<<<<<<< HEAD
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
<<<<<<< HEAD

  try {

    const kit = (req && req.query.kit as string) || "tailwind";

    const kind = (


  try {;
    const kit = (req.query.kit as string) || "tailwind";
    const kind = (
=======
=======
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import JSZip from "jszip";
import {
<<<<<<< HEAD
  getZionDesignMap
  buildTokenSet
  buildUIKit
  UIKitKind
=======
  getZionDesignMap,
  buildTokenSet,
  buildUIKit,
  UIKitKind,;
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
} from "../../../utils/design-map";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
<<<<<<< HEAD
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  try {
    const kit = (req && req.query.kit as string) || "tailwind";
    const kind = (
<<<<<<< HEAD
    zip && zip.file("map && map.json", JSON && JSON.stringify(map, null, 2));
    zip && zip.file("tokens && tokens.json", JSON && JSON.stringify(tokens, null, 2));
=======
      ["tailwind", "chakra", "react"].includes(kit) ? kit : "tailwind"
    ) as UIKitKind;
=======
  try {;
    const kit = (req.query.kit as string) || "tailwind";
    const kind = (
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
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
      uiFolder.file(path, content),
    );
<<<<<<< HEAD

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

=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
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
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
    const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    // Core files

    zip && zip.file("map && map.json", JSON && JSON.stringify(map, null, 2));
    zip && zip.file("tokens && tokens.json", JSON && JSON.stringify(tokens, null, 2));
=======
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7

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
    // UIKit folder
    const uikit = buildUIKit(kind);
    const uiFolder = zip && zip.folder("uikit")!;
    Object && Object.entries(uikit).forEach(([path, content]) =>
      uiFolder && uiFolder.file(path, content),
<<<<<<< HEAD

    );
    // README

=======
    );
    // README
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    zip && zip.file(
      "README && README.md",
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`,
    );
<<<<<<< HEAD

    );
<<<<<<< HEAD
    res.status(200).send(buffer);

=======
    res && res.status(200).send(buffer);
  } catch (e: any) {

    res && res.status(500).json({ error: e?.message || "Export failed" });

  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    res.status(200).send(buffer);

  } catch (error) {
    res.status(500).json({ error: e?.message || 'Export failed' });
    } catch (error) {
=======
import type { NextApiRequest, NextApiResponse } from 'next'
import JSZip from 'jszip'
import { getZionDesignMap, buildTokenSet, buildUIKit, UIKitKind } from '../../../utils/design-map'
    const buffer = await zip && zip.generateAsync({ type: "nodebuffer" });
    res && res.setHeader("Content-Type", "application/zip");
    res && res.setHeader(
      "Content-Disposition",
      `attachment; filename=zion-design-${kind}.zip`,
    );
<<<<<<< HEAD
    res && res.status(200).send(buffer);
  } catch (e: any) {
    res && res.status(500).json({ error: e?.message || "Export failed" });
  }
}
      ["tailwind", "chakra", "react"].includes (kit) ? kit : "tailwind") as UIKitKind;
    const zip = new JSZip ();
;
    const map = getZionDesignMap ();
    const tokens = await buildTokenSet ();
;
    // Core files;
    zip.file ("map.json", JSON.stringify (map, null, 2));
    zip.file ("tokens.json", JSON.stringify (tokens, null, 2));
;
    // UIKit folder;
    const uikit = buildUIKit (kind);
    const ui_folder = zip.folder ("uikit")!;
    Object.entries (uikit).for_each (([path, content]) =>;
      ui_folder.file (path, content),
    );
;
    // README;
    zip.file (
      "README.md",
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`,
    );
;
    const buffer = await zip.generate_async ({ type: "nodebuffer" });
    res.set_header ("Content - Type", "application / zip");
    res.set_header (
      "Content - Disposition",
      `attachment; filename = zion - design-${kind}.zip`,
    );
    res.status (200).send (buffer);
  } catch (e: any) {
    res.status (500).json ({ error: e?.message || "Export failed" });
=======
    res.status(200).send(buffer);
<<<<<<< HEAD
  } catch (e: any) {
    res.status(500).json({ error: e?.message |"Export failed" });
=======
  } catch (error) {
    res.status(500).json({ error: e?.message || 'Export failed' });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
  }
}

  }
}
<<<<<<< HEAD

=======
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

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
=======
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
  }
}
=======
  }
}
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-dbb7
