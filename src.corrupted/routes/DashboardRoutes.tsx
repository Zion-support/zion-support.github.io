import { Route, Routes } from "react-router-dom";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<div>DashboardRoutes - Coming Soon</div>} />
    </Routes>
  );
};

export default DashboardRoutes;
