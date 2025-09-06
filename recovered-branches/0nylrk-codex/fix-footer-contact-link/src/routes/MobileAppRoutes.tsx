<<<<<<< HEAD
import { Route, Routes } from 'react-router-dom';
import MobileAppPage from '../pages/MobileAppPage';
import MobileLaunchPage from '../pages/MobileLaunchPage';
import OpenAppRedirect from '../pages/OpenAppRedirect';

const MobileAppRoutes = () => {
  return (
    <Routes>
      {/* Mobile App Routes */}
      <Route path='/download' element={<MobileAppPage />} />
      <Route path='/mobile-app' element={<MobileAppPage />} />
      <Route path='/mobile-launch' element={<MobileLaunchPage />} />
      <Route path='/open-app' element={<OpenAppRedirect />} />
    </Routes>
  );
};

=======
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
>>>>>>> 9d7f11d5d98b1e74b0f79fee50dcaab1a752f468
export default MobileAppRoutes;
