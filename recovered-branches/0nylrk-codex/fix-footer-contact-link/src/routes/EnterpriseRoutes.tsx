import { Fragment } from &quot;react&quot;;
import { Route, Routes } from &quot;react-router-dom&quot;;
import EnterprisePlans from &quot;../pages/EnterprisePlans&quot;;
import EnterpriseAdmin from &quot;../pages/EnterpriseAdmin&quot;;
import CompanyWorkspace from &quot;../pages/CompanyWorkspace&quot;;
import EnterpriseBilling from &quot;../pages/EnterpriseBilling&quot;;
import ZionHireAI from &quot;../pages/ZionHireAI&quot;;

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
  );
};

export default EnterpriseRoutes;