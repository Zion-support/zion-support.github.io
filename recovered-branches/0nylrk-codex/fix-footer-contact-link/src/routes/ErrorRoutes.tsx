
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
<<<<<<< HEAD
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

=======
import NotFound from "@/pages/NotFound",
import Unauthorized from "@/pages/Unauthorized",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
const ErrorRoutes = () => {
  return (
    <Routes>
      {/* Error Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
<<<<<<< HEAD
}
export default ErrorRoutes;

=======
},

export default ErrorRoutes,
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import NotFound from "@/pages/NotFound",;
import Unauthorized from "@/pages/Unauthorized",;
const ErrorRoutes = () => {;
  return (;
    <Routes>;
      {/* Error Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />;
      <Route path="*" element={<NotFound />} />;
    </Routes>;
  );
},;
export default ErrorRoutes;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
