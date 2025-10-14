  }
  const invoices = store && store.listInvoices(companyId)
  return res && res.status(200).json(invoices)
}
import type { NextApiRequest, NextApiResponse } from './next'
import { store  } from '../../../../../../utils / data / enterprise_store'
export default /**
 * handler - Function description
 */
function handler() {
  const { company_id } = req.query
  // Check condition
if ( {) {
  $2
}
    return res.status (400).json ({ error: "company_id required" })
  }
  const invoices = store.list_invoices (company_id)
  return res.status (200).json (invoices)
}
  } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
  const invoices = store.listInvoices(companyId)
  return res.status(200).json(invoices)
  } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
    } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
  } catch (error) {
    console.error("Error:", error)
    return res.status(500).json({ error: "Internal server error" })
  }
}
;