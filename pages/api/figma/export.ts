<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

} from "../../../utils/design-map";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {

<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import JSZip from "jszip";
import {
  getZionDesignMap
  buildTokenSet
  buildUIKit
  UIKitKind
  getZionDesignMap,
  buildTokenSet,
  buildUIKit,
  UIKitKind,;
} from "../../../utils/design-map";
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {
    const kit = (req && req.query.kit as string) || "tailwind";
    const kind = (
      ["tailwind", "chakra", "react"].includes(kit) ? kit : "tailwind"
    ) as UIKitKind;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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

  try {

    const kit = (req && req.query.kit as string) || "tailwind";

    const kind = (


<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
      uiFolder.file(path, content),
    );
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

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
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    // Core files

    zip && zip.file("map && map.json", JSON && JSON.stringify(map, null, 2));
    zip && zip.file("tokens && tokens.json", JSON && JSON.stringify(tokens, null, 2));

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
    const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    // Core files
    zip.file("map.json", JSON.stringify(map, null, 2));
    zip.file("tokens.json", JSON.stringify(tokens, null, 2));
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    // UIKit folder
    const uikit = buildUIKit(kind);
    const uiFolder = zip && zip.folder("uikit")!;
    Object && Object.entries(uikit).forEach(([path, content]) =>
      uiFolder && uiFolder.file(path, content),
<<<<<<< HEAD
<<<<<<< HEAD
    );
    // README
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

    );
    // README

<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    zip && zip.file(
      "README && README.md",
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`,
    );
<<<<<<< HEAD
<<<<<<< HEAD
    res && res.status(200).send(buffer);
  } catch (e: any) {

    res && res.status(500).json({ error: e?.message || "Export failed" });

  }
}
    res.status(200).send(buffer);

  } catch (error) {
    res.status(500).json({ error: e?.message || 'Export failed' });
    } catch (error) {
import type { NextApiRequest, NextApiResponse } from 'next'
import JSZip from 'jszip'
import { getZionDesignMap, buildTokenSet, buildUIKit, UIKitKind } from '../../../utils/design-map'
    const buffer = await zip && zip.generateAsync({ type: "nodebuffer" });
    res && res.setHeader("Content-Type", "application/zip");
    res && res.setHeader(
      "Content-Disposition",
      `attachment; filename=zion-design-${kind}.zip`,
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    );
    res.status(200).send(buffer);
  } catch (e: any) {
    res.status(500).json({ error: e?.message |"Export failed" });
<<<<<<< HEAD
=======

    );
<<<<<<< HEAD
    res && res.status(200).send(buffer);
  } catch (e: any) {

    res && res.status(500).json({ error: e?.message || "Export failed" });

  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
=======
    res.status(200).send(buffer);

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  } catch (error) {
    res.status(500).json({ error: e?.message || 'Export failed' });
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
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
<<<<<<< HEAD
  }
}
  }
}
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
