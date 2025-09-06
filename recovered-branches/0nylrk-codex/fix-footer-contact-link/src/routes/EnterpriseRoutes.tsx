

import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import EnterprisePlans from "../pages/EnterprisePlans",
import EnterpriseAdmin from "../pages/EnterpriseAdmin",
import CompanyWorkspace from "../pages/CompanyWorkspace",


const EnterpriseRoutes = () => {
  return (
    <Routes>
      {/* Enterprise Routes */}
      <Route path="/enterprise" element={<EnterprisePlans />} />
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />
      <Route path="/company/:companySlug" element={<CompanyWorkspace />} />
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />
      {/* Zion Hire AI Routes */}
      <Route path="/zion-hire-ai" element={<ZionHireAI />} />
      <Route path="/hire-ai" element={<ZionHireAI />} />
    </Routes>
  )

}
export default EnterpriseRoutes;

},




export default EnterpriseRoutes,
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import EnterprisePlans from "../pages/EnterprisePlans",;
import EnterpriseAdmin from "../pages/EnterpriseAdmin",;
import CompanyWorkspace from "../pages/CompanyWorkspace",;
import EnterpriseBilling from "../pages/EnterpriseBilling",;
import ZionHireAI from "../pages/ZionHireAI",;

const EnterpriseRoutes = () => {




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const EnterpriseRoutes = () => {


const EnterpriseRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Enterprise Routes */}

      <Route path="/enterprise" element={<EnterprisePlans />} />;
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />;
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />;
      <Route path="/company/:companySlug" element={<CompanyWorkspace />} />;
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />;

      {/* Zion Hire AI Routes */}
      <Route path="/zion-hire-ai" element={<ZionHireAI />} />;
      <Route path="/hire-ai" element={<ZionHireAI />} />;
    </Routes>;
  );



>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba

};




>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4

export default EnterpriseRoutes;

