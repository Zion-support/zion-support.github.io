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
