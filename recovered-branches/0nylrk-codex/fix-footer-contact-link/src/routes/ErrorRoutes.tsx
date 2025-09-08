
import {Fragment} from "react";
import {Route, Routes} from "react-router-dom";
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";

}

export default ErrorRoutes;

},



};

},


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




