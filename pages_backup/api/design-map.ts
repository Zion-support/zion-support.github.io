<<<<<<< HEAD

=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import type { NextApiRequest, NextApiResponse } from 'next';


<<<<<<< HEAD
    res.status(200).json(designMap);
    return;
  } catch (e: unknown) {
    res.status(500).json({
      error: (e as Error)?.message || 'Failed to build design map'
    });
    return;
  }
}
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {
  getZionDesignMap
  buildTokenSet
  fetchLovableTokens
} from '../../utils/design-map';

export default async function handler(
  req: NextApiRequest
  res: NextApiResponse
) {
  try {


export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  try {;

<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/design-map.ts
<<<<<<< HEAD
=======
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/design-map.ts
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
export default async function handler(req, res) {
  try {
    const base = getZionDesignMap();
    const [localTokens, cmsTokens] = await Promise.all([
      buildTokenSet()
      fetchLovableTokens()
    ]);
    const tokens = {
      colors: {
        ...localTokens.colors
        ...(cmsTokens?.colors || {})
      }
      typography: {
        fontSizes: {
          ...localTokens.typography.fontSizes
          ...(cmsTokens?.typography?.fontSizes || {})
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
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
    };
    res.status(200).json({
      route: base.route
      products: base.products
      tokens
    });
  } catch (e: unknown) {
    res.status(500).json({
      error: e?.message || 'Failed to build design map'
    });
import { getZionDesignMap, buildTokenSet, fetchLovableTokens } from '../../utils/design-map';
export default async function handler(req, res) {
  try {
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/design-map.ts
<<<<<<< HEAD
=======
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
>>>>>>> 99482a9199aaf93c62fadf06056b12429832a7df
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
=======
ursor/fix-website-loading-errors-and-merge-6662



>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
import {
  getZionDesignMap,
  buildTokenSet,
  fetchLovableTokens,
} from '../../utils/design-map';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/design-map.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
    const base = getZionDesignMap();
    const [localTokens, cmsTokens] = await Promise.all([;
      buildTokenSet();
      fetchLovableTokens()]);
    const tokens = {;
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/design-map.ts
<<<<<<< HEAD
=======
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/design-map.ts
=======

>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
  }
}
      colors: { ...localTokens.colors, ...(cmsTokens?.colors |{}) }
      typography: {fontSizes: { ...localTokens.typography.fontSizes, ...(cmsTokens?.typography?.fontSizes |{}) }}}
    res.status(200).json({ route: base.route, products: base.products, tokens });
  } catch (e: any) {res.status(500).json({ error: e?.message |'Failed to build design map' });
      colors: { ...localTokens.colors, ...(cmsTokens?.colors || {}) };
      typography: {;
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/design-map.ts
=======
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/design-map.ts
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
        fontSizes: { ...localTokens.typography.fontSizes, ...(cmsTokens?.typography?.fontSizes || {}) }}}
;
    res.status(200).json({ route: base.route, products: base.products, tokens });
  } catch (e: any) {;
    res.status(500).json({ error: e?.message || 'Failed to build design map' });
        fontSizes: { ...localTokens.typography.fontSizes, ...(cmsTokens?.typography?.fontSizes || {}) }}  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
    } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
<<<<<<< HEAD
<<<<<<< HEAD
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
;
    res.status(200).json({ route: base.route, products: base.products, tokens });
  } catch (error) {
    res.status(500).json({ error: e?.message || 'Failed to build design map' });
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
  }
}
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
<<<<<<< HEAD:pages_backup/api/design-map.ts
<<<<<<< HEAD
=======
=======
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/design-map.ts
=======
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


  }
}
<<<<<<< HEAD
<<<<<<< HEAD:pages_backup/api/design-map.ts
>>>>>>> f8e9d8204b854980b1ebe0327134be4447b2409a
<<<<<<< HEAD
=======
>>>>>>> a252feedad80e14c11ed30f5695974c343534e8d
=======


>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc


  }
}
origin/cursor/automate-test-improve-and-merge-code-20a4

origin/cursor/expand-services-advertise-and-build-project-c28b

main


}
<<<<<<< HEAD
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-2533
=======
>>>>>>> origin/cursor/fix-syntax-push-and-merge-to-main-8452:pages/api/design-map.ts
=======
origin/cursor/automate-test-improve-and-merge-code-2533
>>>>>>> 54ad2b1038c082a23519987b245e26e888b5a5dc
