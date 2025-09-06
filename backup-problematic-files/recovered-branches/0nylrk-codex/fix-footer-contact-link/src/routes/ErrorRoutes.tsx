<<<<<<< HEAD
const ErrorRoutes = () => {;
  return (
=======

import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import NotFound from "@/pages/NotFound",;
import Unauthorized from "@/pages/Unauthorized",;
;
const ErrorRoutes = () => {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Routes>;
      {/* Error Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />;
      <Route path="*" element={<NotFound />} />;
    </Routes>;
<<<<<<< HEAD
  );
};
export default ErrorRoutes;
import { Fragment } from './react';
import { Route, Routes } from './react-router-dom';
import NotFound from "@/pages / NotFound";
import Unauthorized from "@/pages / Unauthorized";
const ErrorRoutes = () =>: any {
  return (
    <Routes>;
      {/* Error Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />;
      <Route path="*" element={<NotFound />} />;
    </Routes>);
}
;
export default ErrorRoutes;
;
=======
  ),;
},;
;
export default ErrorRoutes,; const ErrorRoutes = () => {
  return (<Routes> {
  /* Error Routes */ 
}<Route path="/unauthorized" element= {
  <Unauthorized /> 
}/> <Route path="*" element= {
  <NotFound /> 
}/> 
};
export default ErrorRoutes;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
