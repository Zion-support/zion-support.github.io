import { Route, Routes } from "react-router-dom";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<div>AuthRoutes - Coming Soon</div>} />
    </Routes>
  );
};

export default AuthRoutes;
