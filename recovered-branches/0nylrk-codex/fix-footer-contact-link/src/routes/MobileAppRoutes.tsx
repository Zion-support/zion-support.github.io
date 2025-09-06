import { Route, Routes } from "react-router-dom",
import MobileAppPage from "../pages/MobileAppPage",
<<<<<<< HEAD
import MobileLaunchPage from "../pages/MobileLaunchPage";
import OpenAppRedirect from "../pages/OpenAppRedirect";

=======
import MobileLaunchPage from "../pages/MobileLaunchPage",
import OpenAppRedirect from "../pages/OpenAppRedirect",
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
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
<<<<<<< HEAD
}
export default MobileAppRoutes;

=======
},

export default MobileAppRoutes,
import { Route, Routes } from "react-router-dom",;
import MobileAppPage from "../pages/MobileAppPage",;
import MobileLaunchPage from "../pages/MobileLaunchPage",;
import OpenAppRedirect from "../pages/OpenAppRedirect",;
const MobileAppRoutes = () => {;
  return (;
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
>>>>>>> 764b47480e661e35f5e89dcf792b08dc56e66035
