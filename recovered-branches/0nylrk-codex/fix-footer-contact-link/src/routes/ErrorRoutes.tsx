
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
=======
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

const _ErrorRoutes = () => {_return (
    <Routes>
      {/* Error Routes */}
      <Route path="/unauthorized" element={_<Unauthorized />} />
      <Route path="*" element={_<NotFound />} />
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </Routes>
  )
},

export default ErrorRoutes,
