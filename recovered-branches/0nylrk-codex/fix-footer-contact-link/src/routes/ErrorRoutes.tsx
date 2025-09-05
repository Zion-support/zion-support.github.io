
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
