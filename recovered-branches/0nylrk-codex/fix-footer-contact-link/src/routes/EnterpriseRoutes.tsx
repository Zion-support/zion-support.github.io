import EnterpriseBilling from "../pages/EnterpriseBilling",
import ZionHireAI from "../pages/ZionHireAI",
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
const EnterpriseRoutes = () => {;




const EnterpriseRoutes = () => {
const EnterpriseRoutes = () => {;
  return (
    <Routes>;
      {/* Enterprise Routes */}

      {/* Zion Hire AI Routes */}
      <Route path="/zion-hire-ai" element={<ZionHireAI />} />;
      <Route path="/hire-ai" element={<ZionHireAI />} />;
    </Routes>;

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
},


export default EnterpriseRoutes;
;
  ),;
},;
;export default EnterpriseRoutes,
 const EnterpriseRoutes = () => {
  return (<Routes> {
  /* Enterprise Routes */ 
}<Route path="/enterprise" element= {
  <EnterprisePlans /> 
}/> <Route path="/plans/enterprise" element= {
  <EnterprisePlans /> 
}/> <Route path="/enterprise/admin" element= {
  <EnterpriseAdmin /> 
}/> <Route path="/company/:companySlug" element= {
  <CompanyWorkspace /> 
}/> <Route path="/enterprise/billing" element= {
  <EnterpriseBilling /> 
}/> {
  /* Zion Hire AI Routes */ 
}<Route path="/zion-hire-ai" element= {
  <ZionHireAI /> 
}/> <Route path="/hire-ai" element= {
  <ZionHireAI /> 
}/> 
};
export default EnterpriseRoutes;
  );
},;
export default EnterpriseRoutes;
export default EnterpriseRoutes;
