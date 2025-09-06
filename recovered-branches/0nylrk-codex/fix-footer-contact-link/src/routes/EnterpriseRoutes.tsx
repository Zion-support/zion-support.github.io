<<<<<<< HEAD
import { Fragment } from 'react';
import { Route, Routes } from 'react-router-dom';
import EnterprisePlans from '../pages/EnterprisePlans';
import EnterpriseAdmin from '../pages/EnterpriseAdmin';
import CompanyWorkspace from '../pages/CompanyWorkspace';
import EnterpriseBilling from '../pages/EnterpriseBilling';
import ZionHireAI from '../pages/ZionHireAI';

const EnterpriseRoutes = () => {
  return (
    <Routes>
      {/* Enterprise Routes */}
      <Route path='/enterprise' element={<EnterprisePlans />} />
      <Route path='/plans/enterprise' element={<EnterprisePlans />} />
      <Route path='/enterprise/admin' element={<EnterpriseAdmin />} />
      <Route path='/company/:companySlug' element={<CompanyWorkspace />} />
      <Route path='/enterprise/billing' element={<EnterpriseBilling />} />

      {/* Zion Hire AI Routes */}
      <Route path='/zion-hire-ai' element={<ZionHireAI />} />
      <Route path='/hire-ai' element={<ZionHireAI />} />
    </Routes>
  );
};

=======
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
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
export default EnterpriseRoutes;
