import type { NextApiRequest, NextApiResponse } from "next";
import type { AccessLevel } from "../../utils/search/filter";
import { parseQueryToFilters } from "../../utils/search/parser";
import { searchAll, suggestDidYouMean } from "../../utils/search/filter";

      ok: true,
      query: q,
      parsed,
      keywords,
      didYouMean,
      counts: {
      },
      results
    });

  } catch (e: any) {
  }
}
    res.status(500).json({ ok: false, error: e?.message || 'Search failed' })
  }
}
    res.status (500).json ({ ok: false, error: e?.message || "Search failed" });
  }
}
