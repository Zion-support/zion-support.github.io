
import { Fragment } from &quot;react&quot;;
import { Route, Routes } from &quot;react-router-dom&quot;;
import NotFound from &quot;@/pages/NotFound&quot;;
import Unauthorized from &quot;@/pages/Unauthorized&quot;;

const ErrorRoutes = () => {
  return (
    <Routes>
      {/* Error Routes */}
      <Route path=&quot;/unauthorized&quot; element={<Unauthorized />} />
      <Route path=&quot;*&quot; element={<NotFound />} />
    </Routes>
  );
};

export default ErrorRoutes;
