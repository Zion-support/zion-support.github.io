import { Route, Routes } from "react-router-dom",
import MobileAppPage from "../pages/MobileAppPage",
import MobileLaunchPage from "../pages/MobileLaunchPage";
import OpenAppRedirect from "../pages/OpenAppRedirect";
<<<<<<< HEAD
const MobileAppRoutes = null;
=======
const MobileAppRoutes = () => {
  return (
    <Routes>
      {/* Mobile App Routes */}
      <Route path="/download" element={<MobileAppPage />} />
      <Route path="/mobile-app" element={<MobileAppPage />} />
      <Route path="/mobile-launch" element={<MobileLaunchPage />} />
      <Route path="/open-app" element={<OpenAppRedirect />} />
    </Routes>
<<<<<<< HEAD
  )
}
=======
  );
};
}

>>>>>>> cursor/automate-test-improve-and-merge-code-107b
export default MobileAppRoutes;
>>>>>>> cursor/fix-syntax-push-and-merge-to-main-7db5
