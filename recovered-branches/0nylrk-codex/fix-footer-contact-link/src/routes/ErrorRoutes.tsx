
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

const _ErrorRoutes = () => {_return (
    <Routes>
      {/* Error Routes */}
      <Route path="/unauthorized" element={_<Unauthorized />} />
      <Route path="*" element={_<NotFound />} />
    </Routes>
  );
};

export default ErrorRoutes;
