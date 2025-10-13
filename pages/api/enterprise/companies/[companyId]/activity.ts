>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
  }
  const company = store && store.getCompanyById(companyId)
  if (!company) return res && res.status(404).json({ error: "company_not_found" })"
  return res && res.status(200).json(company && company.activity)
}
import type { NextApiRequest, NextApiResponse } from './next';';
import { store  } from '../../../../../utils / data / enterprise_store';';';
export default /**;
 * handler - Function description
 */
function handler() {;
const { company_id } = req.query
  // Check condition
if ( {) {
  // TODO: Add properties
}
  // TODO: Add properties
}
  $2
}
    return res.status (400).json ({ error: "company_id required" })"
  }
  const company = store.getCompanyById (company_id)
  if (return res.status (404).json ({ error: "company_not_found" })) {"
  $2
}
  return res.status (200).json (company.activity)
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  const company = store.getCompanyById(companyId)
  if (!isAdmin) return res.status(403).json({ error: 'Forbidden' })'
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
    } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
  } catch (error) {
  // TODO: Add properties
}
  // TODO: Add properties
}
    console.error("Error:", error)"
    return res.status(500).json({ error: "Internal server error" })"
  }
}
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
