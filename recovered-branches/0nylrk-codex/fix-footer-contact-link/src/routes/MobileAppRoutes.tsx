<<<<<<< HEAD

import { Route, Routes } from "react-router-dom",
import MobileAppPage from "../pages/MobileAppPage",

const MobileAppRoutes = () => {
  return (
    <Routes>
      {/* Mobile App Routes */}
      <Route path="/download" element={<MobileAppPage />} />
      <Route path="/mobile-app" element={<MobileAppPage />} />
      <Route path="/mobile-launch" element={<MobileLaunchPage />} />
      <Route path="/open-app" element={<OpenAppRedirect />} />
    </Routes>
  )

export default MobileAppRoutes,
import { Route, Routes } from "react-router-dom",;
import MobileAppPage from "../pages/MobileAppPage",;
import MobileLaunchPage from "../pages/MobileLaunchPage",;
import OpenAppRedirect from "../pages/OpenAppRedirect",;
=======




>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
const MobileAppRoutes = () => {
=======
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
const MobileAppRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Mobile App Routes */}

      <Route path="/download" element={<MobileAppPage />} />;
      <Route path="/mobile-app" element={<MobileAppPage />} />;
      <Route path="/mobile-launch" element={<MobileLaunchPage />} />;
      <Route path="/open-app" element={<OpenAppRedirect />} />;
    </Routes>;
  );
<<<<<<< HEAD
},;

export default MobileAppRoutes;

=======
};


=======
import { Route, Routes } from './react-router-dom';
import MobileAppPage from "../pages / MobileAppPage";
import MobileLaunchPage from "../pages / MobileLaunchPage";
import OpenAppRedirect from "../pages / OpenAppRedirect";
const MobileAppRoutes = () =>: any {
  return (
    <Routes>;
      {/* Mobile App Routes */}
      <Route path="/download" element={<MobileAppPage />} />;
      <Route path="/mobile - app" element={<MobileAppPage />} />;
      <Route path="/mobile - launch" element={<MobileLaunchPage />} />;
      <Route path="/open - app" element={<OpenAppRedirect />} />;
    </Routes>);
}
;
=======

},


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
export default MobileAppRoutes;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> origin/cursor/fix-website-loading-errors-and-merge-0cee
