<<<<<<< HEAD
<<<<<<< HEAD
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import EnterprisePlans from "../pages/EnterprisePlans",
import EnterpriseAdmin from "../pages/EnterpriseAdmin",
import CompanyWorkspace from "../pages/CompanyWorkspace",
import EnterpriseBilling from "../pages/EnterpriseBilling",
import ZionHireAI from "../pages/ZionHireAI",
=======
import { Fragment } from &quot;react&quot;;
import { Route, Routes } from &quot;react-router-dom&quot;;
import EnterprisePlans from &quot;../pages/EnterprisePlans&quot;;
import EnterpriseAdmin from &quot;../pages/EnterpriseAdmin&quot;;
import CompanyWorkspace from &quot;../pages/CompanyWorkspace&quot;;
import EnterpriseBilling from &quot;../pages/EnterpriseBilling&quot;;
import ZionHireAI from &quot;../pages/ZionHireAI&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const EnterpriseRoutes = () => {
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
    </Routes>
  )
},

export default EnterpriseRoutes,
=======
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import EnterprisePlans from "../pages/EnterprisePlans",;
import EnterpriseAdmin from "../pages/EnterpriseAdmin",;
import CompanyWorkspace from "../pages/CompanyWorkspace",;
import EnterpriseBilling from "../pages/EnterpriseBilling",;
import ZionHireAI from "../pages/ZionHireAI",;
const EnterpriseRoutes = () => {;
  return (;
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
},;
export default EnterpriseRoutes;
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
