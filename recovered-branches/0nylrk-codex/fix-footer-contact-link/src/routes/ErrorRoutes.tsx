import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";
const ErrorRoutes = () => {
=======
const ErrorRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Error Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};


=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default ErrorRoutes;

=======
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
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
