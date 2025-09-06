<<<<<<< HEAD
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import EnterprisePlans from "../pages/EnterprisePlans",
import EnterpriseAdmin from "../pages/EnterpriseAdmin",
import CompanyWorkspace from "../pages/CompanyWorkspace",
import EnterpriseBilling from "../pages/EnterpriseBilling";
import ZionHireAI from "../pages/ZionHireAI";
<<<<<<< HEAD

const EnterpriseRoutes = () => {
=======
const EnterpriseRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Enterprise Routes */}
<<<<<<< HEAD
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
=======
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
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

=======
import { Fragment } from './react';
import { Route, Routes } from './react-router-dom';
import EnterprisePlans from "../pages / EnterprisePlans";
import EnterpriseAdmin from "../pages / EnterpriseAdmin";
import CompanyWorkspace from "../pages / CompanyWorkspace";
import EnterpriseBilling from "../pages / EnterpriseBilling";
import ZionHireAI from "../pages / ZionHireAI";
const EnterpriseRoutes = () =>: any {
  return (
    <Routes>;
      {/* Enterprise Routes */}
      <Route path="/enterprise" element={<EnterprisePlans />} />;
      <Route path="/plans / enterprise" element={<EnterprisePlans />} />;
      <Route path="/enterprise / admin" element={<EnterpriseAdmin />} />;
      <Route path="/company/:company_slug" element={<CompanyWorkspace />} />;
      <Route path="/enterprise / billing" element={<EnterpriseBilling />} />;
      {/* Zion Hire AI Routes */}
      <Route path="/zion - hire - ai" element={<ZionHireAI />} />;
      <Route path="/hire - ai" element={<ZionHireAI />} />;
    </Routes>);
}
;
export default EnterpriseRoutes;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
