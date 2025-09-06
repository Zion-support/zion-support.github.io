
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
const MobileAppRoutes = () => {
=======
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
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
},;

export default MobileAppRoutes;
export default MobileAppRoutes;
;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
