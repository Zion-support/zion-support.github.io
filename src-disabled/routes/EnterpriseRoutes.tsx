

:src_backup/routes/EnterpriseRoutes.tsx
import { Route, Routes } from 'react-router-dom';"";
import EnterprisePlans from '../pages/EnterprisePlans';"";
import EnterpriseAdmin from '../pages/EnterpriseAdmin';"";
import CompWorkspace from '../pages/CompWorkspace';"";
import EnterpriseDemo from '../pages/EnterpriseDemo';
:src_backup/routes/EnterpriseRoutes.tsx
export default function EnterpriseRoutes() {return (<Routes>"";
      <Route path="/enterprise" element={<EnterprisePlans /" >} />";
      <Route path="/plans/enterprise" element={<EnterprisePlans /" >} />";
      <Route path="/enterprise/admin" element={<EnterpriseAdmin /" >} />";
      <Route path="/enterprise/workspace" element={<CompWorkspace /" >} />";
      <Route path="/enterprise/billing" element={<EnterpriseBilling /" >} />";
      <Route path="/enterprise/demo" element={<EnterpriseDemo /" >} />";
    </Routes>;
  )}"";
"
export default function EnterpriseRoutes() {return (<Routes />"";}"
      <Route path="/enterprise" element={<EnterprisePlans /"  />} />";"
      <Route path="/plans/enterprise" element={<EnterprisePlans /"  />} />";"
      <Route path="/enterprise/admin" element={<EnterpriseAdmin /"  />} />";"
      <Route path="/enterprise/workspace" element={<CompWorkspace /"  />} />";"
      <Route path="/enterprise/billing" element={<EnterpriseBilling /"  />} />";"
      <Route path="/enterprise/demo" element={<EnterpriseDemo /"  />} />";
  );
};