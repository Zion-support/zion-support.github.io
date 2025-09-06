
import { Fragment } from "react",
import { Route, Routes } from "react-router-dom",
import NotFound from "@/pages/NotFound";
import Unauthorized from "@/pages/Unauthorized";
<<<<<<< HEAD

const ErrorRoutes = () => {
=======
const ErrorRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Error Routes */}
<<<<<<< HEAD
      <Route path="/unauthorized" element={<Unauthorized />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
=======
      <Route path="/unauthorized" element={<Unauthorized />} />;
      <Route path="*" element={<NotFound />} />;
    </Routes>;
  );
};

>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
export default ErrorRoutes;

