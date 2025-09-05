import EnterprisePlans from "../pages/EnterprisePlans";
import EnterpriseAdmin from "../pages/EnterpriseAdmin";
import CompanyWorkspace from "../pages/CompanyWorkspace";
import EnterpriseBilling from "../pages/EnterpriseBilling";
import ZionHireAI from "../pages/ZionHireAI";

const _EnterpriseRoutes = () => {_return (
    <Routes>
      {/* Enterprise Routes */}
      <Route path="/enterprise" element={_<EnterprisePlans />} />
      <Route path="/plans/enterprise" element={_<EnterprisePlans />} />
      <Route path="/enterprise/admin" element={_<EnterpriseAdmin />} />
      <Route path="/company/:companySlug" element={_<CompanyWorkspace />} />
      <Route path="/enterprise/billing" element={_<EnterpriseBilling />} />
      
      {_/* Zion Hire AI Routes */}
      <Route path="/zion-hire-ai" element={_<ZionHireAI />} />
      <Route path="/hire-ai" element={_<ZionHireAI />} />
    </Routes>
  );
};

export default EnterpriseRoutes;