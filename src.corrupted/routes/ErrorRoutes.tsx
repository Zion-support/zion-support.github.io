import { Route, Routes } from "react-router-dom";

export const ErrorRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<div>ErrorRoutes - Coming Soon</div>} />
    </Routes>
  );
};

export default ErrorRoutes;
