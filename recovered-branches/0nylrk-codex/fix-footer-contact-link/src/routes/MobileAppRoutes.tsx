import { Route, Routes } from "react-router-dom",
import MobileAppPage from "../pages/MobileAppPage",
import MobileLaunchPage from "../pages/MobileLaunchPage";
import OpenAppRedirect from "../pages/OpenAppRedirect";
<<<<<<< HEAD

const MobileAppRoutes = () => {
=======
const MobileAppRoutes = () => {;
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  return (
    <Routes>;
      {/* Mobile App Routes */}
<<<<<<< HEAD
      <Route path="/download" element={<MobileAppPage />} />
      <Route path="/mobile-app" element={<MobileAppPage />} />
      <Route path="/mobile-launch" element={<MobileLaunchPage />} />
      <Route path="/open-app" element={<OpenAppRedirect />} />
    </Routes>
  )
}
export default MobileAppRoutes;
=======
      <Route path="/download" element={<MobileAppPage />} />;
      <Route path="/mobile-app" element={<MobileAppPage />} />;
      <Route path="/mobile-launch" element={<MobileLaunchPage />} />;
      <Route path="/open-app" element={<OpenAppRedirect />} />;
    </Routes>;
  );
};
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a

