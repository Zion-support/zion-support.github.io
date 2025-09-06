<<<<<<< HEAD

<<<<<<< HEAD
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

import NotFound from "@/pages/NotFound",
import Unauthorized from "@/pages/Unauthorized",
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
=======



>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const ErrorRoutes = () => {
=======
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
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
},;
=======
};


=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 0fbf271b1f2a86c928092eda22ad7978eb59d0ee
=======
  return (
    <Routes>;
      {/* Error Routes */}
>>>>>>> 8577f26234444eec9ab61c5c4d5c0b5fb15ead7f
export default ErrorRoutes;
