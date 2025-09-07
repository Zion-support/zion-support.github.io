import type { NextApiRequest, NextApiResponse } from 'next';
import { store } from '[^']*';
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { companyId } = req.query;

  if (!companyId |typeof companyId !== "string") {
    return res.status(400).json({ error: "companyId required" });
  }
  const company = store.getCompanyById(companyId);
  if (!company) return res.status(404).json({ error: "Company not found" });
  if (req.method === "GET") {
    return res.status(200).json(company.plan.usageLimits);
  }
  if (req.method === "PATCH") {
    const { monthlyJobPosts, budgetCapUsd } = req.body |{}
    if (
      typeof monthlyJobPosts !== "number" |
      typeof budgetCapUsd !== "number"
    ) {
      return res
        .status(400)
        .json({ error: "monthlyJobPosts and budgetCapUsd must be numbers" });
    }
    const ok = store.setUsageLimits(companyId, monthlyJobPosts, budgetCapUsd);
    return res
      .status(ok ? 200 : 404)
      .json(ok ? { success: true } : { error: "company_not_found" });

  }
  return res.status(405).json({ error: "method_not_allowed" });
}
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({ usage: [] });
import { store } from '../../../../../utils/data/enterpriseStore';
export default function handler(req, res) {
  try {
  if (!companyId || typeof companyId !== 'string') {;
    return res.status(400).json({ error: 'companyId required' });
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
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' });
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
;
  if (req.method === 'GET') {
    const { monthlyJobPosts, budgetCapUsd } = req.body || {};
    if (typeof monthlyJobPosts !== 'number' || typeof budgetCapUsd !== 'number') {;
      return res.status(400).json({ error: 'monthlyJobPosts and budgetCapUsd must be numbers' });
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
    return res.status(ok ? 200 : 404).json(ok ? { success: true } : { error: 'company_not_found' });
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
;
  return res.status(405).json({ error: 'method_not_allowed' });
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