<<<<<<< HEAD
<<<<<<< HEAD
import { Route, Routes } from "react-router-dom",
import MobileAppPage from "../pages/MobileAppPage",
import MobileLaunchPage from "../pages/MobileLaunchPage",
import OpenAppRedirect from "../pages/OpenAppRedirect",
=======
import { Route, Routes } from &quot;react-router-dom&quot;;
import MobileAppPage from &quot;../pages/MobileAppPage&quot;;
import MobileLaunchPage from &quot;../pages/MobileLaunchPage&quot;;
import OpenAppRedirect from &quot;../pages/OpenAppRedirect&quot;;

>>>>>>> origin/cursor/fix-lint-push-and-merge-to-main-4fa7
const MobileAppRoutes = () => {
  return (
    <Routes>
      {/* Mobile App Routes */}
      <Route path=&quot;/download&quot; element={<MobileAppPage />} />
      <Route path=&quot;/mobile-app&quot; element={<MobileAppPage />} />
      <Route path=&quot;/mobile-launch&quot; element={<MobileLaunchPage />} />
      <Route path=&quot;/open-app&quot; element={<OpenAppRedirect />} />
=======
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
>>>>>>> cursor/fix-lint-push-and-merge-to-main-ce13
    </Routes>
  )
},

export default MobileAppRoutes,