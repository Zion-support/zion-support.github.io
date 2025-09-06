
<<<<<<< HEAD
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";
=======
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
<<<<<<< HEAD
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

=======
import NotFound from "@/pages/NotFound",
import Unauthorized from "@/pages/Unauthorized",
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
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

<<<<<<< HEAD
=======
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
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
export default ErrorRoutes;
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
