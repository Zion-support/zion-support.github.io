import { Fragment } from "react";""
import { Route, Routes } from "react-router-dom";""
import EnterprisePlans from "../pages/EnterprisePlans";""
import EnterpriseAdmin from "../pages/EnterpriseAdmin";""
import CompanyWorkspace from "../pages/CompanyWorkspace";""
import EnterpriseBilling from "../pages/EnterpriseBilling";""
import ZionHireAI from "../pages/ZionHireAI";"
const EnterpriseRoutes = () => {
const EnterpriseRoutes = () => {;"
import {Fragment} from "react";""
import {Route, Routes} from "react-router-dom";""
import EnterprisePlans from "../pages/EnterprisePlans";""
import EnterpriseAdmin from "../pages/EnterpriseAdmin";""
import CompanyWorkspace from "../pages/CompanyWorkspace";""
import EnterpriseBilling from "../pages/EnterpriseBilling";""
import ZionHireAI from "../pages/ZionHireAI";""
import { Fragment } from "react",""
import { Route, Routes } from "react-router-dom",""
import EnterprisePlans from "../pages/EnterprisePlans",""
import EnterpriseAdmin from "../pages/EnterpriseAdmin",""
import CompanyWorkspace from "../pages/CompanyWorkspace",""
import EnterpriseBilling from "../pages/EnterpriseBilling";""
import ZionHireAI from "../pages/ZionHireAI";""
import EnterpriseBilling from "../pages/EnterpriseBilling",""
import ZionHireAI from "../pages/ZionHireAI","
const EnterpriseRoutes = () => {
  return (
    <Routes>
</Routes>"
      <Route path="/enterprise" element={<EnterprisePlans />} />"
</Route>"
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />"
</Route>"
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />"
</Route>"
      <Route path="/company/:companySlug" element={<CompanyWorkspace />} />"
</Route>"
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />"
</Route>"
      <Route path="/zion-hire-ai" element={<ZionHireAI />} />"
</Route>"
      <Route path="/hire-ai" element={<ZionHireAI />} />"
</Route>
    </Routes>
    <Routes>;
</Routes>"
      <Route path="/enterprise" element={<EnterprisePlans />} />"
</Route>"
      <Route path="/plans/enterprise" element={<EnterprisePlans />} />"
</Route>"
      <Route path="/enterprise/admin" element={<EnterpriseAdmin />} />"
</Route>"
      <Route path="/company/:companySlug" element={<CompanyWorkspace />} />"
</Route>"
      <Route path="/enterprise/billing" element={<EnterpriseBilling />} />"
</Route>"
      <Route path="/zion-hire-ai" element={<ZionHireAI />} />"
</Route>"
      <Route path="/hire-ai" element={<ZionHireAI />} />"
</Route>
    </Routes>
    <Routes>;
</Routes>"
      <Route path="/enterprise" element={<EnterprisePlans />} />;"
</Route>"
      <Route path="/plans / enterprise" element={<EnterprisePlans />} />;"
</Route>"
      <Route path="/enterprise / admin" element={<EnterpriseAdmin />} />;"
</Route>"
      <Route path="/company/:company_slug" element={<CompanyWorkspace />} />;"
</Route>"
      <Route path="/enterprise / billing" element={<EnterpriseBilling />} />;"
</Route>"
      <Route path="/zion - hire - ai" element={<ZionHireAI />} />;"
</Route>"
      <Route path="/hire - ai" element={<ZionHireAI />} />;"
</Route>)
    </Routes>);
  return (<Routes> {
</Routes>"
}<Route path="/enterprise" element= {"
  <EnterprisePlans /> 
</Route>"
}/> <Route path="/plans/enterprise" element= {"
  <EnterprisePlans /> 
</Route>"
}/> <Route path="/enterprise/admin" element= {"
  <EnterpriseAdmin /> 
</Route>"
}/> <Route path="/company/:companySlug" element= {"
  <CompanyWorkspace /> 
</Route>"
}/> <Route path="/enterprise/billing" element= {"
  <EnterpriseBilling /> 
</Route>"
}<Route path="/zion-hire-ai" element= {"
  <ZionHireAI /> 
</Route>"
}/> <Route path="/hire-ai" element= {"
  <ZionHireAI /> 
</Route>)"