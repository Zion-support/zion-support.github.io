import type { NextApiRequest, NextApiResponse } from 'next';
<<<<<<< HEAD
import { getZionDesignMap, buildTokenSet, fetchLovableTokens } from '../../utils/design-map';
export default async function handler(req: NextApiRequest, res: NextApiResponse) {;
  try {;
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
    const base = getZionDesignMap();
    const [localTokens, cmsTokens] = await Promise.all([;
      buildTokenSet();
      fetchLovableTokens()]);
    const tokens = {;
<<<<<<< HEAD
      colors: { ...localTokens.colors, ...(cmsTokens?.colors |{}) }
      typography: {fontSizes: { ...localTokens.typography.fontSizes, ...(cmsTokens?.typography?.fontSizes |{}) }}}
    res.status(200).json({ route: base.route, products: base.products, tokens });
  } catch (e: any) {res.status(500).json({ error: e?.message |'Failed to build design map' });
=======
      colors: { ...localTokens.colors, ...(cmsTokens?.colors || {}) };
      typography: {;
<<<<<<< HEAD
        fontSizes: { ...localTokens.typography.fontSizes, ...(cmsTokens?.typography?.fontSizes || {}) }}}
;
    res.status(200).json({ route: base.route, products: base.products, tokens });
  } catch (e: any) {;
    res.status(500).json({ error: e?.message || 'Failed to build design map' });
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
  }
}