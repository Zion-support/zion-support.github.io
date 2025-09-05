
<<<<<<< HEAD
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import NotFound from "@/pages/NotFound",;
import Unauthorized from "@/pages/Unauthorized",;
;
const ErrorRoutes = () => {;
  return (;
    <Routes>;
      {/* Error Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />;
      <Route path="*" element={<NotFound />} />;
    </Routes>;
  ),;
},;
;
export default ErrorRoutes,;
=======
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import NotFound from "@/pages/NotFound",
import Unauthorized from "@/pages/Unauthorized",const ErrorRoutes = () => {
  return (
    <Routes>
      {/* Error Routes */}
      <Route path=&quot;/unauthorized&quot; element={<Unauthorized />} />
      <Route path=&quot;*&quot; element={<NotFound />} />
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

const _ErrorRoutes = () => {_return (
    <Routes>
      {/* Error Routes */}
      <Route path="/unauthorized" element={_<Unauthorized />} />
      <Route path="*" element={_<NotFound />} />
    </Routes>
  )
},

export default ErrorRoutes,
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
