<<<<<<< HEAD
const MobileAppRoutes = () => {;
  return (
=======
import { Route, Routes } from "react-router-dom",;
import MobileAppPage from "../pages/MobileAppPage",;
import MobileLaunchPage from "../pages/MobileLaunchPage",;
import OpenAppRedirect from "../pages/OpenAppRedirect",;
;
const MobileAppRoutes = () => {;
  return (;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
    <Routes>;
      {/* Mobile App Routes */}
      <Route path="/download" element={<MobileAppPage />} />;
      <Route path="/mobile-app" element={<MobileAppPage />} />;
      <Route path="/mobile-launch" element={<MobileLaunchPage />} />;
      <Route path="/open-app" element={<OpenAppRedirect />} />;
    </Routes>;
<<<<<<< HEAD
  );
};
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
export default MobileAppRoutes;
;
=======
  ),;
},;
;export default MobileAppRoutes,
 const MobileAppRoutes = () => {
  return (<Routes> {
  /* Mobile App Routes */ 
}<Route path="/download" element= {
  <MobileAppPage /> 
}/> <Route path="/mobile-app" element= {
  <MobileAppPage /> 
}/> <Route path="/mobile-launch" element= {
  <MobileLaunchPage /> 
}/> <Route path="/open-app" element= {
  <OpenAppRedirect /> 
}/> 
};
export default MobileAppRoutes;
>>>>>>> 2218db61eeb0e5fed4774e6d867f5112c39ece45
