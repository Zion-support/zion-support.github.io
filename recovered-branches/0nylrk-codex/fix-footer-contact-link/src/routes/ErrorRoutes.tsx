


<<<<<<< HEAD
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

import NotFound from "@/pages/NotFound",
import Unauthorized from "@/pages/Unauthorized",



>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
const ErrorRoutes = () => {
  return (
    <Routes>
      {/* Error Routes */}
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
export default ErrorRoutes;

},



export default ErrorRoutes,
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import NotFound from "@/pages/NotFound",;
import Unauthorized from "@/pages/Unauthorized",;

const ErrorRoutes = () => {

=======

>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const ErrorRoutes = () => {
=======
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
const ErrorRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Error Routes */}

      <Route path="/unauthorized" element={<Unauthorized />} />;
      <Route path="*" element={<NotFound />} />;
    </Routes>;
  );
<<<<<<< HEAD





>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/expand-services-advertise-and-build-project-71ba
=======
};


=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-2cf4
export default ErrorRoutes;
