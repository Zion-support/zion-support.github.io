<<<<<<< HEAD
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import EnterprisePlans from "../pages/EnterprisePlans",;
import EnterpriseAdmin from "../pages/EnterpriseAdmin",;
import CompanyWorkspace from "../pages/CompanyWorkspace",;
import EnterpriseBilling from "../pages/EnterpriseBilling",;
import ZionHireAI from "../pages/ZionHireAI",;
;
const EnterpriseRoutes = () => {;
  return (;
    <Routes>;
      {/* Enterprise Routes */}
      <Route path="/enterprise" element={<EnterprisePlans />} />;
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />;
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />;
      <Route path="/company/:companySlug" element={<CompanyWorkspace />} />;
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />;
      ;
      {/* Zion Hire AI Routes */}
      <Route path="/zion-hire-ai" element={<ZionHireAI />} />;
      <Route path="/hire-ai" element={<ZionHireAI />} />;
    </Routes>;
  ),;
},;
;
=======
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import EnterprisePlans from "../pages/EnterprisePlans",
import EnterpriseAdmin from "../pages/EnterpriseAdmin",
import CompanyWorkspace from "../pages/CompanyWorkspace",
import EnterpriseBilling from "../pages/EnterpriseBilling",
import ZionHireAI from "../pages/ZionHireAI",const EnterpriseRoutes = () => {
  return (
    <Routes>
      {/* Enterprise Routes */}
      <Route path=&quot;/enterprise&quot; element={<EnterprisePlans />} />
      <Route path=&quot;/plans/enterprise&quot; element={<EnterprisePlans />} />
      <Route path=&quot;/enterprise/admin&quot; element={<EnterpriseAdmin />} />
      <Route path=&quot;/company/:companySlug&quot; element={<CompanyWorkspace />} />
      <Route path=&quot;/enterprise/billing&quot; element={<EnterpriseBilling />} />
      
      {/* Zion Hire AI Routes */}
      <Route path=&quot;/zion-hire-ai&quot; element={<ZionHireAI />} />
      <Route path=&quot;/hire-ai&quot; element={<ZionHireAI />} />
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
  )
},

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default EnterpriseRoutes,