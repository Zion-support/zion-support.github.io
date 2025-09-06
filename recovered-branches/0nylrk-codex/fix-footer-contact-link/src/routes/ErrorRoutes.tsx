
<<<<<<< HEAD



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
<<<<<<< HEAD
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

=======
import NotFound from "@/pages/NotFound",
import Unauthorized from "@/pages/Unauthorized",
<<<<<<< HEAD
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
const ErrorRoutes = () => {
=======
<<<<<<< HEAD
=======
},

<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
export default ErrorRoutes,
import { Fragment } from "react",;
import { Route, Routes } from "react-router-dom",;
import NotFound from "@/pages/NotFound",;
import Unauthorized from "@/pages/Unauthorized",;
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
};


=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
=======
},;
<<<<<<< HEAD
=======
>>>>>>> 049eb576770241feeadb03b13bca178f95989ba1
>>>>>>> 4b01bbd5bc5a9373450c5efad91d38fbaa54fdb4
>>>>>>> origin/cursor/merge-pull-requests-and-resolve-conflicts-b9a5
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
