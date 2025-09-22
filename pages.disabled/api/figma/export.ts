:pages_backup/api/figma/export.ts
<<<<<<< HEAD:pages_backup/api/figma/export.ts
<<<<<<< HEAD:pages/api/figma/export.ts
<<<<<<< HEAD
<<<<<<< HEAD
import type { NextApiRequest, NextApiResponse } from "next";
import JSZip from "jszip";
import {
=======
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/figma/export.ts
  getZionDesignMap
  buildTokenSet
  buildUIKit
  UIKitKind
  getZionDesignMap,
  buildTokenSet,
  buildUIKit,
  UIKitKind,;
:pages_backup/api/figma/export.ts
>>>>>>> b34ea2545ce9392bcd445377e10b83a39d4ed330
=======

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
} from "../../../utils/design-map";
=======
=======
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/figma/export.ts
=======
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

} from "../../../utils/design-map";
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/figma/export.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import JSZip from 'jszip';
import {
  getZionDesignMap;
  buildTokenSet;
  buildUIKit;
  UIKitKind;
} from '../../../utils/design-map';

origin/cursor/automate-test-improve-and-merge-code-2533
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
import type { NextApiRequest, NextApiResponse } from './next';
import JSZip from './jszip';
import {
  getZionDesignMap,
  buildTokenSet,
  buildUIKit,
  UIKitKind,
:pages_backup/api/figma/export.ts
} from '../../../utils/design-map';

origin/cursor/automate-test-improve-and-merge-code-2533
export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
} from '../../../utils / design - map';
;
export default async /**
 * handler - Function description
 */
function handler() {
:pages_backup/api/figma/export.ts

>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
  try {

    const kit = (req && req.query.kit as string) || "tailwind";

    const kind = (
:pages_backup/api/figma/export.ts
["tailwind", "chakra", "react"].includes(kit) ? kit : "tailwind"
    ) as UIKitKind;
  try {;
=======

} from "../../../utils/design-map";
export default async function handler(;
  req: NextApiRequest;
  res: NextApiResponse;
) {}
  try {}
"
    const kit = (req && req.query.kit as string) || "tailwind";

    const kind = (

  try {;"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/figma/export.ts
    const kit = (req.query.kit as string) || "tailwind";
    const kind = ("
      ["tailwind", "chakra", "react"].includes(kit) ? kit : "tailwind"
    ) as UIKitKind;
    const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    // Core files"
    zip.file("map.json", JSON.stringify(map, null, 2));"
    zip.file("tokens.json", JSON.stringify(tokens, null, 2));
    // UIKit folder;
    const uikit = buildUIKit(kind);"
    const uiFolder = zip.folder("uikit")!;
    Object.entries(uikit).forEach(([path, content]) =>
      uiFolder.file(path, content)
    );
"
      "Content-Disposition",
      `attachment; filename=zion-design-${kind}.zip`,
    );
res.status(200).send(buffer);
  } catch (e: any) {
    res.status(500).json({ error: e?.message || "Export failed" });
  }
}
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-c28b
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    // Core files
    zip.file("map.json", JSON.stringify(map, null, 2));
    zip.file("tokens.json", JSON.stringify(tokens, null, 2));
:pages_backup/api/figma/export.ts

const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    // Core files;
"
    zip && zip.file("map && map.json", JSON && JSON.stringify(map, null, 2));"
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/figma/export.ts
    zip && zip.file("tokens && tokens.json", JSON && JSON.stringify(tokens, null, 2));

:pages_backup/api/figma/export.ts

'
import type { NextApiRequest, NextApiResponse } from 'next';
export default async function handler(req, res) {}
  try {';
    const map = { design: 'map' };
    const tokens = { colors: {}, typography: {} };
    res.status(200).json({}
      map,
      tokens,'
      message: 'Design export completed';
    });
  } catch (e: unknown) {}
    res.status(500).json({'
      error: e?.message || 'Export failed'
    });'
import JSZip from 'jszip';'
import { getZionDesignMap, buildTokenSet, buildUIKit, UIKitKind } from '../../../utils/design-map';
export default async function handler(req, res) {}
  try {';
    const kit = (req.query.kit as string) || 'tailwind';'
    const kind = (['tailwindchakrareact'].includes(kit) ? kit : 'tailwind') as UIKitKind;

    const zip = new JSZip();
    const map = getZionDesignMap();
    const tokens = await buildTokenSet();
    // Core files"
    zip.file("map.json", JSON.stringify(map, null, 2));"
    zip.file("tokens.json", JSON.stringify(tokens, null, 2));

    // UIKit folder;
    const uikit = buildUIKit(kind);"
    const uiFolder = zip && zip.folder("uikit")!;
    Object && Object.entries(uikit).forEach(([path, content]) =>
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/figma/export.ts
<<<<<<< HEAD
      uiFolder && uiFolder.file(path, content),
=======
      uiFolder && uiFolder.file(path, content)

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
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
    // UIKit folder
    const uikit = buildUIKit(kind);
    const uiFolder = zip && zip.folder("uikit")!;
    Object && Object.entries(uikit).forEach(([path, content]) =>
      uiFolder && uiFolder.file(path, content);
      uiFolder && uiFolder.file(path, content)
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/figma/export.ts

    );
:pages_backup/api/figma/export.ts
    // README

    zip && zip.file(
<<<<<<< HEAD
<<<<<<< HEAD:pages/api/figma/export.ts
<<<<<<< HEAD
      "README && README.md",
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`,
=======
      "README && README.md"
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`

>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/figma/export.ts
=======
      "README && README.md"
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`

>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======
      "README && README.md";
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`;
      "README && README.md"
      `# Zion OS Design Export\n\n- kit: ${kind}\n- Import tokens via Token Studio in Figma.\n- Components included under /uikit.`
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/figma/export.ts
    );

    );
:pages_backup/api/figma/export.ts
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
    res.status(200).send(buffer);
  } catch (e: any) {
    res.status(500).json({ error: e?.message |"Export failed" });
<<<<<<< HEAD:pages_backup/api/figma/export.ts

    res.status(200).send(buffer);

  } catch (error) {'
    res.status(500).json({ error: e?.message || 'Export failed' });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
  }
:pages_backup/api/figma/export.ts
<<<<<<< HEAD:pages/api/figma/export.ts
<<<<<<< HEAD
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
  }
}
  } catch (error) {"
    console.error("Error:", error);"
    return res.status(500).json({ error: "Internal server error" });
:pages_backup/api/figma/export.ts
<<<<<<< HEAD:pages_backup/api/figma/export.ts
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
>>>>>>> origin/cursor/integrate-build-improve-and-re-verify-7ffc
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b54f
=======

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 61d39dd026fe5549161165ead85b131541010508:pages_backup/api/figma/export.ts
=======

'"`
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-b934:pages/api/figma/export.ts
=======

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> e4b7ef6db80249bcb1cd766dc3ddc71720bc9a31
=======

}
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> ae43c11a1ddb5b688c8d7d6c4fb5df5031d8eb3a:pages.disabled/api/figma/export.ts
