<<<<<<< HEAD
import { Route, Routes } from "react-router-dom",;
import MobileAppPage from "../pages/MobileAppPage",;
import MobileLaunchPage from "../pages/MobileLaunchPage",;
import OpenAppRedirect from "../pages/OpenAppRedirect",;
;
const MobileAppRoutes = () => {;
  return (;
    <Routes>;
      {/* Mobile App Routes */}
      <Route path="/download" element={<MobileAppPage />} />;
      <Route path="/mobile-app" element={<MobileAppPage />} />;
      <Route path="/mobile-launch" element={<MobileLaunchPage />} />;
      <Route path="/open-app" element={<OpenAppRedirect />} />;
    </Routes>;
  ),;
},;
;
=======
import { Route, Routes } from "react-router-dom",
import MobileAppPage from "../pages/MobileAppPage",
import MobileLaunchPage from "../pages/MobileLaunchPage",
import OpenAppRedirect from "../pages/OpenAppRedirect",const MobileAppRoutes = () => {
  return (
    <Routes>
      {/* Mobile App Routes */}
      <Route path=&quot;/download&quot; element={<MobileAppPage />} />
      <Route path=&quot;/mobile-app&quot; element={<MobileAppPage />} />
      <Route path=&quot;/mobile-launch&quot; element={<MobileLaunchPage />} />
      <Route path=&quot;/open-app&quot; element={<OpenAppRedirect />} />
import MobileAppPage from "../pages/MobileAppPage";
import MobileLaunchPage from "../pages/MobileLaunchPage";
import OpenAppRedirect from "../pages/OpenAppRedirect";

const _MobileAppRoutes = () => {_return (
    <Routes>
      {/* Mobile App Routes */}
      <Route path="/download" element={_<MobileAppPage />} />
      <Route path="/mobile-app" element={_<MobileAppPage />} />
      <Route path="/mobile-launch" element={_<MobileLaunchPage />} />
      <Route path="/open-app" element={_<OpenAppRedirect />} />
    </Routes>
  )
},

>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
export default MobileAppRoutes,