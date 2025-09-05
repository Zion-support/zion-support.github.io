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
  );
};

export default MobileAppRoutes;