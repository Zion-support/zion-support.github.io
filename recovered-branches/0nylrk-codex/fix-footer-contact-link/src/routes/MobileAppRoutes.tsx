import { Route, Routes } from &quot;react-router-dom&quot;;
import MobileAppPage from &quot;../pages/MobileAppPage&quot;;
import MobileLaunchPage from &quot;../pages/MobileLaunchPage&quot;;
import OpenAppRedirect from &quot;../pages/OpenAppRedirect&quot;;

const MobileAppRoutes = () => {
  return (
    <Routes>
      {/* Mobile App Routes */}
      <Route path=&quot;/download&quot; element={<MobileAppPage />} />
      <Route path=&quot;/mobile-app&quot; element={<MobileAppPage />} />
      <Route path=&quot;/mobile-launch&quot; element={<MobileLaunchPage />} />
      <Route path=&quot;/open-app&quot; element={<OpenAppRedirect />} />
    </Routes>
  );
};

export default MobileAppRoutes;