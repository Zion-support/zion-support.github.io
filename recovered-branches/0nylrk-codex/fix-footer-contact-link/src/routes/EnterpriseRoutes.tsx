<<<<<<< HEAD
import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import EnterprisePlans from "../pages/EnterprisePlans";
import EnterpriseAdmin from "../pages/EnterpriseAdmin";
import CompanyWorkspace from "../pages/CompanyWorkspace";
import EnterpriseBilling from "../pages/EnterpriseBilling";
import ZionHireAI from "../pages/ZionHireAI";

const EnterpriseRoutes = () => {
=======
import { Route, Routes  } from 'react-router-dom.ts';
import EnterprisePlans from '../pages/EnterprisePlans';
import EnterpriseAdmin from '../pages/EnterpriseAdmin';
import CompanyWorkspace from '../pages/CompanyWorkspace';
import EnterpriseBilling from '../pages/EnterpriseBilling';
import EnterpriseDemo from '../pages/EnterpriseDemo';

export default function EnterpriseRoutes(...args: any[]): any {
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
  return (
    <Routes>
      {/* Enterprise Routes */}
      <Route path="/enterprise" element={<EnterprisePlans />} />
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />
<<<<<<< HEAD
      <Route path="/company/:companySlug" element={<CompanyWorkspace />} />
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />
      
      {/* Zion Hire AI Routes */}
      <Route path="/zion-hire-ai" element={<ZionHireAI />} />
      <Route path="/hire-ai" element={<ZionHireAI />} />
    </Routes>
  );
};

export default EnterpriseRoutes;
=======
      <Route path="/enterprise/demo" element={<EnterpriseDemo />} />
      <Route path="/company/:companySlug" element={<CompanyWorkspace />} />
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />
    </Routes>
  );
}
>>>>>>> origin/cursor/check-fix-push-and-merge-to-main-2982
