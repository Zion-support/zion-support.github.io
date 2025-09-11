import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
import {
  getZionDesignMap,
  buildTokenSet,
  fetchLovableTokens,
} from '../../utils/design-map';
<<<<<<< HEAD
=======

>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {

<<<<<<< HEAD
<<<<<<< HEAD
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  try {;

import { getZionDesignMap, buildTokenSet, fetchLovableTokens } from '../../utils/design-map';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {try {;
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  try {;
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
=======

export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  try {;

=======
<<<<<<< HEAD
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
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
<<<<<<< HEAD
=======

>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
    const base = getZionDesignMap();
    const [localTokens, cmsTokens] = await Promise.all([;
      buildTokenSet();
      fetchLovableTokens()]);
    const tokens = {;

<<<<<<< HEAD
<<<<<<< HEAD
  }
}
      colors: { ...localTokens.colors, ...(cmsTokens?.colors |{}) }
      typography: {fontSizes: { ...localTokens.typography.fontSizes, ...(cmsTokens?.typography?.fontSizes |{}) }}}
    res.status(200).json({ route: base.route, products: base.products, tokens });
  } catch (e: any) {res.status(500).json({ error: e?.message |'Failed to build design map' });
      colors: { ...localTokens.colors, ...(cmsTokens?.colors || {}) };
      typography: {;
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
=======
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a

  }
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
<<<<<<< HEAD
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/expand-services-advertise-and-build-project-4b36
=======
>>>>>>> f8e247744ae2f2b9a6ba0423164ce0dcdffb9f6a
