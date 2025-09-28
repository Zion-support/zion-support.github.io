import { Route, Routes } from "react-router-dom";

export const ContentRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<div>ContentRoutes - Coming Soon</div>} />
    </Routes>
  );
};

export default ContentRoutes;
