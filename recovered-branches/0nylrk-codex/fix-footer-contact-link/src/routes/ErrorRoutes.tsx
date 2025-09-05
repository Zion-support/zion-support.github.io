
<<<<<<< HEAD
<<<<<<< HEAD
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import NotFound from "@/pages/NotFound",
import Unauthorized from "@/pages/Unauthorized",
=======
import { Fragment } from &quot;react&quot;;
import { Route, Routes } from &quot;react-router-dom&quot;;
import NotFound from &quot;@/pages/NotFound&quot;;
import Unauthorized from &quot;@/pages/Unauthorized&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const ErrorRoutes = () => {
  return (
    <Routes>
      {/* Error Routes */}
      <Route path=&quot;/unauthorized&quot; element={<Unauthorized />} />
      <Route path=&quot;*&quot; element={<NotFound />} />
    </Routes>
  )
},

export default ErrorRoutes,
=======
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
>>>>>>> cursor/automate-test-improve-and-merge-code-4094
