<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import EnterprisePlans from "../pages/EnterprisePlans";
import EnterpriseAdmin from "../pages/EnterpriseAdmin";
import CompanyWorkspace from "../pages/CompanyWorkspace";
import EnterpriseBilling from "../pages/EnterpriseBilling";
import ZionHireAI from "../pages/ZionHireAI";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import EnterprisePlans from "../pages/EnterprisePlans",
import EnterpriseAdmin from "../pages/EnterpriseAdmin",
import CompanyWorkspace from "../pages/CompanyWorkspace",
<<<<<<< HEAD
import EnterpriseBilling from "../pages/EnterpriseBilling";
import ZionHireAI from "../pages/ZionHireAI";

=======
import EnterpriseBilling from "../pages/EnterpriseBilling",
import ZionHireAI from "../pages/ZionHireAI",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
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
<<<<<<< HEAD
}
export default EnterpriseRoutes;

=======
},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default EnterpriseRoutes,
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
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const EnterpriseRoutes = () => {
=======
const EnterpriseRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Enterprise Routes */}

>>>>>>> main
      <Route path="/enterprise" element={<EnterprisePlans />} />;
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />;
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />;
      <Route path="/company/:companySlug" element={<CompanyWorkspace />} />;
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />;
<<<<<<< HEAD
=======

>>>>>>> main
      {/* Zion Hire AI Routes */}
      <Route path="/zion-hire-ai" element={<ZionHireAI />} />;
      <Route path="/hire-ai" element={<ZionHireAI />} />;
    </Routes>;
  );
<<<<<<< HEAD
},;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default EnterpriseRoutes;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
};


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
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default EnterpriseRoutes;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> main
