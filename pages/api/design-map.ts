import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD

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

=======
<<<<<<< HEAD
import { getZionDesignMap, buildTokenSet, fetchLovableTokens } from '../../utils/design-map';
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {try {;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  try {;
<<<<<<< HEAD

=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
=======
export default async function handler(req, res) {
  try {
    const base = getZionDesignMap();
    const [localTokens, cmsTokens] = await Promise.all([
      buildTokenSet(),
      fetchLovableTokens()
    ]);
    const tokens = {
      colors: {
        ...localTokens.colors,
        ...(cmsTokens?.colors || {})
      },
      typography: {
        fontSizes: {
          ...localTokens.typography.fontSizes,
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
      route: base.route,
      products: base.products,
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


>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
    const base = getZionDesignMap();
    const [localTokens, cmsTokens] = await Promise.all([;
      buildTokenSet();
      fetchLovableTokens()]);
    const tokens = {;
<<<<<<< HEAD


  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
=======
<<<<<<< HEAD
      colors: { ...localTokens.colors, ...(cmsTokens?.colors |{}) }
      typography: {fontSizes: { ...localTokens.typography.fontSizes, ...(cmsTokens?.typography?.fontSizes |{}) }}}
    res.status(200).json({ route: base.route, products: base.products, tokens });
  } catch (e: any) {res.status(500).json({ error: e?.message |'Failed to build design map' });
=======
      colors: { ...localTokens.colors, ...(cmsTokens?.colors || {}) };
      typography: {;
<<<<<<< HEAD
=======
<<<<<<< HEAD
        fontSizes: { ...localTokens.typography.fontSizes, ...(cmsTokens?.typography?.fontSizes || {}) }}}
;
    res.status(200).json({ route: base.route, products: base.products, tokens });
  } catch (e: any) {;
    res.status(500).json({ error: e?.message || 'Failed to build design map' });
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
        fontSizes: { ...localTokens.typography.fontSizes, ...(cmsTokens?.typography?.fontSizes || {}) }}  } catch (error) {
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
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
  }
}
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
